import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import './App.css';
import BracketExportedScreen from './BracketExportedScreen.js';
import AddBikerScreen from './AddBikerScreen.js';
import BracketScreen from './BracketScreen.js';
import QualifyingScreen from './QualifyingScreen.js';
import RaceScreen from './RaceScreen.js';
import PickYourClassScreen from './PickYourClassScreen.js';
import WelcomeToGeorgiaTech41Screen from './WelcomeToGeorgiaTech41Screen.js';
import MTBracketScreen from './MTBracketScreen.js';
import EditBikerScreen from './EditBikerScreen.js';
import TimerScreen from './TimerScreen.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';
import DataSheet_people from './DataSheet_people.js';
import DataSheet_bracketTypes from './DataSheet_bracketTypes.js';
import Database from "./services/Database";


export default class App extends Component {
  constructor(props) {
    super(props);
    Database.getLocal();
    this.currentRacer = {};
    this.storeNewName = {};
    this.storeNewNumber = {};
    this.dataSheets = {};
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);
    this.dataSheets['people'] = new DataSheet_people('people', this.dataSheetDidUpdate);
    this.dataSheets['bracketTypes'] = new DataSheet_bracketTypes('bracketTypes', this.dataSheetDidUpdate);

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";
    this.dataSlots['ds_bracket'] = "";
    this.filterState = {};
    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);

    this.state = {
      currentScreen: 'mtbracket',
      currentScreenProps: {},
      screenTransitionForward: true,
    }
    this.screenHistory = [ {...this.state} ];

    this.booltime = {};

    this.checkTime = {};

    this.finalTime = {};

    this.bracketImage = {};

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);
  }

  setCurrentRacer(currentRacer) {
    this.currentRacer = currentRacer;
  }
  getCurrentRacer() {
    return this.currentRacer;
  }
  setstoreNewName(storeNewName) {
    this.storeNewName = storeNewName;
  }
  getstoreNewName() {
    return this.storeNewName;
  }
  setstoreNewNumber(storeNewNumber) {
    this.storeNewNumber = storeNewNumber;
  }
  getstoreNewNumber() {
    return this.storeNewNumber;
  }

  setBoolTime(booltime) {
    this.booltime = booltime;
  }
  getBoolTime() {
    return this.booltime;
  }

  setcheckTime(checkTime) {
    this.checkTime = checkTime;
  }
  getcheckTime() {
    return this.checkTime;
  }

  setfinalTime(finalTime) {
    this.finalTime = finalTime;
  }
  getfinalTime() {
    return this.finalTime;
  }

  setImage(image){
    this.bracketImage = image;
  }
  getImage() {
    return this.image;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }
  setFilterState(filterState) {
    this.filterState = filterState;
  }
  getFilterState() {
    return this.filterState;
  }
  goToScreen = (screenId, props) => {
    // This method is the default implementation and could be customized by a navigation plugin.

    let screenIdx = -1;  // Check if the screen is already in the history stack, and pop back if so
    for (let i = 0; i < this.screenHistory.length; i++) {
      if (this.screenHistory[i].currentScreen === screenId) {
        screenIdx = i;
        break;
      }
    }
    if (screenIdx > -1) {
      this.screenHistory.splice(screenIdx + 1, this.screenHistory.length - screenIdx - 1);
      let prevScreenState = this.screenHistory[screenIdx];
      this.setState({...prevScreenState, screenTransitionForward: false});
    }
    else {
      props = props || {};
      let screenState = {currentScreen: screenId, currentScreenProps: props};
      this.screenHistory.push(screenState);
      this.setState({...screenState, screenTransitionForward: true});
    }
    window.scrollTo(0, 0);
  }

  goBack = () => {
    Database.persistToStorage();
    // This method is the default implementation and could be customized by a navigation plugin.
    if (this.screenHistory.length < 2)
      return;
    this.screenHistory.splice(this.screenHistory.length - 1, 1);
    let prevScreenState = this.screenHistory[this.screenHistory.length - 1];
    this.setState({...prevScreenState, screenTransitionForward: false});
    window.scrollTo(0, 0);

  }

  getDataSheet = (sheetId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});

      if (this.state.currentScreenProps.dataSheetRow) {
        let screenProps = {...this.state.currentScreenProps};
        screenProps.dataSheetRow = row;

        // Also update any props that were carried into a detail view
        for (let prop in screenProps) {
          if (row[prop] !== undefined) {
            screenProps[prop] = row[prop];
          }
        }
        this.setState({currentScreenProps: screenProps});
      } else {
        this.setState({});
      }
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.dataSlots[slotId] = value;
    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }
    this.setState({});
  }

  dataSheetDidUpdate = (dataSheet) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.setState({});
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        'ds_activeLang': this.dataSlots['ds_activeLang'],
        'ds_bracket': this.dataSlots['ds_bracket'],
      };
      // A data sheet row was specified as the data source for this screen, so carry those props + 'dataSheetRow'.
      const dataSheetRow_EditBikerScreen = this.dataSheets['localizationSheet'].items[0];
      const screenData_EditBikerScreen = {
        ...dataSheetRow_EditBikerScreen,
        dataSheetRow: dataSheetRow_EditBikerScreen,
      }
      switch (screenId) {
        default:
          return null;
        case 'bracketexported':
          return (<BracketExportedScreen {...screenProps} />)

        case 'addbiker':
          return (<AddBikerScreen {...screenProps} />)
        case 'bracket':
          return (<BracketScreen {...screenProps} />)
        case 'qualifying':
          return (<QualifyingScreen {...screenProps} />)
        case 'race':
          return (<RaceScreen {...screenProps} />)
        case 'pickyourclass':
          return (<PickYourClassScreen {...screenProps} />)
        case 'welcometogeorgiatech41':
          return (<WelcomeToGeorgiaTech41Screen {...screenProps} />)
        case 'mtbracket':
          return (<MTBracketScreen {...screenProps} />)
        case 'editbiker':
          return (<EditBikerScreen {...screenProps} {...screenData_EditBikerScreen} />)
        case 'timer':
          return (<TimerScreen {...screenProps} />)
       
      }
    }

    let screenEl = makeElementForScreen(this.state.currentScreen, this.state.currentScreenProps, true, this.state.screenTransitionForward);
    let prevScreenEl = null;
    if (this.screenHistory.length >= 2) {  // For transitions, we want to show the previous screen below
      let prevScreenState = this.screenHistory[this.screenHistory.length - 2];
      prevScreenEl = makeElementForScreen(prevScreenState.currentScreen, prevScreenState.currentScreenProps, false, this.state.screenTransitionForward);
    }

    return (
      <div className="App">
        {prevScreenEl}
        {screenEl}
      </div>
    );
  }
}
