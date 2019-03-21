// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTournament = `query GetTournament($id: ID!) {
  getTournament(id: $id) {
    id
    name
    racerList {
      id
      name
      category
      qualificationTime
      raceNumber
    }
    bracketList {
      id
      categoryName
      match {
        id
        matchNumber
        racer1ID
        racer2ID
        racer1Time1
        racer1Time2
        racer2Time1
        racer2Time2
      }
    }
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
      racerList {
        id
        name
        category
        qualificationTime
        raceNumber
      }
      bracketList {
        id
        categoryName
      }
    }
    nextToken
  }
}
`;
export const getRaceBracket = `query GetRaceBracket($id: ID!) {
  getRaceBracket(id: $id) {
    id
    categoryName
    match {
      id
      matchNumber
      racer1ID
      racer2ID
      racer1Time1
      racer1Time2
      racer2Time1
      racer2Time2
      winner {
        id
        name
        category
        qualificationTime
        raceNumber
      }
    }
  }
}
`;
export const listRaceBrackets = `query ListRaceBrackets(
  $filter: ModelRaceBracketFilterInput
  $limit: Int
  $nextToken: String
) {
  listRaceBrackets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      categoryName
      match {
        id
        matchNumber
        racer1ID
        racer2ID
        racer1Time1
        racer1Time2
        racer2Time1
        racer2Time2
      }
    }
    nextToken
  }
}
`;
export const getMatch = `query GetMatch($id: ID!) {
  getMatch(id: $id) {
    id
    matchNumber
    racer1ID
    racer2ID
    racer1Time1
    racer1Time2
    racer2Time1
    racer2Time2
    winner {
      id
      name
      category
      qualificationTime
      raceNumber
    }
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
      matchNumber
      racer1ID
      racer2ID
      racer1Time1
      racer1Time2
      racer2Time1
      racer2Time2
      winner {
        id
        name
        category
        qualificationTime
        raceNumber
      }
    }
    nextToken
  }
}
`;
export const getRacer = `query GetRacer($id: ID!) {
  getRacer(id: $id) {
    id
    name
    category
    qualificationTime
    raceNumber
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
      name
      category
      qualificationTime
      raceNumber
    }
    nextToken
  }
}
`;
