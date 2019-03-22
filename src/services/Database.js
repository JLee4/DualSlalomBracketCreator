import React, { Component } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from './../aws-exports';
import * as mutations from './../graphql/mutations';
import {Poll} from "./Poll";
Amplify.configure(awsmobile);

export default class Database extends Component {

  static tournament;
  static racerList;
  static bracketList;
  static onlineService = new Poll();

  static clearLocal() {
    localStorage.clear();
  }

  static getLocal() {
    this.tournament = localStorage.getItem("tournament");
    this.racerList = localStorage.getItem("racerList");
    this.bracketList = localStorage.getItem("bracketList");
  }

  static updateLocal() {
    localStorage.setItem("tournament", this.tournament);
    localStorage.setItem("racerList", this.racerList);
    localStorage.setItem("bracketList", this.bracketList);
  }

  static awsSync() {
    if (this.tournament.id) {
      this.updateTournament(this.tournament);
    } else if (!this.tournament.id) {
      this.createTournament(undefined, this.tournament);
    }

    for (let bracket of this.bracketList) {
      for (let match of bracket.matches) {
        if (match.id) {
          this.updateMatch(match);
        } else if (!match.id) {
          this.createMatch(undefined, undefined, undefined, undefined, match);
        }
      }
      if (bracket.id) {
        this.updateRaceBracket(bracket);
      } else if (!bracket.id) {
        this.createRaceBracket(undefined, bracket);
      }
    }

    for (let racer of this.racerList) {
      if (racer.id) {
        this.updateRacer(racer);
      } else if (!racer.id) {
        this.createRacer(undefined, undefined, undefined, racer);
      }
    }
  }

  static persistToStorage() {
    if (!this.onlineService) {
      this.onlineService = new Poll();
    }
    if (this.onlineService.isOnline()) {
      Database.awsSync();
    } else {
      Database.updateLocal();
    }
  }

  static isOnline() {
    return this.onlineService.isOnline();
  }

  static getCurrentTournament() {
    if (this.tournament) {
      return this.tournament;
    } else {
      return false;
    }
  }

  static getBracketList() {
    if (this.bracketList) {
      return this.bracketList;
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

  //TODO see if all db mutations work especially the updates
  static createTournament(name, tournament) {
    let details = {
      name: name,
    };
    if (tournament) {
      details = tournament;
    }
    API.graphql(graphqlOperation(mutations.createTournament, {input: details})).then((resolve) => {
      Database.tournament = resolve.data.createTournament;
    });
  };

  static updateTournament(tournament) {
    API.graphql(graphqlOperation(mutations.updateTournament, {input: tournament})).then((resolve) => {
      Database.tournament = resolve.data.updateTournament;
    }, (reject) => {
      console.log(reject);
    });
  };

  static createRaceBracket(categoryName, bracket) {
    let details = {
      categoryName: categoryName
    };
    if (bracket) {
      details = bracket;
    }
    API.graphql(graphqlOperation(mutations.createRaceBracket, {input: details})).then((resolve) => {
      this.bracketList.push(resolve.data.createRaceBracket);
      this.tournament.bracketList = this.bracketList;
    });
  };

  static updateRaceBracket(bracket) {
    API.graphql(graphqlOperation(mutations.updateRaceBracket, {input: bracket})).then((resolve) => {
      let newBrackets = Database.bracketList.filter(bracket => bracket.categoryName !== resolve.data.updateRaceBracket.categoryName);
      newBrackets.push(resolve.data.updateRaceBracket);
      this.tournament.bracketList = newBrackets;
      this.bracketList = newBrackets;
    });
  };

  static deleteRaceBracket(id) {
    let details = {
      id: id
    };
    API.graphql(graphqlOperation(mutations.deleteRaceBracket, {input: details}));
  };

  static createMatch(bracket, matchNumber, racer1ID, racer2ID, match) {
    let details = {
      matchNumber: matchNumber,
      racer1ID: racer1ID,
      racer2ID: racer2ID
    };
    if (match) {
      details = match;
    }
    API.graphql(graphqlOperation(mutations.createMatch, {input: details})).then((resolve) => {
      bracket.matches.push(resolve.data.createMatch); //TODO test if this works within JS like are the elements changed for the bracket
    });
  };

  static updateMatch(bracket, match) {
    API.graphql(graphqlOperation(mutations.updateMatch, {input: match}).then((resolve) => {
      let newMatches = bracket.matches.filter(match => match.categoryName !== resolve.data.updateMatch.categoryName);
      newMatches.push(resolve.data.updateMatch);
      bracket.matches.clear();
      Array.prototype.push.apply(bracket.matches, newMatches);
    }));
  };

  static deleteMatch(id) {
    let details = {
      id: id
    };
    API.graphql(graphqlOperation(mutations.deleteMatch, {input: details}));
  };

  static createRacer(name, category, raceNumber, racer) {
    let details = {
      name: name,
      category: category,
      raceNumber: raceNumber
    };
    if (racer) {
      details = racer;
    }
    API.graphql(graphqlOperation(mutations.createRacer, {input: details})).then((resolve) => {
      this.racerList.push(resolve.data.createRacer);
      this.tournament.racerList = this.racerList;
    });
  };

  static updateRacer(racer) {
    API.graphql(graphqlOperation(mutations.updateRacer, {input: racer})).then((resolve) => {
      let newRacers = Database.racerList.filter(racer => racer.raceNumber !== resolve.data.updateRacer.raceNumber);
      newRacers.push(resolve.data.updateRacer);
      this.tournament.racerList = newRacers;
      this.racerList = newRacers;
    });
  };

  static deleteRacer(id) {
    let details = {
      id: id
    };
    API.graphql(graphqlOperation(mutations.deleteRacer, {input: details}));
  };
}
