import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_text_637989";
    item['en'] = "What would you like to do?";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_button_427093";
    item['en'] = "Qualifying";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_button2_380400";
    item['en'] = "Race";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_button_660255";
    item['en'] = "Qualifying";
    
    item = {};
    this.items.push(item);
    item['key'] = "qualifying_button_415676";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "qualifying_button2_616841";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "qualifying_button3_125327";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "qualifying_button_311806";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "qualifying_button_192669";
    item['en'] = "Jess - 0:39";
    
    item = {};
    this.items.push(item);
    item['key'] = "addqualifyingtime_text_78678";
    item['en'] = "Number";
    
    item = {};
    this.items.push(item);
    item['key'] = "addqualifyingtime_text2_596428";
    item['en'] = "Time\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "addqualifyingtime_text3_151329";
    item['en'] = "Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "addqualifyingtime_text4_615745";
    item['en'] = "Class";
    
    item = {};
    this.items.push(item);
    item['key'] = "addqualifyingtime_fab_425281";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "qualifyingupdated_button_528878";
    item['en'] = "Jess - 0:39";
    
    item = {};
    this.items.push(item);
    item['key'] = "qualifyingupdated_button_810372";
    item['en'] = "Mark - 0:45";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text_366978";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text2_135472";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text3_639658";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_button_295553";
    item['en'] = "Edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "race_button_31962";
    item['en'] = "Men’s A";
    
    item = {};
    this.items.push(item);
    item['key'] = "race_button2_26590";
    item['en'] = "Men’s B";
    
    item = {};
    this.items.push(item);
    item['key'] = "race_button3_1019834";
    item['en'] = "Men’s C";
    
    item = {};
    this.items.push(item);
    item['key'] = "race_button4_555497";
    item['en'] = "Women’s A";
    
    item = {};
    this.items.push(item);
    item['key'] = "race_button5_442151";
    item['en'] = "Women’s B";
    
    item = {};
    this.items.push(item);
    item['key'] = "race_button6_349885";
    item['en'] = "Women’s C";
    
    item = {};
    this.items.push(item);
    item['key'] = "addbiker_text_203148";
    item['en'] = "Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "addbiker_text2_185646";
    item['en'] = "Time";
    
    item = {};
    this.items.push(item);
    item['key'] = "addbiker_text3_753677";
    item['en'] = "Number";
    
    item = {};
    this.items.push(item);
    item['key'] = "addbiker_text4_494454";
    item['en'] = "Class";
    
    item = {};
    this.items.push(item);
    item['key'] = "addbiker_text5_226628";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_button_820159";
    item['en'] = "Delete";
    
    item = {};
    this.items.push(item);
    item['key'] = "mensabracket_text_545051";
    item['en'] = "Bikers in Men’s A:";
    
    item = {};
    this.items.push(item);
    item['key'] = "component2_text_540886";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "component2_text2_826378";
    item['en'] = "New text. Double-click to edit";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
