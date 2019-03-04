import React, { Component } from 'react';
import './App.css';
import btn_icon_548870 from './images/btn_icon_548870.png';
import btn_icon_back_addbiker from './images/btn_icon_back_addbiker.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class AddBikerScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field2: '',
      field: '',
      field3: '',
      field4: '',
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
  
  textInputChanged_field4 = (event) => {
    this.setState({field4: event.target.value});
  }
  
  onClick_elFab = (ev) => {
    this.sendData_fab_to_people();
  
  }
  
  
  sendData_fab_to_people = () => {
    const dataSheet = this.props.appActions.getDataSheet('people');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      Name: this.state.field,
      Time: this.state.field2,
      Number: this.state.field3,
      Class: this.state.field4,
    };
    this.props.appActions.addToDataSheet('people', row);
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
    const style_elField2_outer = {
        pointerEvents: 'auto',
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
    const style_elField3_outer = {
        pointerEvents: 'auto',
     };
    const style_elField4 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_elField4_outer = {
        pointerEvents: 'auto',
     };
    const style_elFab = {
        display: 'block',
        color: '#fff',
        textAlign: 'left',
        backgroundColor: '#7da0ff',
     };
    const style_elFab_outer = {
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
          <div className='baseFont elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.addbiker_text_203148}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText2'>
            <div style={style_elText2}>
              <div>{this.props.locStrings.addbiker_text2_185646}</div>
            </div>
          
          </div>
          
          <div className='baseFont elField2' style={style_elField2_outer}>
            <input style={style_elField2} type="text" placeholder={this.props.locStrings.addbiker_field2_447389} onChange={this.textInputChanged_field2} value={this.state.field2}  />
          
          </div>
          
          <div className='baseFont elField' style={style_elField_outer}>
            <input style={style_elField} type="text" placeholder={this.props.locStrings.addbiker_field_216790} onChange={this.textInputChanged_field} value={this.state.field}  />
          
          </div>
          
          <div className='baseFont elText3'>
            <div style={style_elText3}>
              <div>{this.props.locStrings.addbiker_text3_753677}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText4'>
            <div style={style_elText4}>
              <div>{this.props.locStrings.addbiker_text4_494454}</div>
            </div>
          
          </div>
          
          <div className='baseFont elField3' style={style_elField3_outer}>
            <input style={style_elField3} type="text" placeholder={this.props.locStrings.addbiker_field3_826602} onChange={this.textInputChanged_field3} value={this.state.field3}  />
          
          </div>
          
          <div className='baseFont elField4' style={style_elField4_outer}>
            <input style={style_elField4} type="text" placeholder={this.props.locStrings.addbiker_field4_512253} onChange={this.textInputChanged_field4} value={this.state.field4}  />
          
          </div>
          
          <div className='actionFont elFab' style={style_elFab_outer}>
            <Button style={style_elFab}  variant="fab" onClick={this.onClick_elFab} >
              <img src={btn_icon_548870} alt="" style={{width: '100%', marginTop: '4%'}} />
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
