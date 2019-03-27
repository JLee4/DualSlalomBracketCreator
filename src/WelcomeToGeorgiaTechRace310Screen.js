import React, { Component } from 'react';
import './App.css';
import btn_icon_back_welcometogeorgiatechrace310 from './images/btn_icon_back_welcometogeorgiatechrace310.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';


export default class WelcomeToGeorgiaTechRace310Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Functions for component state index 0 (1 of 2) --- 
  
  onClick_state0_elButton = (ev) => {
    // Go to screen 'Pick Your Class'
    this.props.appActions.goToScreen('pickyourclass', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_state0_elButton2 = (ev) => {
    // Go to screen 'Race'
    this.props.appActions.goToScreen('race', { transitionId: 'slideIn_right' });
  
  }
  
  
  renderState0() {
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
    
    const style_state0_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_state0_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state0_elButton = {
        display: 'block',
        fontSize: 11.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'white',
        textAlign: 'center',
     };
    const style_state0_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state0_elButton2 = {
        display: 'block',
        fontSize: 11.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'white',
        textAlign: 'center',
     };
    const style_state0_elButton2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <Container fluid={true} className="AppScreen WelcomeToGeorgiaTechRace310Screen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state0_elBackground' style={style_state0_elBackground_outer}>
            <div style={style_state0_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='state0_elButton' style={style_state0_elButton_outer}>
            <Button style={style_state0_elButton}  color="accent" onClick={this.onClick_state0_elButton} >
              {this.props.locStrings.welcome_button_427093}
            </Button>
          
          </div>
          
          <div className='state0_elButton2' style={style_state0_elButton2_outer}>
            <Button style={style_state0_elButton2}  color="accent" onClick={this.onClick_state0_elButton2} >
              {this.props.locStrings.welcome_button2_380400}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Welcome to Georgia Tech Race 3/10!</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_welcometogeorgiatechrace310} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </Container>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
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
    
    
    return (
      <Container fluid={true} className="AppScreen WelcomeToGeorgiaTechRace310Screen" style={baseStyle}>
        <Appbar className="navBar">
          <div className="title">Welcome to Georgia Tech Race 3/10!</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_welcometogeorgiatechrace310} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </Container>
    )
  }
  
  
  render() {
    switch (0) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
