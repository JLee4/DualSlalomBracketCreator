import React, { Component } from 'react';
import './App.css';
import btn_icon_615332 from './images/btn_icon_615332.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class BracketExportedScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elFab = (ev) => {
  
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
    const style_elFab = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
     };
    const style_elFab_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen BracketExportedScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='headlineFont elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.bracketexported_text_718612}</div>
            </div>
          
          </div>
          
          <div className='actionFont elFab' style={style_elFab_outer}>
            <Button style={style_elFab}  variant="fab" color="primary" onClick={this.onClick_elFab} >
              <img src={btn_icon_615332} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
