import styled, { css } from "styled-components";
import React, {Component} from "react";
import ReactDOM from "react-dom";

import './App.css';
import Component2 from './Component2';
import btn_icon_835433 from './images/btn_icon_835433.png';
import MA from './images/MensA.png';
import btn_icon_back_bracket from './images/btn_icon_back_bracket.png';
import Select from 'react-select';
import btn_icon_652560 from './images/btn_icon_652560.png';


// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import {createMatch} from "./graphql/mutations";
import {NULL} from "graphql/language/kinds";
import Database from './services/Database.js';

import "./styles.css";
//this is the styled component for the competitor which is just a button

//i pass it props of css grid so that it the positions of the buttons can just be placed
//in their correct spot no matter the size of the bracket
let Competitor = styled.button`
  color: #f7e6f0;
  font-size: 20px;
  text-align: center;
  grid-column-start: ${props => props.indexOfColumn};
  grid-row-start: ${props => props.indexOfRow};
  background-color: ${props => props.isClicked};
  margin: 5px;
  border: 2px solid #151221;
`;

//i made main a styled component. It also uses grid props for
//the different grids I used
const Main = styled.div`
  grid-template-columns: ${props => props.mainIndexOfColumn};
  grid-template-rows: ${props => props.mainIndexOfRow};
  background-color: #bee9ee1f;
  display: grid;
  height: 100vh;
  text-align: center;
`;

//props are passed into the input and input button for things such as a change or button click
function Input(props) {
  return (
    <div className="intro-components">
      
      <div className="size-label">
        <h5>Choose your Size!</h5>
      </div>
      <div className="size-label">
        <select onChange={props.onChange}>
          <option value="undefined" />
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="64">64</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          id="number"
          value={props.newName}
          placeholder="Input Your Competitors"
          onChange={props.onChangeOfInput}
          onKeyPress={props.onEnter}
        />
        <button onClick={props.onClick}>Input!</button>
      </div>
    </div>
  );
}

export default class BracketScreen extends Component {

    /**
     * Initializes all matches(for the whole bracket) populating the first round based on number of riders given and category
     *
     * @param category Category for this screen
     * @param numRiders Selected number of riders from the UI selection
     * @return Initialized matches
     */
    
 // input is rendered in App
  renderInput() {
    return (
      <Input
        onChangeOfInput={e => this.handleChangeOfInput(e)}
        onChange={e => this.handleChange(e)}
        onClick={e => this.handleClickOfInput(e)}
        onEnter={e => this.handleEnter(e)}
        newName={this.state.newName}
      />
    );
  }

  listBrackets() {
    let bracketType = this.state.bracket4;
    if (this.state.numOfSeeds === "4") {
      bracketType = this.state.bracket4;
    }
    if (this.state.numOfSeeds === "8") {
      bracketType = this.state.bracket8;
    }
    if (this.state.numOfSeeds === "16") {
      bracketType = this.state.bracket16;
    }
    if (this.state.numOfSeeds === "32") {
      bracketType = this.state.bracket16;
    }
    if (this.state.numOfSeeds === "64") {
      bracketType = this.state.bracket16;
    }
    const bracketList = this.state.names.map((text, key) => {
      return (
        <Competitor
          indexOfColumn={bracketType.column[key]}
          indexOfRow={bracketType.row[key]}
          key={key}
          isClicked={this.state.isClicked[key]}
          onClick={e => this.handleClickOfSeed(e, key, text)}
        >
          {text}
        </Competitor>
      );
    });
    return (
      <Main
        mainIndexOfColumn={bracketType.mainColumn}
        mainIndexOfRow={bracketType.mainRow}
      >
        {bracketList}{" "}
      </Main>
    );
  }

  //this has the grid properties for each bracket

  //match is used to decide where the button's text should move to next
  constructor(props) {
    super(props);
    this.state = {
      numOfSeeds: 0,
      seedNum: [],
      newName: "",
      names: [],
      isClicked: [],
      class: "container",
      bracket4: {
        mainColumn: "30% 20% 20% 30%",
        column: [1, 1, 4, 4, 2, 3],
        row: [2, 4, 2, 4, 3, 3],
        match: [4, 4, 5, 5],
        mainRow: "20% 20% 20% 20% 20%"
      },
      bracket8: {
        mainColumn: "10% 5% 5% 5% 5% 10%",
        column: [1, 1, 1, 1, 6, 6, 6, 6, 2, 2, 5, 5, 3, 4],
        row: [1, 2, 4, 5, 1, 2, 4, 5, 2, 4, 2, 4, 3, 3],
        match: [8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 13, 12],
        mainRow: "10% 10% 10% 10% 10%"
      },
      bracket16: {
        mainColumn: "12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%",
        column: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          8,
          8,
          8,
          8,
          8,
          8,
          8,
          8,
          2,
          2,
          2,
          2,
          7,
          7,
          7,
          7,
          3,
          3,
          6,
          6,
          4,
          5
        ],
        row: [
          1,
          2,
          4,
          5,
          7,
          8,
          10,
          11,
          1,
          2,
          4,
          5,
          7,
          8,
          10,
          11,
          2,
          4,
          8,
          10,
          2,
          4,
          8,
          10,
          3,
          9,
          3,
          9,
          6,
          6
        ],
        match: [
          16,
          16,
          17,
          17,
          18,
          18,
          19,
          19,
          20,
          20,
          21,
          21,
          22,
          22,
          23,
          23,
          24,
          24,
          25,
          25,
          26,
          26,
          27,
          27,
          28,
          28,
          29,
          29,
          28,
          29
        ],
        mainRow: "9% 9% 9% 9% 9% 9% 9% 9% 9% 9% 9%"
      }
    };
  }

  //functionality to enter key

  //does the same thing as input button
  handleEnter(e) {
    if (e.key === "Enter") {
      const newNames = this.state.names;
      const arrLength = this.state.names.length;
      let index = Math.floor(Math.random() * arrLength - 1);
      if (arrLength === 6) {
        //checks length of array
        while (
          //as long as they are the outside seeds then randomly put the name in it
          newNames[index] !== undefined ||
          index === arrLength - 1 ||
          index === arrLength - 2 ||
          !newNames.indexOf(this.state.newName) < 0 ||
          index < 0
        ) {
          index = Math.floor(Math.random() * arrLength - 1);
        }
      } else if (arrLength === 14) {
        while (
          newNames[index] !== undefined ||
          index === arrLength - 1 ||
          index === arrLength - 2 ||
          index === arrLength - 3 ||
          index === arrLength - 4 ||
          index === arrLength - 5 ||
          index === arrLength - 6 ||
          !newNames.indexOf(this.state.newName) < 0 ||
          index < 0
        ) {
          index = Math.floor(Math.random() * arrLength - 1);
        }
      } else if (arrLength === 30) {
        while (
          newNames[index] !== undefined ||
          index === arrLength - 1 ||
          index === arrLength - 2 ||
          index === arrLength - 3 ||
          index === arrLength - 4 ||
          index === arrLength - 5 ||
          index === arrLength - 6 ||
          index === arrLength - 7 ||
          index === arrLength - 8 ||
          index === arrLength - 9 ||
          index === arrLength - 10 ||
          index === arrLength - 11 ||
          index === arrLength - 12 ||
          index === arrLength - 13 ||
          index === arrLength - 14 ||
          !newNames.indexOf(this.state.newName) < 0 ||
          index < 0
        ) {
          index = Math.floor(Math.random() * arrLength - 1);
        }
      } else {
        index = undefined;
      }
      if (index !== undefined) {
        newNames.splice(index, 1, this.state.newName); //update state of names array
        this.setState({
          names: newNames
        });
      }
      this.setState({
        newName: ""
      });
    }
  }
  //when the input is being changed, update the string of new name
  createMatches(category, numRiders) {
    let numMatches = numRiders - 1;
    let tournamentID = "ID";
    let matchID = 0;

    let matchList = [numMatches];

    // Initialize all empty matches for the whole bracket
    for (let i = 0; i < numMatches; i++) {
        let match = {matchNumber: i, category: category};
        matchList[i] = match;
        Database.createMatch(category, i, match)
    }

    let racerList = Database.getRacersByCategory(this.props.appActions.getFilterState());

    // Populate empty matches with racerID's
    let seed1Index = 0;
    let seed2Index = numRiders - 1;
    let matchIndex = numMatches - 1;
    // First half of first round
    for (let i =  0; i < numRiders / 4; i++) {
        matchList[i].racer1ID = racerList[seed1Index].id;
        matchList[i].racer2ID = racerList[seed2Index].id;
        matchList[i].racer1Number = racerList[seed1Index].racerNumber;
        matchList[i].racer2Number = racerList[seed2Index].racerNumber;
        Database.updateMatch(matchList[i]);
        seed1Index += 2;
        seed2Index -= 2;
        matchIndex -= 1;
    }

    /* Ex: 16 riders: In the loop above, seed1Index ended with value of 8 and seed2Index with value of 7.
           To populate the lower half of the first round of brackets, we decrement seed1Index by 1 and increment
           seed2Index by 1. From here, we decrement seed1Index by 2 and increment seed2Index by 2 instead of
           incrementing and decrementing respectively as in the first half.
     */
    seed1Index -= 1;
    seed2Index += 1;
    for (let i = 0; i < numRiders / 4; i++) {
        matchList[i].racer1ID = racerList[seed1Index].id;
        matchList[i].racer2ID = racerList[seed2Index].id;
        matchList[i].racer1Number = racerList[seed1Index].racerNumber;
        matchList[i].racer2Number = racerList[seed2Index].racerNumber;
        Database.updateMatch(matchList[i]);
        seed1Index -= 2;
        seed2Index += 2;
        matchIndex -= 1;
    }
    return matchList
}
  handleChangeOfInput(e) {
    const name = e.target.value;
    this.setState({
      newName: name
    });
  }
  //updates the number of seeds chosen
  handleChange(e) {
    let newNum = e.target.value;
    this.setState({
      numOfSeeds: newNum
    });

    if (newNum === "undefined") {
      this.setState({
        names: [],
        class: "",
        isClicked: []
      });
    }

    if (newNum === "4") {
      //depending on the seed, fills the arrays with the correct amount of buttons.
      this.setState({
        names: [1,2,3,4],
        class: "bracket4",
        isClicked: Array(6).fill("#9B88B4")
      });
    }
    if (newNum === "8") {
      this.setState({
        names: Database.getRacersByCategory("Men's A"),
        isClicked: Array(14).fill("#9B88B4")
      });
    }
    if (newNum === "16") {
      this.setState({
        names: Array(30).fill(),
        isClicked: Array(30).fill("#9B88B4")
      });
    }
  }

  handleClickOfSeed(e, key, text) {
    let arr = this.state.names;
    let newArr = this.state.names;
    let numBracket = this.state.numOfSeeds;
    let clickedArr = this.state.isClicked;
    if (text !== undefined) {
      if (
        newArr[key + 1] !== undefined &&
        key % 2 === 0 &&
        clickedArr[key + 1] !== "green" &&
        numBracket === "4"
      ) {
        newArr[this.state.bracket4.match[key]] = arr[key]; //this algorithm decides where the name should go once clicked.
        clickedArr[key] = "green";
        clickedArr[key + 1] = "red"; //uses key plus or minus one and also depends on the bracket size
      } else if (
        newArr[key - 1] !== undefined &&
        key % 2 !== 0 &&
        clickedArr[key - 1] !== "green" &&
        numBracket === "4"
      ) {
        newArr[this.state.bracket4.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key - 1] = "red";
      }
      if (
        newArr[key + 1] !== undefined &&
        key % 2 === 0 &&
        clickedArr[key + 1] !== "green" &&
        numBracket === "8"
      ) {
        newArr[this.state.bracket8.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key + 1] = "red";
      } else if (
        newArr[key - 1] !== undefined &&
        key % 2 !== 0 &&
        clickedArr[key - 1] !== "green" &&
        numBracket === "8"
      ) {
        newArr[this.state.bracket8.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key - 1] = "red";
      }
      if (
        newArr[key + 1] !== undefined &&
        key % 2 === 0 &&
        clickedArr[key + 1] !== "green" &&
        numBracket === "16"
      ) {
        newArr[this.state.bracket16.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key + 1] = "red";
      } else if (
        newArr[key - 1] !== undefined &&
        key % 2 !== 0 &&
        clickedArr[key - 1] !== "green" &&
        numBracket === "16"
      ) {
        newArr[this.state.bracket16.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key - 1] = "red";
      }
    }
    this.setState({
      names: newArr
    });
  }

  handleClickOfInput(e) {
    const newNames = this.state.names;
    const arrLength = this.state.names.length;
    let index = Math.floor(Math.random() * arrLength - 1);
    if (arrLength === 6) {
      //checks length of array
      while (
        //as long as they are the outside seeds then randomly put the name in it
        newNames[index] !== undefined ||
        index === arrLength - 1 ||
        index === arrLength - 2 ||
        !newNames.indexOf(this.state.newName) < 0 ||
        index < 0
      ) {
        index = Math.floor(Math.random() * arrLength - 1);
      }
    } else if (arrLength === 14) {
      while (
        newNames[index] !== undefined ||
        index === arrLength - 1 ||
        index === arrLength - 2 ||
        index === arrLength - 3 ||
        index === arrLength - 4 ||
        index === arrLength - 5 ||
        index === arrLength - 6 ||
        !newNames.indexOf(this.state.newName) < 0 ||
        index < 0
      ) {
        index = Math.floor(Math.random() * arrLength - 1);
      }
    } else if (arrLength === 30) {
      while (
        newNames[index] !== undefined ||
        index === arrLength - 1 ||
        index === arrLength - 2 ||
        index === arrLength - 3 ||
        index === arrLength - 4 ||
        index === arrLength - 5 ||
        index === arrLength - 6 ||
        index === arrLength - 7 ||
        index === arrLength - 8 ||
        index === arrLength - 9 ||
        index === arrLength - 10 ||
        index === arrLength - 11 ||
        index === arrLength - 12 ||
        index === arrLength - 13 ||
        index === arrLength - 14 ||
        !newNames.indexOf(this.state.newName) < 0 ||
        index < 0
      ) {
        index = Math.floor(Math.random() * arrLength - 1);
      }
    } else {
      index = undefined;
    }
    if (index !== undefined) {
      newNames.splice(index, 1, this.state.newName); //update state of names array
      this.setState({
        names: newNames
      });
    }
    this.setState({
      newName: ""
    });
  }

  render() {

    let baseStyle = {};
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
     const style_elFab = {
      display: 'block',
      color: '#fff',
      textAlign: 'left',
      backgroundColor: '#1e2733',
   };
  const style_elFab_outer = {
      cursor: 'pointer',
      pointerEvents: 'auto',
   };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
     const style_div_padding = {
      paddingTop: '100px'
   };

    const styleRed1 = {
    
      paddingTop: '40px'
     };
     const styleRed2 = {
    
      paddingTop: '-240px'
     };
    return (
      <div className="AppScreen BracketScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
          <div style = {styleRed1}>
        <div className="heading">{this.renderInput()}</div>
        <div className="heading" style = {styleRed2}>{this.listBrackets()}</div>
              
          </div>
          <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div style = {styleRed1}>
        <div className="heading">{this.renderInput()}</div>
        <div className="heading" tyle = {styleRed2}>{this.listBrackets()}</div>
              
          </div>
     
          <div className='actionFont elFab' style={style_elFab_outer}>
            <Button style={style_elFab}  variant="fab" onClick={this.onClick_elFab1} >
              <img src={btn_icon_652560} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
        
        <Appbar className="navBar">
          <div className="title">Bracket</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_bracket} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }

    /**
     * Initializes all matches(for the whole bracket) populating the first round based on number of riders given and category
     *
     * @param category Category for this screen
     * @param numRiders Selected number of riders from the UI selection
     * @return Initialized matches
     */
  createMatches(category, numRiders) {
      let numMatches = numRiders - 1;
      let tournamentID = "ID";
      let matchID = 0;

      let matchList = [numMatches];

      // Initialize all empty matches for the whole bracket
      for (let i = 0; i < numMatches; i++) {
          let match = {matchNumber: i, category: category};
          matchList[i] = match;
          Database.createMatch(category, i, match) 
      }

      let racerList = Database.getRacersByCategory(category);

      // Populate empty matches with racerID's
      let seed1Index = 0;
      let seed2Index = numRiders - 1;
      let matchIndex = numMatches - 1;
      // First half of first round
      for (let i =  0; i < numRiders / 4; i++) {
          matchList[i].racer1ID = racerList[seed1Index].id;
          matchList[i].racer2ID = racerList[seed2Index].id;
          matchList[i].racer1Number = racerList[seed1Index].racerNumber;
          matchList[i].racer2Number = racerList[seed2Index].racerNumber;
          Database.updateMatch(matchList[i]);
          seed1Index += 2;
          seed2Index -= 2;
          matchIndex -= 1;
      }

      /* Ex: 16 riders: In the loop above, seed1Index ended with value of 8 and seed2Index with value of 7.
             To populate the lower half of the first round of brackets, we decrement seed1Index by 1 and increment
             seed2Index by 1. From here, we decrement seed1Index by 2 and increment seed2Index by 2 instead of
             incrementing and decrementing respectively as in the first half.
       */
      seed1Index -= 1;
      seed2Index += 1;
      for (let i = 0; i < numRiders / 4; i++) {
          matchList[i].racer1ID = racerList[seed1Index].id;
          matchList[i].racer2ID = racerList[seed2Index].id;
          matchList[i].racer1Number = racerList[seed1Index].racerNumber;
          matchList[i].racer2Number = racerList[seed2Index].racerNumber;
          Database.updateMatch(matchList[i]);
          seed1Index -= 2;
          seed2Index += 2;
          matchIndex -= 1;
      }
      return matchList
  }

    /**
     * Updates a match based on times for racer1 and racer2. If either are null, then it does not update the time for
     * that rider in the match. If both times for a rider are populated in the match, future updates for that rider's
     * time only update time2 for that rider.
     *
     * If both times for the match are filled for both riders, the winner of the match is updated. Ties go to racer1.
     *
     * @param match Match to input times for riders
     * @param racer1Time Time to input for racer1. If null, does nothing.
     * @param racer2Time Time to input for racer2. If null, does nothing.
     */
  inputRaceTime(match, racer1Time, racer2Time) {
      if (racer1Time != null) {
          if (match.racer1Time1 == null) {
              match.racer1Time1 = racer1Time;
          } else {
              match.racer1Time2 = racer1Time;
          }
      }
      if (racer2Time != null) {
          if (match.racer2Time1 == null) {
              match.racer2Time1 = racer1Time;
          } else {
              match.racer2Time2 = racer1Time;
          }
      }

      // Check for a winner
      if (match.racer1Time1 != null && match.racer1Time2 != null && match.racer2Time1 != null && match.racer2Time2 != null) {
          let racer1TimeSplit1 = match.racer1Time1.split(":");
          let racer1TimeSplit2 = match.racer1Time2.split(":");
          let racer2TimeSplit1 = match.racer2Time1.split(":");
          let racer2TimeSplit2 = match.racer2Time2.split(":");

          let racer1Total = 0;
          racer1Total += parseInt(racer1TimeSplit1[0]) * 60000;
          racer1Total += parseInt(racer1TimeSplit2[0]) * 60000;
          racer1Total += parseInt(racer1TimeSplit1[1]) * 1000;
          racer1Total += parseInt(racer1TimeSplit2[1]) * 1000;
          racer1Total += parseInt(racer1TimeSplit1[2]);
          racer1Total += parseInt(racer1TimeSplit2[2]);

          let racer2Total = 0;
          racer2Total += parseInt(racer2TimeSplit1[0]) * 60000;
          racer2Total += parseInt(racer2TimeSplit2[0]) * 60000;
          racer2Total += parseInt(racer2TimeSplit1[1]) * 1000;
          racer2Total += parseInt(racer2TimeSplit2[1]) * 1000;
          racer2Total += parseInt(racer2TimeSplit1[2]);
          racer2Total += parseInt(racer2TimeSplit2[2]);

          // Determines who had the lowest to be the winner. Ties got to racer1.
          if (racer1Total > racer2Total) {
              match.winnerID = match.racer2ID;
              match.winnerRacerNumber = match.racer2Number;
          } else {
              match.winnerID = match.racer1ID;
              match.winnerRacerNumber = match.racer1Number;
          }


          // TODO: get nextMatch somehow
          let nextMatch;

          // populate next match
          if (match.matchNumber != 0) {
              let nextMatchNumber = (match.matchNumber - 1) / 2;
              if (match.matchNumber % 2 == 0) {
                  nextMatch.racer1Number = match.winnerRacerNumber;
                  nextMatch.racer1ID = match.winnerID;
              } else {
                  nextMatch.racer2Number = match.winnerRacerNumber;
                  nextMatch.racer2ID = match.winnerID;
              }
          }

          // TODO: Update nextMatch somehow
          Database.updateMatch(nextMatch);
      }
      Database.updateMatch(match);
  }
  

}



