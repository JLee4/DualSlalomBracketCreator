import React, { Component } from 'react';
import './App.css';
import btn_icon_652560 from './images/btn_icon_652560.png';
import btn_icon_back_addbiker from './images/btn_icon_back_addbiker.png';
import timer_black from './images/timer_black.png'

// UI framework component imports
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Database from './services/Database.js';



export default class AddBikerScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, bracketName

  constructor(props) {
    super(props);
    Database.persistToStorage();
    this.state = {
      field2: null, //time
      field: null,  //name
      field3: null, //racernumber
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  textInputChanged_field2 = (event) => {
    this.setState({field2: event.target.value});
  }
  
  textInputChanged_field3 = (event) => {
    this.setState({field3: event.target.value});
  }
  
  pickerValueChanged_picker = (event) => {
    this.setState({picker: event.target.value});
  }
  
  onClick_elFab = (ev) => {
    //this.sendData_fab_to_people();

    if (this.state.field.length > 1){
      Database.createRacer(this.state.field, this.state.field3, this.props.appActions.getFilterState(), this.state.field2);
      // Go back in screen navigation history
      this.props.appActions.goBack();
    }
  
  
  }

  onClick_elFab2= (ev) => {
    //this.sendData_fab_to_people();

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
    const style_elField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_elField_outer = {
        pointerEvents: 'auto',
     };
    const style_elField2 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_elField2_outer = {
        pointerEvents: 'auto',
     };
     this.state.field2 = this.props.appActions.getBoolTime() == "1" ? this.props.appActions.getcheckTime() : null
     const value_field2 = this.state.field2;

    const style_elField3 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_elField3_outer = {
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
      <div className="AppScreen AddBikerScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elField' style={style_elField_outer}>
            <input style={style_elField} type="text" placeholder={this.props.locStrings.addbiker_field_959137} required = "required" onChange={this.textInputChanged_field} value={this.state.field}  />
          
          </div>
          
          <div className='baseFont elField2' style={style_elField2_outer}>
            <input style={style_elField2} type="text"  placeholder={this.props.locStrings.addbiker_field2_520357} onChange={this.textInputChanged_field2} value={value_field2 !== undefined ? value_field2 : this.state.field2}  />
          
          </div>
          
          <div className='baseFont elField3' style={style_elField3_outer}>
            <input style={style_elField3} type="number"   placeholder={this.props.locStrings.addbiker_field3_766675} onChange={this.textInputChanged_field3} value={this.state.field3}  />
          
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
          <div className="title">Add Biker</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_addbiker} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elLine2' />
          </div>
        </div>
      </div>
    )
  }
  

}
