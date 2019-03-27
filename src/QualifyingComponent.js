import React, { Component } from 'react';
import './App.css';
import btn_icon_366239 from './images/btn_icon_366239.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Database from './services/Database.js';



export default class QualifyingComponent extends Component {

  // Properties used by this component:
  // name, time, class

  onClick_elFab = (ev) => {
    // Remove row from connected sheet
    this.props.appActions.removeFromDataSheet(this.props.dataSheetId, this.props.dataSheetRow);
    Database.deleteRacer(this.props.racerDeleted);
  
  }
  
  
  onClick_elButton = (ev) => {
    // Go to screen 'Edit'
    this.props.appActions.goToScreen('editbiker', { ...this.props, transitionId: 'fadeIn' });
    this.props.appActions.setCurrentRacer(this.props.racerDeleted);
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elFab = {
        display: 'block',
        color: '#fff',
        textAlign: 'left',
        backgroundColor: '#1f2833',
     };
    const style_elFab_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elText = {
        fontSize: 19.4,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_text = this.props.Name;
    
    const style_elText2 = {
        fontSize: 14.2,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontStyle: 'italic',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_text2 = this.props.Time;
    
    const style_elText3 = {
        fontSize: 15.1,
        color: '#45a19d',
        textAlign: 'center',
     };
    const value_text3 = this.props.RacerNumber;
    
    const style_elButton = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'SFUIText-Regular', sans-serif",
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#1f2833',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="QualifyingComponent" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='actionFont elFab' style={style_elFab_outer}>
            <Button style={style_elFab}  variant="fab" onClick={this.onClick_elFab} >
              <img src={btn_icon_366239} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          
          <div className='elText'>
            <div style={style_elText}>
            <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.component1_text_366978}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elText2'>
            <div style={style_elText2}>
            <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.component1_text2_135472}</span>)}</div>
            </div>
          
          </div>
          
          <div className='font-SFUITextRegular  elText3'>
            <div style={style_elText3}>
            <div>{value_text3 !== undefined ? value_text3 : (<span className="propValueMissing">{this.props.locStrings.component1_text3_639658}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  onClick={this.onClick_elButton} >
              {this.props.locStrings.component1_button_295553}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
