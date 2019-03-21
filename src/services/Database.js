import React, { Component } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from './../aws-exports';
import * as queries from './../graphql/queries';
import * as mutations from './../graphql/mutations';
import {Poll} from "./Poll";
Amplify.configure(awsmobile);

export default class Database extends Component {

  static tournament;
  static onlineService = new Poll();

  static clearLocal() {
    localStorage.clear();
  }

  static updateLocal() {

  }

  static awsSync() {

  }

  static persistToStorage() {
    if (this.onlineService.isOnline()) {
      this.awsSync();
    } else {
      this.updateLocal();
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

  static createTournament(name) {
    let details = {
      name: name,
    };
    API.graphql(graphqlOperation(mutations.createTournament, {input: details})).then((data) => {
      Database.tournament = data;
    });

  };

  static updateTournament(tournament) {
    let updatedTournament = API.graphql(graphqlOperation(mutations.updateTournament, {input: tournament}));
    this.state = { tournament: updatedTournament };
  };

  static createRaceBracket(categoryName) {
    let details = {
      categoryName: categoryName
    };
    let bracket = API.graphql(graphqlOperation(mutations.createRaceBracket, {input: details}));
    let tournament = this.state.tournament;
    tournament.bracketList.push(bracket);
  };

  static updateRaceBracket(bracket) {
    API.graphql(graphqlOperation(mutations.updateRaceBracket, {input: bracket}));
  };

  static deleteRaceBracket(id) {
    API.graphql(graphqlOperation(mutations.deleteRaceBracket, {id: id}));
  };

  static createMatch(bracket, matchNumber, racer1ID, racer2ID) {
    let details = {
      matchNumber: matchNumber,
      racer1ID: racer1ID,
      racer2ID: racer2ID
    };
    let match = API.graphql(graphqlOperation(mutations.createMatch, {input: details}));
    bracket.matches.push(match);
  };

  static updateMatch(match) {
    API.graphql(graphqlOperation(mutations.updateMatch, {input: match}));
  };

  static deleteMatch(id) {
    API.graphql(graphqlOperation(mutations.deleteMatch, {id: id}));
  };

  static createRacer(name, category, raceNumber) {
    let details = {
      name: name,
      category: category,
      raceNumber: raceNumber
    };
    let racer = API.graphql(graphqlOperation(mutations.createRacer, {input: details}));
    let tournament = this.state.tournament;
    tournament.racerList.push(racer);
  };

  static updateRacer(racer) {
    API.graphql(graphqlOperation(mutations.updateRacer, {input: racer}));
  };

  static deleteRacer(id) {
    API.graphql(graphqlOperation(mutations.deleteRacer, {id: id}));
  };

  static
}
