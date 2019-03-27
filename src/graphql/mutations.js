// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTournament = `mutation CreateTournament($input: CreateTournamentInput!) {
  createTournament(input: $input) {
    id
    name
  }
}
`;
export const updateTournament = `mutation UpdateTournament($input: UpdateTournamentInput!) {
  updateTournament(input: $input) {
    id
    name
  }
}
`;
export const deleteTournament = `mutation DeleteTournament($input: DeleteTournamentInput!) {
  deleteTournament(input: $input) {
    id
    name
  }
}
`;
export const createMatch = `mutation CreateMatch($input: CreateMatchInput!) {
  createMatch(input: $input) {
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
export const updateMatch = `mutation UpdateMatch($input: UpdateMatchInput!) {
  updateMatch(input: $input) {
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
export const deleteMatch = `mutation DeleteMatch($input: DeleteMatchInput!) {
  deleteMatch(input: $input) {
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
export const createRacer = `mutation CreateRacer($input: CreateRacerInput!) {
  createRacer(input: $input) {
    id
    tournamentID
    name
    category
    qualificationTime
    racerNumber
  }
}
`;
export const updateRacer = `mutation UpdateRacer($input: UpdateRacerInput!) {
  updateRacer(input: $input) {
    id
    tournamentID
    name
    category
    qualificationTime
    racerNumber
  }
}
`;
export const deleteRacer = `mutation DeleteRacer($input: DeleteRacerInput!) {
  deleteRacer(input: $input) {
    id
    tournamentID
    name
    category
    qualificationTime
    racerNumber
  }
}
`;
