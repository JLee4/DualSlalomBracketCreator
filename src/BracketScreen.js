import React, { Component } from 'react';
import './App.css';
import btn_icon_back_race from './images/btn_icon_back_race.png';
import * as CategoryEnum from "./CategoryEnum";

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

export default class BracketScreen extends Component {

    render() {
        // eslint-disable-next-line no-unused-vars
        let baseStyle = {};
        // eslint-disable-next-line no-unused-vars
        let layoutFlowStyle = {};
        if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
            baseStyle.animation = '0.25s ease-in-out ' + this.props.transitionId;
        }
        if (!this.props.atTopOfScreenStack) {
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

        return (
            <div className="AppScreen BracketScreen" style={baseStyle}>
                <div className="background">
                    <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
                        <div style={style_elBackground} />

                    </div>

                </div>

                <Appbar className="navBar">
                    <div className="title">Bracket</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_race} alt="" style={{width: '50%'}} /></div>
                </Appbar>

            </div>
        )
    }
}