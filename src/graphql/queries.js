// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTournament = `query GetTournament($id: ID!) {
  getTournament(id: $id) {
    id
    name
  }
}
`;
export const listTournaments = `query ListTournaments(
  $filter: ModelTournamentFilterInput
  $limit: Int
  $nextToken: String
) {
  listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
export const getMatch = `query GetMatch($id: ID!) {
  getMatch(id: $id) {
    id
    tournamentID
    categoryName
    matchNumber
    racer1ID
    racer2ID
    racer1Number
    racer2Number
    racer1Time1
    racer1Time2
    racer2Time1
    racer2Time2
    winnerRacerNumber
    winnerID
  }
}
`;
export const listMatchs = `query ListMatchs(
  $filter: ModelMatchFilterInput
  $limit: Int
  $nextToken: String
) {
  listMatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      tournamentID
      categoryName
      matchNumber
      racer1ID
      racer2ID
      racer1Number
      racer2Number
      racer1Time1
      racer1Time2
      racer2Time1
      racer2Time2
      winnerRacerNumber
      winnerID
    }
    nextToken
  }
}
`;
export const getRacer = `query GetRacer($id: ID!) {
  getRacer(id: $id) {
    id
    tournamentID
    name
    category
    seedNumber
    qualificationTime
    racerNumber
  }
}
`;
export const listRacers = `query ListRacers(
  $filter: ModelRacerFilterInput
  $limit: Int
  $nextToken: String
) {
  listRacers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      tournamentID
      name
      category
      seedNumber
      qualificationTime
      racerNumber
    }
    nextToken
  }
}
`;
