import React, { Component } from 'react';
import './App.css';
import btn_icon_935917 from './images/btn_icon_935917.png';
import btn_icon_1013259 from './images/btn_icon_1013259.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';


export default class UglyScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elFab = (ev) => {
    // Go to screen 'Add Qualifying Time'
    this.props.appActions.goToScreen('addqualifyingtime', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elFab2 = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
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
    const style_elFab = {
        display: 'block',
        fontSize: 0.0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '(null)',
        textAlign: 'left',
     };
    const style_elFab_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elFab2 = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
     };
    const style_elFab2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <Container fluid={true} className="AppScreen UglyScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elFab' style={style_elFab_outer}>
            <Button style={style_elFab}  variant="fab" color="accent" onClick={this.onClick_elFab} >
              <img src={btn_icon_935917} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          
          <div className='actionFont elFab2' style={style_elFab2_outer}>
            <Button style={style_elFab2}  variant="fab" color="accent" onClick={this.onClick_elFab2} >
              <img src={btn_icon_1013259} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">ugly</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
      </Container>
    )
  }
  

}
