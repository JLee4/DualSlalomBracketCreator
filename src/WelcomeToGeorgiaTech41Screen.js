import React, { Component } from 'react';
import './App.css';
import btn_icon_back_welcometogeorgiatech41 from './images/btn_icon_back_welcometogeorgiatech41.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class WelcomeToGeorgiaTech41Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go to screen 'Pick Your Class'
    this.props.appActions.goToScreen('pickyourclass', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton2 = (ev) => {
    // Go to screen 'Race'
    this.props.appActions.goToScreen('race', { transitionId: 'fadeIn' });
  
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
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#45a19d',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton2 = {
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#1f2833',
     };
    const style_elButton2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen WelcomeToGeorgiaTech41Screen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='actionFont elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  onClick={this.onClick_elButton} >
              {this.props.locStrings.welcometogeorgiatech41_button_947234}
            </Button>
          
          </div>
          
          <div className='actionFont elButton2' style={style_elButton2_outer}>
            <Button style={style_elButton2}  onClick={this.onClick_elButton2} >
              {this.props.locStrings.welcometogeorgiatech41_button2_802136}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Welcome to Georgia Tech 4/17!</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_welcometogeorgiatech41} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  

}
