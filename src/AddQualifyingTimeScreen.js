import React, { Component } from 'react';
import './App.css';
import btn_icon_425281 from './images/btn_icon_425281.png';
import btn_icon_214720 from './images/btn_icon_214720.png';
import btn_icon_back_addqualifyingtime from './images/btn_icon_back_addqualifyingtime.png';

// UI framework component imports
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';


export default class AddQualifyingTimeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      field2: '',
      field3: '',
      picker: '',
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
    const style_elField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_elField_outer = {
        pointerEvents: 'auto',
     };
    const style_elText = {
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
    const style_elText2 = {
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
    const style_elText3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    let selection_picker = this.state.picker;
    
    const style_elPicker_outer = {
        pointerEvents: 'auto',
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
    const style_elFab2 = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
     };
    const style_elFab2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elText4 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    
    return (
      <Container fluid={true} className="AppScreen AddQualifyingTimeScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elField' style={style_elField_outer}>
            <input style={style_elField} type="text" placeholder={this.props.locStrings.addqualifyingtime_field_1047865} onChange={this.textInputChanged_field} value={this.state.field}  />
          
          </div>
          
          <div className='baseFont elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.addqualifyingtime_text_78678}</div>
            </div>
          
          </div>
          
          <div className='baseFont elField2' style={style_elField2_outer}>
            <input style={style_elField2} type="text" placeholder={this.props.locStrings.addqualifyingtime_field2_628861} onChange={this.textInputChanged_field2} value={this.state.field2}  />
          
          </div>
          
          <div className='baseFont elText2'>
            <div style={style_elText2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.addqualifyingtime_text2_596428.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='baseFont elField3' style={style_elField3_outer}>
            <input style={style_elField3} type="text" placeholder={this.props.locStrings.addqualifyingtime_field3_211402} onChange={this.textInputChanged_field3} value={this.state.field3}  />
          
          </div>
          
          <div className='baseFont elText3'>
            <div style={style_elText3}>
              <div>{this.props.locStrings.addqualifyingtime_text3_151329}</div>
            </div>
          
          </div>
          
          <div className='baseFont elPicker' style={style_elPicker_outer}>
            <Select  onChange={this.pickerValueChanged_picker} value={selection_picker}  />
          
          </div>
          
          <div className='actionFont elFab' style={style_elFab_outer}>
            <Button style={style_elFab}  variant="fab" color="accent" onClick={this.onClick_elFab} >
              <img src={btn_icon_425281} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          
          <div className='actionFont elFab2' style={style_elFab2_outer}>
            <Button style={style_elFab2}  variant="fab" color="accent" onClick={this.onClick_elFab2} >
              <img src={btn_icon_214720} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          
          <div className='baseFont elText4'>
            <div style={style_elText4}>
              <div>{this.props.locStrings.addqualifyingtime_text4_615745}</div>
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Add Qualifying Time</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_addqualifyingtime} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </Container>
    )
  }
  

}
