import React, { Component } from 'react';
import './App.css';
import btn_icon_425621 from './images/btn_icon_425621.png';
import btn_icon_412465 from './images/btn_icon_412465.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';


export default class QualifyingUpdatedScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elFab2 = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  
  
  onClick_elFab = (ev) => {
    // Go to screen 'Add Qualifying Time'
    this.props.appActions.goToScreen('addqualifyingtime', { transitionId: 'fadeIn' });
  
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
    const style_elFab2 = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elFab = {
        display: 'block',
        fontSize: 0.0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '(null)',
        textAlign: 'left',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButtonCopy = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    
    return (
      <Container fluid={true} className="AppScreen QualifyingUpdatedScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Qualifying Updated</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont elFab2' style={style_elFab2}  variant="fab" color="accent" onClick={this.onClick_elFab2} >
              <img src={btn_icon_425621} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
            <Button className='elFab' style={style_elFab}  variant="fab" color="accent" onClick={this.onClick_elFab} >
              <img src={btn_icon_412465} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
            <Button className='actionFont elButton' style={style_elButton}  color="accent" >
              {this.props.locStrings.qualifyingupdated_button_528878}
            </Button>
            <Button className='actionFont elButtonCopy' style={style_elButtonCopy}  color="accent" >
              {this.props.locStrings.qualifyingupdated_button_810372}
            </Button>
          </div>
        </div>
      </Container>
    )
  }
  

}
