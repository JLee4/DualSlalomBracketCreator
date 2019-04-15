import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class DualSlalomBracketCreatorScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go to screen 'Welcome to Georgia Tech Race 3/10!'
    this.props.appActions.goToScreen('welcometogeorgiatechrace310', { transitionId: 'fadeIn' });
  
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
    const style_elText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
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
    
    return (
      <div className="AppScreen DualSlalomBracketCreatorScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.dualslalombracketcreator_text_184754}</div>
            </div>
          
          </div>
          
          <div className='actionFont elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.pickARaceButton}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Dual Slalom Bracket Creator</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
      </div>
    )
  }
  

}
