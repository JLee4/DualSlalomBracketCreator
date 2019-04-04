import React, { Component } from 'react';
import './App.css';
import QualifyingComponent from './QualifyingComponent';
import btn_icon_back_qualifying from './images/btn_icon_back_qualifying.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Database from './services/Database.js';



export default class QualifyingScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go to screen 'Add Biker'
    this.props.appActions.setBoolTime("0")
    this.props.appActions.goToScreen('addbiker', { transitionId: 'fadeIn' });
    
  
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
    
    const dataSheet_people = this.props.dataSheets['people'];
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elCard_outer = {
        backgroundColor: '#bdeaee',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
     };
    const style_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let listComps_list = {};

    let items_list = Database.getRacersByCategory(this.props.appActions.getFilterState());
   // items_list = items_list.concat(filterItems_list(this.props.appActions.getDataSheet('people').items));
    
    return (
      <div className="AppScreen QualifyingScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_QualifyingScreen_elCard_760276">
          <div className='elCard' style={style_elCard_outer}>
            <div />
          
          </div>
          
          </div>
          <div className='actionFont elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.qualifying_button_239976}
            </Button>
          
          </div>
          
          <div className='hasNestedComps elList'>
            <div style={style_elList}>
            
              {items_list.map((racer, index) => {
                let itemClasses = `gridItem cols2_${index % 2}`;
                let itemComp = (racer._componentId) ? listComps_list[racer._componentId] : <QualifyingComponent racerDeleted={racer}  {...{ 'Name': racer.name, 'Time': racer.qualificationTime, 'RacerNumber': racer.racerNumber, }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={racer.key}>
                    {itemComp}
                  </div>
                )
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">{'Qualifying for ' + this.props.appActions.getFilterState() + ' category'}  </div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_qualifying} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  

}
