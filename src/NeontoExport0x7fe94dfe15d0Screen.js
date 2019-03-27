import React, { Component } from 'react';
import './App.css';
import QualifyingComponent from './QualifyingComponent';
import btn_icon_back_q from './images/btn_icon_back_q.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class NeontoExport0x7fe94dfe15d0Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
    const style_elButton = {
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#45a29e',
     };
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('people').items);
    
    
    return (
      <div className="AppScreen NeontoExport0x7fe94dfe15d0Screen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='actionFont elButton'>
            <Button style={style_elButton}  >
              {this.props.locStrings.q_button_10046}
            </Button>
          
          </div>
          
          <div className='hasNestedComps elList'>
            <div style={style_elList}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols2_${index % 2}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <QualifyingComponent dataSheetId={'people'} dataSheetRow={row} {...{ 'Name': row['Name'], 'Time': row['Time'], 'Class': row['Class'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Q</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_q} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  

}
