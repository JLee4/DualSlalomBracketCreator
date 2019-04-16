// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTournament = `subscription OnCreateTournament {
  onCreateTournament {
    id
    name
  }
}
`;
export const onUpdateTournament = `subscription OnUpdateTournament {
  onUpdateTournament {
    id
    name
  }
}
`;
export const onDeleteTournament = `subscription OnDeleteTournament {
  onDeleteTournament {
    id
    name
  }
}
`;
export const onCreateMatch = `subscription OnCreateMatch {
  onCreateMatch {
    id
    tournamentID
    category
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
export const onUpdateMatch = `subscription OnUpdateMatch {
  onUpdateMatch {
    id
    tournamentID
    category
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
export const onDeleteMatch = `subscription OnDeleteMatch {
  onDeleteMatch {
    id
    tournamentID
    category
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
export const onCreateRacer = `subscription OnCreateRacer {
  onCreateRacer {
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
export const onUpdateRacer = `subscription OnUpdateRacer {
  onUpdateRacer {
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
export const onDeleteRacer = `subscription OnDeleteRacer {
  onDeleteRacer {
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
