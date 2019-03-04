import React, { Component } from 'react';
import './App.css';


export default class Component2 extends Component {

  // Properties used by this component:
  // name, time

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
    const style_elText = {
        fontSize: 19.4,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.Name;
    
    const style_elText2 = {
        fontSize: 15.1,
        color: '#7da0ff',
        textAlign: 'left',
     };
    const value_text2 = this.props.Time;
    
    
    return (
      <div className="Component2" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='elText'>
            <div style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.component2_text_540886}</span>)}</div>
            </div>
          
          </div>
          
          <div className='font-SFUITextRegular  elText2'>
            <div style={style_elText2}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.component2_text2_826378}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
