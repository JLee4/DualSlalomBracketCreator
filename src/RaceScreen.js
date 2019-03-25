import React, { Component } from 'react';
import './App.css';
import btn_icon_back_race from './images/btn_icon_back_race.png';
import * as CategoryEnum from './CategoryEnum'

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

const dummyArray = [["Nick", "111", "0:11"], ["Shivani", "222", "0:22"], ["Johnny", "333", "0:33"], ["Dana", "444", "0:44"],
    ["Josh", "555", "0:55"], ["Jack", "666", "1:00"], ["Jacob", "777", "1:11"], ["Nick", "888", "1:22"], ["Nick", "999", "1:333"]];

export default class RaceScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (category, array) => {
    // Go to screen 'Bracket'
    this.props.appActions.goToScreen('bracket', { transitionId: 'fadeIn', category: category, array: array });
  
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

      const style_elBackground = {
          width: '100%',
          height: '100%',
      };
      const style_elBackground_outer = {
          backgroundColor: '#f6f6f6',
      };
      const style_elButton = {
          display: 'block',
          color: 'white',
          textAlign: 'center',
      };
      const style_elButton_outer = {
          cursor: 'pointer',
          pointerEvents: 'auto',
      };
      const style_elButton2 = {
          display: 'block',
          color: 'white',
          textAlign: 'center',
      };
      const style_elButton2_outer = {
          cursor: 'pointer',
          pointerEvents: 'auto',
      };
      const style_elButton3 = {
          display: 'block',
          color: 'white',
          textAlign: 'center',
      };
      const style_elButton3_outer = {
          cursor: 'pointer',
          pointerEvents: 'auto',
      };
      const style_elButton4 = {
          display: 'block',
          color: 'white',
          textAlign: 'center',
      };
      const style_elButton4_outer = {
          cursor: 'pointer',
          pointerEvents: 'auto',
      };
      const style_elButton5 = {
          display: 'block',
          color: 'white',
          textAlign: 'center',
      };
      const style_elButton5_outer = {
          cursor: 'pointer',
          pointerEvents: 'auto',
      };
      const style_elButton6 = {
          display: 'block',
          color: 'white',
          textAlign: 'center',
      };
      const style_elButton6_outer = {
          cursor: 'pointer',
          pointerEvents: 'auto',
      };

    return (
      <div className="AppScreen RaceScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />

          </div>

        </div>
          <div className="layoutFlow" style={layoutFlowStyle}>
              <div className='actionFont elButton' style={style_elButton_outer}>
                  <Button style={style_elButton}  color="accent" onClick={() => this.onClick_elButton(CategoryEnum.categories.MEN_A, dummyArray)} >
                      {this.props.locStrings.race_button_31962}
                  </Button>
              </div>

              <div className='actionFont elButton4' style={style_elButton4_outer}>
                  <Button style={style_elButton4}  color="accent" onClick={() => this.onClick_elButton(CategoryEnum.categories.WOMEN_A, dummyArray)} >
                      {this.props.locStrings.race_button4_555497}
                  </Button>
              </div>

              <div className='actionFont elButton2' style={style_elButton2_outer}>
                  <Button style={style_elButton2}  color="accent" onClick={() => this.onClick_elButton(CategoryEnum.categories.MEN_B, dummyArray)} >
                      {this.props.locStrings.race_button2_26590}
                  </Button>
              </div>

              <div className='actionFont elButton5' style={style_elButton5_outer}>
                  <Button style={style_elButton5}  color="accent" onClick={() => this.onClick_elButton(CategoryEnum.categories.WOMEN_B, dummyArray)} >
                      {this.props.locStrings.race_button5_442151}
                  </Button>
              </div>

              <div className='actionFont elButton3' style={style_elButton3_outer}>
                  <Button style={style_elButton3}  color="accent" onClick={() => this.onClick_elButton(CategoryEnum.categories.MEN_C, dummyArray)} >
                      {this.props.locStrings.race_button3_1019834}
                  </Button>
              </div>

              <div className='actionFont elButton6' style={style_elButton6_outer}>
                  <Button style={style_elButton6}  color="accent" onClick={() => this.onClick_elButton(CategoryEnum.categories.WOMEN_C, dummyArray)} >
                      {this.props.locStrings.race_button6_349885}
                  </Button>
              </div>

          </div>
        <Appbar className="navBar">
          <div className="title">Race</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_race} alt="" style={{width: '50%'}} /></div>
        </Appbar>

      </div>
    )
  }
  

}
