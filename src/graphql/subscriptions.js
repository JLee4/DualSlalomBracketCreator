// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTournament = `subscription OnCreateTournament {
  onCreateTournament {
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
      matches {
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
export const onUpdateTournament = `subscription OnUpdateTournament {
  onUpdateTournament {
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
      matches {
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
export const onDeleteTournament = `subscription OnDeleteTournament {
  onDeleteTournament {
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
      matches {
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
export const onCreateRaceBracket = `subscription OnCreateRaceBracket {
  onCreateRaceBracket {
    id
    categoryName
    matches {
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
export const onUpdateRaceBracket = `subscription OnUpdateRaceBracket {
  onUpdateRaceBracket {
    id
    categoryName
    matches {
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
export const onDeleteRaceBracket = `subscription OnDeleteRaceBracket {
  onDeleteRaceBracket {
    id
    categoryName
    matches {
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
export const onCreateMatch = `subscription OnCreateMatch {
  onCreateMatch {
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
export const onUpdateMatch = `subscription OnUpdateMatch {
  onUpdateMatch {
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
export const onDeleteMatch = `subscription OnDeleteMatch {
  onDeleteMatch {
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
export const onCreateRacer = `subscription OnCreateRacer {
  onCreateRacer {
    id
    name
    category
    qualificationTime
    raceNumber
  }
}
`;
export const onUpdateRacer = `subscription OnUpdateRacer {
  onUpdateRacer {
    id
    name
    category
    qualificationTime
    raceNumber
  }
}
`;
export const onDeleteRacer = `subscription OnDeleteRacer {
  onDeleteRacer {
    id
    name
    category
    qualificationTime
    raceNumber
  }
}
`;
