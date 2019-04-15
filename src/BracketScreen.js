import React, { Component } from 'react';
import './App.css';
import Component2 from './Component2';
import img_elImage from './images/BracketScreen_elImage_159122.jpg';
import btn_icon_835433 from './images/btn_icon_835433.png';
import MA from './images/MensA.png';
import btn_icon_back_bracket from './images/btn_icon_back_bracket.png';
import database from './services/Database'

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import {createMatch} from "./graphql/mutations";
import {NULL} from "graphql/language/kinds";


export default class BracketScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elFab = (ev) => {
    // Go to screen 'Bracket Exported'
    this.props.appActions.goToScreen('bracketexported', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const dataSheet_menA = this.props.dataSheets['menA'];
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    
    const style_elCard_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
     };
    const style_elCard2_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
     };
    const style_elImage = {
        backgroundImage: 'url('+img_elImage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elCard3_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
     };
    const style_elCard4_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
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
    const style_elImage2 = {
        backgroundImage: 'url('+MA+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '20% 20%',
        backgroundSize: 'cover',
 
     };
    
    return (
      <div className="AppScreen BracketScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          
          
          <div className='cardBg elCard' style={style_elCard_outer}>
            <div />
          
          </div>
          
          <div className='cardBg elCard2' style={style_elCard2_outer}>
            <div />
          
          </div>
          
          <div className='elImage'>
            <div style={style_elImage} />
          
          </div>
          
          <div className='cardBg elCard3' style={style_elCard3_outer}>
            <div />
          
          </div>
          
          <div className='cardBg elCard4' style={style_elCard4_outer}>
            <div />
          
          </div>
          
          <div className='actionFont elFab' style={style_elFab_outer}>
            <Button style={style_elFab}  variant="fab" onClick={this.onClick_elFab} >
              <img src={btn_icon_835433} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          
          <div className='elImage2'>
            <div style={style_elImage2} />
          
          </div>
          
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
          database.createMatch(category, i, match)
      }

      let racerList = database.getRacersByCategory(category);

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
          database.updateMatch(matchList[i]);
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
          database.updateMatch(matchList[i]);
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
          database.updateMatch(nextMatch);
      }
      database.updateMatch(match);
  }
  

}
