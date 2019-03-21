// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTournament = `mutation CreateTournament($input: CreateTournamentInput!) {
  createTournament(input: $input) {
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
export const updateTournament = `mutation UpdateTournament($input: UpdateTournamentInput!) {
  updateTournament(input: $input) {
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
export const deleteTournament = `mutation DeleteTournament($input: DeleteTournamentInput!) {
  deleteTournament(input: $input) {
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
export const createRaceBracket = `mutation CreateRaceBracket($input: CreateRaceBracketInput!) {
  createRaceBracket(input: $input) {
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
export const updateRaceBracket = `mutation UpdateRaceBracket($input: UpdateRaceBracketInput!) {
  updateRaceBracket(input: $input) {
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
export const deleteRaceBracket = `mutation DeleteRaceBracket($input: DeleteRaceBracketInput!) {
  deleteRaceBracket(input: $input) {
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
export const createMatch = `mutation CreateMatch($input: CreateMatchInput!) {
  createMatch(input: $input) {
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
export const updateMatch = `mutation UpdateMatch($input: UpdateMatchInput!) {
  updateMatch(input: $input) {
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
export const deleteMatch = `mutation DeleteMatch($input: DeleteMatchInput!) {
  deleteMatch(input: $input) {
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
export const createRacer = `mutation CreateRacer($input: CreateRacerInput!) {
  createRacer(input: $input) {
    id
    name
    category
    qualificationTime
    raceNumber
  }
}
`;
export const updateRacer = `mutation UpdateRacer($input: UpdateRacerInput!) {
  updateRacer(input: $input) {
    id
    name
    category
    qualificationTime
    raceNumber
  }
}
`;
export const deleteRacer = `mutation DeleteRacer($input: DeleteRacerInput!) {
  deleteRacer(input: $input) {
    id
    name
    category
    qualificationTime
    raceNumber
  }
}
`;
