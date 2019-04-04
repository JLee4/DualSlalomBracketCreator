import React, { Component } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from './../aws-exports';
import * as queries from './../graphql/queries';
import * as mutations from './../graphql/mutations';
Amplify.configure(awsmobile);

export default class Database extends Component {

  //the schema expected by AWS is in amplify/backend/api/dualslalombracketcre/schema.graphql
  //Schemas: NOTE: the ! (exclamation point) means the member is required (e.g. name: String! means "name" is required)
  /*
    type Tournament @model {
      id: ID!
      name: String!
    }

    type Match @model {
      id: ID!
      tournamentID: ID
      category: String!
      matchNumber: Int!
      racer1ID: ID
      racer2ID: ID
      racer1Number: String!
      racer2Number: String!
      racer1Time1: String
      racer1Time2: String
      racer2Time1: String
      racer2Time2: String
      winnerRacerNumber: String
      winnerID: ID
    }

    type Racer @model {
      id: ID!
      tournamentID: ID
      name: String!
      category: String!
      qualificationTime: String
      racerNumber: String!
    }
   */

  //NOTE: updateMatch() and updateRacer() expects you to modify the object from getMatches() or getRacerList(), respectively
  //SO, modify the object before calling either update method.
  //EXAMPLE:
  // let racerList = Database.getRacerList();
  // racerList[0].qualificationTime = "00:00:30.500Z";
  // Database.updateRacer(racerList[0]);

  //So, the pipeline for using storage is:
  /*
   getLocal() if previous session exists ->
   clearLocal() if new tournament created ->
   createObject(required params) ->
   updateObject(required params) if needed ->
   deleteObject(required params) if needed ->
   persistToStorage() if offline otherwise createObject, updateObject, deleteObject will push to AWS ->
   */

  //The order you should create objects in is:
  /*
  Tournament -> Racers -> Matches
  NOTE: createMatch(), updateMatch(), and persistToStorage()/syncAWS() all update the racerIDs if it exists
   */

  //template for making changes to storage
  /*
    Database.createTournament('tournament');
    Database.createRacer('racer1', 'A', '1');
    Database.createRacer('racer2', 'A', '2');
    Database.createRacer('racer3', 'B', '3');
    Database.createRacer('racer4', 'B', '4');
    var tournament = Database.getCurrentTournament();
    var racerList = Database.getRacerList();
    Database.updateTournament({id: tournament.id, name: "rename"});
    for (let racer of racerList) {
      racer.qualificationTime = "00:00:30.500Z";
      Database.updateRacer(racer);
    }
    Database.createMatch('A', 1, racerList[0].racerNumber, racerList[1].racerNumber, null);
    Database.createMatch( 'A',2, racerList[2].racerNumber, racerList[3].racerNumber, null);
    for (let match of Database.getMatches()) {
      match.racer1Time1 = "00:00:30.500Z";
      match.racer1Time2 = "00:00:35.500Z";
      match.racer2Time1 = "00:00:31.500Z";
      match.racer2Time2 = "00:00:35.500Z";
      match.winnerRacerNumber = match.racer1Number;
      Database.updateMatch(match);
    }
    let racerList = Database.getRacerList();
    let matches = Database.getMatches();
    Database.deleteMatch(matches[0]);
    Database.deleteRacer(racerList[0]);
    Database.persistToStorage();
   */

  static tournament;
  static racerList = [];
  static matches = [];
  static racerDeleteQueue = [];
  static matchDeleteQueue = [];

  static printLocal() {
    console.log(JSON.parse(localStorage.getItem("tournament")));
    console.log(JSON.parse(localStorage.getItem("racerList")));
    console.log(JSON.parse(localStorage.getItem("matches")));
    console.log(JSON.parse(localStorage.getItem("racerDeleteQueue")));
    console.log(JSON.parse(localStorage.getItem("matchDeleteQueue")));
  }

  static printVars() {
    console.log(this.tournament);
    console.log(this.racerList);
    console.log(this.matches);
    console.log(this.racerDeleteQueue);
    console.log(this.matchDeleteQueue);
  }

  /**
   * Clears the local storage. Use it when making a new tournament because it doesn't
   * differentiate between most recent and old storage
   */
  static clearLocal() {
    localStorage.clear();
  }

  /**
   * replaces all session variables from local. I'd use this for an existing tournament
   */
  static getLocal() {
    this.tournament = JSON.parse(localStorage.getItem("tournament"));
    this.racerList = JSON.parse(localStorage.getItem("racerList"));
    this.matches = JSON.parse(localStorage.getItem("matches"));
    this.racerDeleteQueue = JSON.parse(localStorage.getItem("racerDeleteQueue"));
    this.matchDeleteQueue = JSON.parse(localStorage.getItem("matchDeleteQueue"));
  }

  /**
   * update the local storage with session variables
   */
  static updateLocal() {
    localStorage.setItem("tournament", JSON.stringify(this.tournament));
    localStorage.setItem("racerList", JSON.stringify(this.racerList));
    localStorage.setItem("matches", JSON.stringify(this.matches));
    localStorage.setItem("racerDeleteQueue", JSON.stringify(this.racerDeleteQueue));
    localStorage.setItem("matchDeleteQueue", JSON.stringify(this.matchDeleteQueue));
  }

  /**
   * Syncs all session variables with AWS
   */
  static awsSync() {
    if (this.tournament.id) {
      this.updateTournament(this.tournament);
    } else if (!this.tournament.id) {
      API.graphql(graphqlOperation(mutations.createTournament, {input: this.tournament})).then((resolve) => {
        Database.tournament = resolve.data.createTournament;
      }, (reject) => {
      });
    }

    for (let racer of this.racerList) {
      if (racer.id) {
        this.updateRacer(racer);
      } else if (!racer.id) {
        racer.tournamentID = this.tournament.id;
        API.graphql(graphqlOperation(mutations.createRacer, {input: racer})).then((resolve) => {
          racer.id = resolve.data.createRacer.id;
        }, (reject) => {
        });
      }
    }

    for (let match of this.matches) {
      if (match.id) {
        this.updateMatch(match);
      } else if (!match.id) {
        match.tournamentID = this.tournament.id;
        API.graphql(graphqlOperation(mutations.createMatch, {input: match})).then((resolve) => {
          match.id = resolve.data.createMatch.id;
          if (!match.racer1ID || !match.racer2ID || !match.winnerID) {
            for (let racer of this.racerList) {
              if (racer.racer1Number === match.racer1Number) {
                match.racer1ID = racer.id;
              }
              if (racer.racer2Number === match.racer2Number) {
                match.racer2ID = racer.id;
              }
              if (racer.winnerRacerNumber === match.winnerRacerNumber) {
                match.winnerID = racer.id;
              }
            }
          }
        }, (reject) => {
          console.log(reject);
        });
      }
    }

    for (let racer of this.racerDeleteQueue) {
      this.deleteRacer({id: racer.id})
    }

    for (let match of this.matchDeleteQueue) {
      this.deleteMatch({id: match.id});
    }
  }

  /**
   * Call this if you want to persist to storage both AWS and local storage.
   */
  static persistToStorage() {
    Database.awsSync();
    Database.updateLocal();
  }

  static getCurrentTournament() {
    if (this.tournament) {
      return this.tournament;
    } else {
      return false;
    }
  }

  static getMatches() {
    if (this.matches) {
      this.matches.sort((a, b) => {
        return a.matchNumber - b.matchNumber;
      });
      return this.matches;
    } else {
      return false;
    }
  }

  static getMatchesByCategory(category) {
    if (this.matches) {
      this.matches.sort((a, b) => {
        return a.matchNumber - b.matchNumber;
      });
      return this.matches.filter(match => match.category === category);
    } else {
      return false;
    }
  }

  static getRacerList() {
    if (this.racerList) {
      this.racerList.sort((a, b) => {
        if (!a.qualificationTime || !b.qualificationTime) {
          return parseInt(a.racerNumber) - parseInt(b.racerNumber);
        }
        return new Date('1970-01-01T00:' + a.qualificationTime + 'Z') - new Date('1970-01-01T00:' + b.qualificationTime + 'Z');
      });
      return this.racerList;
    } else {
      return false;
    }
  }

  static getRacersByCategory(category) {
    this.racerList.sort((a, b) => {
      if (!a.qualificationTime || !b.qualificationTime) {
        return parseInt(a.racerNumber) - parseInt(b.racerNumber);
      }
      return new Date('1970-01-01T00:' + a.qualificationTime + 'Z') - new Date('1970-01-01T00:' + b.qualificationTime + 'Z');
    });
    let categoryRacers = this.racerList.filter(racer => racer.category === category);
    for (let i = 0; i < categoryRacers.length; i++) {
      categoryRacers[i].seedNumber = i + 1;
      this.updateRacer(categoryRacers[i]);
    }
    return categoryRacers;
  }

  /**
   * Call to add a new tournament to session variables and create in AWS if online
   * @param name as string is required if no tournament object
   * @param tournament you can pass in a tournament object as well
   */
  static createTournament(name, tournament) {
    let details = {
      name: name,
    };
    if (tournament) {
      details = tournament;
    }
    API.graphql(graphqlOperation(mutations.createTournament, {input: details})).then((resolve) => {
      Database.tournament = resolve.data.createTournament;
    }, (reject) => {
      Database.tournament = details;
    });
  };

  /**
   * Updates the session variable and calls AWS
   * @param tournament
   */
  static updateTournament(tournament) {
    API.graphql(graphqlOperation(mutations.updateTournament, {input: tournament})).then((resolve) => {
      Database.tournament = resolve.data.updateTournament;
    }, (reject) => {
      Database.tournament = tournament;
    });
  };

  /**
   * Creates a match and calls AWS
   * also updates the racerIDs with corresponding racerNumbers if racerID exists
   * @param category as string is required if no match object
   * @param matchNumber as int is required if no match object
   * @param match you can pass in a match object as well
   */
  static createMatch(category, matchNumber, match) {
    let details = {
      tournamentID: this.tournament ? this.tournament.id : undefined,
      category: category,
      matchNumber: matchNumber,
    };
    if (match) {
      details = match;
    }
    Database.matches.push(details);

    API.graphql(graphqlOperation(mutations.createMatch, {input: details})).then((resolve) => {
      details.id = resolve.data.createMatch.id;
      if (!details.racer1ID || !details.racer2ID || !details.winnerID) {
        for (let racer of this.racerList) {
          if (racer.racerNumber === match.racer1Number) {
            details.racer1ID = racer.id;
          }
          if (racer.racerNumber === match.racer2Number) {
            details.racer2ID = racer.id;
          }
          if (racer.racerNumber === match.winnerRacerNumber) {
            details.winnerID = racer.id;
          }
        }
      }
    }, (reject) => {
    });
  };

  /**
   * Updates match and calls AWS
   * also updates the racerIDs with corresponding racerNumbers if racerID exists
   * @param match
   */
  static updateMatch(match) {
    match.tournamentID = this.tournament.id;
    if (!match.racer1ID || !match.racer2ID || !match.winnerID) {
      for (let racer of this.racerList) {
        if (racer.racerNumber === match.racer1Number) {
          match.racer1ID = racer.id;
        }
        if (racer.racerNumber === match.racer2Number) {
          match.racer2ID = racer.id;
        }
        if (racer.racerNumber === match.winnerRacerNumber) {
          match.winnerID = racer.id;
        }
      }
    }
    API.graphql(graphqlOperation(mutations.updateMatch, {input: match})).then((resolve) => {
    }, (reject) => {
    });
  };

  /**
   * Removes the match and calls AWS
   * @param match
   */
  static deleteMatch(match) {
    API.graphql(graphqlOperation(mutations.deleteMatch, {input: match})).then(() => {},
      () => {
        if (match.id) {
          Database.matchDeleteQueue.push(match);
        }
      }).finally(() => {
        Database.matchDeleteQueue = Database.matchDeleteQueue.filter(oldMatch => oldMatch.category !== match.category
          || oldMatch.matchNumber !== match.matchNumber);
        Database.matches = Database.matches.filter(oldMatch => oldMatch.category !== match.category
            || oldMatch.matchNumber !== match.matchNumber);
    });
  };


  /**
   * Creates a racer and calls AWS
   * @param name as string is required if no racer object
   * @param category as string is required if no racer object
   * @param racerNumber as string is required if no racer object
   * @param qualificationTime as string is required if no racer object
   * @param racer if passing an entire racer object
   */
  static createRacer(name, racerNumber, category, qualificationTime, racer) {
    let details = {
      name: name,
      category: category,
      racerNumber: racerNumber,
      qualificationTime: qualificationTime,
      tournamentID: this.tournament ? this.tournament.id : undefined
    };
    if (racer) {
      details = racer;
    }
    this.racerList.push(details);

    API.graphql(graphqlOperation(mutations.createRacer, {input: details})).then((resolve) => {
      details.id = resolve.data.createRacer.id;
     // racer.tournamentID = this.tournament.id;
    }, (reject) => {
    });
  };

  /**
   * Updates racer and calls AWS
   * @param racer
   */
  static updateRacer(racer) {
    racer.tournamentID = this.tournament.id;
    API.graphql(graphqlOperation(mutations.updateRacer, {input: racer})).then((resolve) => {
      racer.id = resolve.data.updateRacer.id;
      racer.tournamentID = this.tournament.id;
    }, (reject) => {

    });
  };

  /**
   * deletes the racer and syncs it with AWS
   * @param racer
   */
  static deleteRacer(racer) {
    API.graphql(graphqlOperation(mutations.deleteRacer, {input: racer})).then(() => {},
      () => {
        if (racer.id) {
          Database.racerDeleteQueue.push(racer);
        }
      }).finally(() => {
        Database.racerDeleteQueue = Database.racerDeleteQueue.filter(oldRacer => oldRacer.racerNumber !== racer.racerNumber);
        Database.racerList = Database.racerList.filter(oldRacer => oldRacer.racerNumber !== racer.racerNumber);
    });
  };
}
