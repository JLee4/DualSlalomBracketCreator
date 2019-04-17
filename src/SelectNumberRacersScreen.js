import React, { Component } from 'react';
import './App.css';
import Component2 from './Component2';
import btn_icon_835433 from './images/btn_icon_835433.png';
import MA from './images/MensA.png';
import btn_icon_back_bracket from './images/btn_icon_back_bracket.png';
import Select from 'react-select';
import btn_icon_652560 from './images/btn_icon_652560.png';


// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import {createMatch} from "./graphql/mutations";
import {NULL} from "graphql/language/kinds";

export default class SelectNumberRacersScreen extends Component {
  
  
  render() {
   
    let baseStyle = {};
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
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
     const style_div_padding = {
      paddingTop: '100px'
   };
   const styleRed = {
    
     paddingTop: '100px'
    };
    const styleRed1 = {
    
      paddingTop: '200px'
     };
  
    
    return (
      <div className="AppScreen SelectNumberRacersScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
          
          <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div style = {styleRed1}>
              
          </div>
          <div className='actionFont elFab' style={style_elFab_outer}>
            <Button style={style_elFab}  variant="fab" onClick={this.onClick_elFab1} >
              <img src={btn_icon_652560} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
        
        <Appbar className="navBar">
          <div className="title">How Big Is Your HEHE?</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_bracket} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }

}