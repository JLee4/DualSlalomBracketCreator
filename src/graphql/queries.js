// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTournament = `query GetTournament($id: ID!) {
  getTournament(id: $id) {
    id
    name
    racerList {
      items {
        id
        name
        category
        qualificationTime
        raceNumber
      }
      nextToken
    }
    bracketList {
      items {
        id
        categoryName
      }
      nextToken
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
        nextToken
      }
      bracketList {
        nextToken
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
    matches {
      items {
        id
        matchNumber
        racer1ID
        racer2ID
        racer1Time1
        racer1Time2
        racer2Time1
        racer2Time2
      }
      nextToken
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
      matches {
        nextToken
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
