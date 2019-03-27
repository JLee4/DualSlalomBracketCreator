import React, { Component } from 'react';
import './App.css';
import btn_icon_263272 from './images/btn_icon_263272.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Timer         from './stopwatch/components/Timer';
import Controls      from './stopwatch/components/Controls';
import LapTimeList   from './stopwatch/components/LapTimeList';

import Config        from './stopwatch/constants/Config';

function getDefaultState() {
  return {
    isRunning : false,
    time      : 0,
    timeList  : []    
  }
}

export default class TimerScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elFab = (ev) => {
    this.props.appActions.setBoolTime("1");
    this.props.appActions.goBack();
  
  }
  constructor( props ) {
    super(props);
    this.state    = getDefaultState();
    this.timerRef = null;
  }

  updateTimer(extraTime) {
    const { time } = this.state;
    this.setState({ time : time + extraTime });
  }

  start() {

    this.setState({
      isRunning : true 
    }, () => {
      this.timerRef = setInterval(
        () => { this.updateTimer( Config.updateInterval ) }, Config.updateInterval
      )
    });
  }

  stop() {
    this.setState({
      isRunning : false 
    }, () => {
      clearInterval(this.timerRef);
    });
  }

  reset() {
    this.setState(getDefaultState());
  }

  addLapTime() {
    const { time, timeList } = this.state;

    this.setState({
      timeList : [ ...timeList, time ] 
    });
  }
  
  
  render() {
    const { isRunning, time, timeList } = this.state;

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
        textAlign: 'center',
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
    
    return (
      <div className="AppScreen TimerScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
         
          <div>
              <Timer time={ time } />
              <Controls
                isRunning={ isRunning } 
                start={ () => this.start() }
                stop={ () => this.stop() }
                reset={ () => this.reset() }
                addLapTime={ () => this.addLapTime() }
              />
              <LapTimeList
                timeList={ timeList } />
          </div>
          
          <div className='actionFont elFab' style={style_elFab_outer}>
            <Button style={style_elFab}  variant="fab" onClick={this.onClick_elFab} >
              <img src={btn_icon_263272} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          
          </div>
          <div></div>
          
        </div>
      </div>
    )
  }
  

}
