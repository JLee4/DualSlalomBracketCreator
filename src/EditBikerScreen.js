import React, { Component } from 'react';
import './App.css';
import btn_icon_652560 from './images/btn_icon_652560.png';
import btn_icon_back_editbiker from './images/btn_icon_back_editbiker.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Database from './services/Database.js';
import timer_black from './images/timer_black.png'




export default class EditBikerScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, name, time, number, class

  constructor(props) {
    super(props);
    
    this.state = {
      field2: null, //time
      field: null,  //name
      field3: null, //racernumber
    };
  }

  textInputChanged_field2 = (event) => {
    this.setState({field2: event.target.value});
  }
  
  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  textInputChanged_field3 = (event) => {
    this.setState({field3: event.target.value});
  }

  
  onClick_elFab = (ev) => {
    if (this.props.appActions.getCurrentRacer().name != this.state.field) {
       this.props.appActions.getCurrentRacer().name = this.state.field;
    }
    if (this.props.appActions.getCurrentRacer().qualificationTime != this.state.field2) {
      this.props.appActions.getCurrentRacer().qualificationTime = this.state.field2;
   }
   if (this.props.appActions.getCurrentRacer().racerNumber != this.state.field3) {
    this.props.appActions.getCurrentRacer().racerNumber = this.state.field3;
 }
   
    Database.updateRacer(this.props.appActions.getCurrentRacer());
  
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  onClick_elFab2= (ev) => {
    //this.sendData_fab_to_people();
    this.props.appActions.setstoreNewNumber("0:00");

    this.props.appActions.goToScreen('timer', { transitionId: 'fadeIn' });
  
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
        textAlign: 'left',
     };
    const style_elText2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elField2 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    if (this.state.field2 == null) {
        this.state.field2 = this.props.Time;
    }
    const value_field2 = this.state.field2;
    
    const style_elField2_outer = {
        pointerEvents: 'auto',
     };
    const style_elField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    if (this.state.field == null) {
        this.state.field = this.props.Name;
    }
    const value_field = this.state.field;
    
    const style_elField_outer = {
        pointerEvents: 'auto',
     };
    const style_elText3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elText4 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elField3 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    if (this.state.field3 == null) {
        this.state.field3 = this.props.RacerNumber;
    }
    const value_field3 = this.state.field3;
    
    const style_elField3_outer = {
        pointerEvents: 'auto',
     };
   
    
    const style_elField4_outer = {
        pointerEvents: 'auto',
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
   const style_elFab2 = {
    display: 'block',
    color: '#fff',
    textAlign: 'left',
    backgroundColor: '##000000FF',
 };
const style_elFab2_outer = {
    cursor: 'pointer',
    pointerEvents: 'auto',
 };
    
    return (
      <div className="AppScreen EditBikerScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.addbiker2_text_260678}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText2'>
            <div style={style_elText2}>
              <div>{this.props.locStrings.addbiker2_text2_474510}</div>
            </div>
          
          </div>
          
          <div className='baseFont elField2' style={style_elField2_outer}>
            <input style={style_elField2} type="text" placeholder={this.props.locStrings.addbiker2_field2_31649} onChange={this.textInputChanged_field2} value={value_field2 !== undefined ? value_field2 : ''}  />
          
          </div>
          
          <div className='baseFont elField' style={style_elField_outer}>
            <input style={style_elField} type="text" placeholder={this.props.locStrings.addbiker2_field_460348} onChange={this.textInputChanged_field} value={value_field !== undefined ? value_field : ''}  />
          
          </div>
          
          <div className='baseFont elText3'>
            <div style={style_elText3}>
              <div>{this.props.locStrings.addbiker2_text3_62691}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText4'>
            <div style={style_elText4}>
              <div>{this.props.locStrings.addbiker2_text4_783726}</div>
            </div>
          
          </div>
          
          <div className='baseFont elField3' style={style_elField3_outer}>
            <input style={style_elField3} type="number" placeholder={this.props.locStrings.addbiker2_field3_468185} onChange={this.textInputChanged_field3} value={value_field3 !== undefined ? value_field3 : ''}  />
          
          </div>
          
     
          
          <div className='actionFont elFab' style={style_elFab_outer}>
            <Button style={style_elFab}  variant="fab" onClick={this.onClick_elFab} >
              <img src={btn_icon_652560} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          <div className='actionFont elFab2' style={style_elFab2_outer}>
            <Button style={style_elFab2} variant="fab" onClick={this.onClick_elFab2} >
              <img src={timer_black } alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Edit Biker</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_editbiker} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            
          </div>
        </div>
      </div>
    )
  }
  

}
