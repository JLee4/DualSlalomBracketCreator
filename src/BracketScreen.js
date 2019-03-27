import React, { Component } from 'react';
import './App.css';
import Component2 from './Component2';
import img_elImage from './images/BracketScreen_elImage_159122.jpg';
import btn_icon_835433 from './images/btn_icon_835433.png';
import MA from './images/MA.png';
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
  

}
