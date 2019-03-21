import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from './aws-exports';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import * as subscriptions from './graphql/subscriptions';
Amplify.configure(awsmobile);

export default class Database extends Component {

  constructor(props) {
    super(props);
  }

  createTournament = (name) => {
    let details = {
      name: name
    };
    let tournament = API.graphql(graphqlOperation(mutations.createTournament, {input: details}));
    this.state = { tournament: tournament };
  };

  updateTournament = (tournament) => {
    let updatedTournament = API.graphql(graphqlOperation(mutations.updateTournament, {input: tournament}));
    this.state = { tournament: updatedTournament };
  };

  createRaceBracket = (categoryName) => {
    let details = {
      categoryName: categoryName
    };
    let bracket = API.graphql(graphqlOperation(mutations.createRaceBracket, {input: details}));
    let tournament = this.state.tournament;
    tournament.bracketList.push(bracket);
  };

  updateRaceBracket = (bracket) => {
    API.graphql(graphqlOperation(mutations.updateRaceBracket, {input: bracket}));
  };

  deleteRaceBracket = (id) => {
    API.graphql(graphqlOperation(mutations.deleteRaceBracket, {id: id}));
  };

  createMatch = (bracket, matchNumber, racer1ID, racer2ID) => {
    let details = {
      matchNumber: matchNumber,
      racer1ID: racer1ID,
      racer2ID: racer2ID
    };
    let match = API.graphql(graphqlOperation(mutations.createMatch, {input: details}));
    bracket.matches.push(match);
  };

  updateMatch = (match) => {
    API.graphql(graphqlOperation(mutations.updateMatch, {input: match}));
  };

  deleteMatch = (id) => {
    API.graphql(graphqlOperation(mutations.deleteMatch, {id: id}));
  };

  createRacer = (name, category, raceNumber) => {
    let details = {
      name: name,
      category: category,
      raceNumber: raceNumber
    };
    let racer = API.graphql(graphqlOperation(mutations.createRacer, {input: details}));
    let tournament = this.state.tournament;
    tournament.racerList.push(racer);
  };

  updateRacer = (racer) => {
    API.graphql(graphqlOperation(mutations.updateRacer, {input: racer}));
  };

  deleteRacer = (id) => {
    API.graphql(graphqlOperation(mutations.deleteRacer, {id: id}));
  };
}
