import React, { Component } from 'react';
import './App.css';
import btn_icon_back_pickyourclass from './images/btn_icon_back_pickyourclass.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Database from "./services/Database";


export default class PickYourClassScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go to screen 'Qualifying'
    this.props.appActions.goToScreen('qualifying', { transitionId: 'fadeIn' });
    this.props.appActions.setFilterState("Men's A");

  
  }
  
  
  onClick_elButton2 = (ev) => {
    this.props.appActions.goToScreen('qualifying', { transitionId: 'fadeIn' });
    this.props.appActions.setFilterState("Men's B");

  }
  
  
  onClick_elButton3 = (ev) => {
    this.props.appActions.goToScreen('qualifying', { transitionId: 'fadeIn' });
    this.props.appActions.setFilterState("Men's C");

  }
  
  
  onClick_elButton4 = (ev) => {
    this.props.appActions.goToScreen('qualifying', { transitionId: 'fadeIn' });
    this.props.appActions.setFilterState("Women's A");

  }
  
  
  onClick_elButton5 = (ev) => {
    this.props.appActions.goToScreen('qualifying', { transitionId: 'fadeIn' });
    this.props.appActions.setFilterState("Women's B");

  }
  
  
  onClick_elButton6 = (ev) => {
    this.props.appActions.goToScreen('qualifying', { transitionId: 'fadeIn' });
    this.props.appActions.setFilterState("Women's C");

  }
  
  
  render() {
    Database.queryAllRacers();
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
        backgroundColor: '#45a19d',
     };
    const style_elButton2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton3 = {
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#45a19d',
     };
    const style_elButton3_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton4 = {
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#1f2833',
     };
    const style_elButton4_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton5 = {
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#1f2833',
     };
    const style_elButton5_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton6 = {
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#1f2833',
     };
    const style_elButton6_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen PickYourClassScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='actionFont elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  onClick={this.onClick_elButton} >
              {this.props.locStrings.menAPicker}
            </Button>
          
          </div>
          
          <div className='actionFont elButton2' style={style_elButton2_outer}>
            <Button style={style_elButton2}  onClick={this.onClick_elButton2} >
              {this.props.locStrings.menBPicker}
            </Button>
          
          </div>
          
          <div className='actionFont elButton3' style={style_elButton3_outer}>
            <Button style={style_elButton3}  onClick={this.onClick_elButton3} >
              {this.props.locStrings.menCPicker}
            </Button>
          
          </div>
          
          <div className='actionFont elButton4' style={style_elButton4_outer}>
            <Button style={style_elButton4}  onClick={this.onClick_elButton4} >
              {this.props.locStrings.womenAPicker}
            </Button>
          
          </div>
          
          <div className='actionFont elButton5' style={style_elButton5_outer}>
            <Button style={style_elButton5}  onClick={this.onClick_elButton5} >
              {this.props.locStrings.womenBPicker}
            </Button>
          
          </div>
          
          <div className='actionFont elButton6' style={style_elButton6_outer}>
            <Button style={style_elButton6}  onClick={this.onClick_elButton6} >
              {this.props.locStrings.womenCPicker}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Pick Your Class</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_pickyourclass} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  

}
