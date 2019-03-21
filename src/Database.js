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

    this.state = {
    };
  }

  createTournament = (name) => {

  };
  updateTournament = (name) => {

  };
  deleteTournament = (name) => {

  };
  createRaceBracket = (name) => {

  };
  updateRaceBracket = (name) => {

  };
  deleteRaceBracket = (name) => {

  };
  createMatch = (name) => {

  };
  updateMatch = (name) => {

  };
  deleteMatch = (name) => {

  };
  createRacer = (name) => {

  };
  updateRacer = (name) => {

  };
  deleteRacer = (name) => {

  };
}
