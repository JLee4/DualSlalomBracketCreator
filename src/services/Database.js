import React, { Component } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from './../aws-exports';
import * as queries from './../graphql/queries';
import * as mutations from './../graphql/mutations';
Amplify.configure(awsmobile);

export default class Database extends Component {

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
    Database.printVars();
    Database.persistToStorage();
   */

  static tournament;
  static racerList = [];
  static matches = [];
  static racerDeleteQueue = [];
  static matchDeleteQueue = [];

  static clearLocal() {
    localStorage.clear();
  }

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

  static getLocal() {
    this.tournament = JSON.parse(localStorage.getItem("tournament"));
    this.racerList = JSON.parse(localStorage.getItem("racerList"));
    this.matches = JSON.parse(localStorage.getItem("matches"));
    this.racerDeleteQueue = JSON.parse(localStorage.getItem("racerDeleteQueue"));
    this.matchDeleteQueue = JSON.parse(localStorage.getItem("matchDeleteQueue"));
  }

  static updateLocal() {
    localStorage.setItem("tournament", JSON.stringify(this.tournament));
    localStorage.setItem("racerList", JSON.stringify(this.racerList));
    localStorage.setItem("matches", JSON.stringify(this.matches));
    localStorage.setItem("racerDeleteQueue", JSON.stringify(this.racerDeleteQueue));
    localStorage.setItem("matchDeleteQueue", JSON.stringify(this.matchDeleteQueue));
  }

  static awsSync() {
    if (this.tournament.id) {
      this.updateTournament(this.tournament);
    } else if (!this.tournament.id) {
      return API.graphql(graphqlOperation(mutations.createTournament, {input: this.tournament})).then((resolve) => {
        Database.tournament = resolve.data.createTournament;
      }, (reject) => {
        console.log(reject);
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
          console.log(reject);
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
      return this.matches;
    } else {
      return false;
    }
  }

  static getRacerList() {
    if (this.racerList) {
      return this.racerList;
    } else {
      return false;
    }
  }

  static createTournament(name, tournament) {
    let details = {
      name: name,
    };
    if (tournament) {
      details = tournament;
    }
    return API.graphql(graphqlOperation(mutations.createTournament, {input: details})).then((resolve) => {
      Database.tournament = resolve.data.createTournament;
      return Database.tournament;
    }, (reject) => {
      //console.log(reject);
      Database.tournament = details;
    });
  };

  static updateTournament(tournament) {
    API.graphql(graphqlOperation(mutations.updateTournament, {input: tournament})).then((resolve) => {
      Database.tournament = resolve.data.updateTournament;
    }, (reject) => {
      console.log(reject);
      Database.tournament = tournament;
    });
  };

  static createMatch(categoryName, matchNumber, racer1Number, racer2Number, match) {
    let details = {
      tournamentID: this.tournament ? this.tournament.id : undefined,
      categoryName: categoryName,
      matchNumber: matchNumber,
      racer1Number: racer1Number,
      racer2Number: racer2Number
    };
    if (match) {
      details = match;
    }
    Database.matches.push(details);

    API.graphql(graphqlOperation(mutations.createMatch, {input: details})).then((resolve) => {
      details.id = resolve.data.createMatch.id;
      if (!details.racer1ID || !details.racer2ID || !details.winnerID) {
        for (let racer of this.racerList) {
          if (racer.racer1Number === match.racer1Number) {
            details.racer1ID = racer.id;
          }
          if (racer.racer2Number === match.racer2Number) {
            details.racer2ID = racer.id;
          }
          if (racer.winnerRacerNumber === match.winnerRacerNumber) {
            details.winnerID = racer.id;
          }
        }
      }
    }, (reject) => {
      console.log(reject);
    });
  };

  static updateMatch(match) {
    match.tournamentID = this.tournament.id;
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
    API.graphql(graphqlOperation(mutations.updateMatch, {input: match})).then((resolve) => {
    }, (reject) => {
    });
  };

  static deleteMatch(match) {
    API.graphql(graphqlOperation(mutations.deleteMatch, {input: match})).then(() => {},
      () => {
        if (match.id) {
          Database.matchDeleteQueue.push(match);
        }
      }).finally(() => {
        Database.matchDeleteQueue = Database.matchDeleteQueue.filter(oldMatch => oldMatch.categoryName !== match.categoryName
          || oldMatch.matchNumber !== match.matchNumber);
        Database.matches = Database.matches.filter(oldMatch => oldMatch.categoryName !== match.categoryName
            || oldMatch.matchNumber !== match.matchNumber);
    });
  };

  static createRacer(name, category, racerNumber, racer) {
    let details = {
      name: name,
      category: category,
      racerNumber: racerNumber,
      tournamentID: this.tournament ? this.tournament.id : undefined
    };
    if (racer) {
      details = racer;
    }
    this.racerList.push(details);

    API.graphql(graphqlOperation(mutations.createRacer, {input: details})).then((resolve) => {
      details.id = resolve.data.createRacer.id;
      racer.tournamentID = this.tournament.id;
    }, (reject) => {
      //console.log(reject);
    });
  };

  static updateRacer(racer) {
    racer.tournamentID = this.tournament.id;
    API.graphql(graphqlOperation(mutations.updateRacer, {input: racer})).then((resolve) => {
      racer.id = resolve.data.updateRacer.id;
      racer.tournamentID = this.tournament.id;
    }, (reject) => {

    });
  };

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
