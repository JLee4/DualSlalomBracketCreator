import React, { Component } from 'react';
import './App.css';
import Component2 from './Component2';
import img_elImage from './images/BracketScreen_elImage_159122.jpg';
import btn_icon_835433 from './images/btn_icon_835433.png';
import img_elImage2 from './images/BracketScreen_elImage2_565346.jpg';
import btn_icon_back_bracket from './images/btn_icon_back_bracket.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


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
    
    
    const style_elFab = {
        display: 'block',
        color: '#fff',
        textAlign: 'left',
        backgroundColor: '#7b9eff',
     };
    const style_elFab_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elImage2 = {
        backgroundImage: 'url('+img_elImage2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
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
  

}
