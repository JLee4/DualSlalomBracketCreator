import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_people extends DataSheetBase {

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
    item['Name'] = "Shivani";
    item['Time'] = "0:45";
    item['Number'] = "2";
    item['Class'] = "W C";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['Name'] = "Dana";
    item['Time'] = "0:37";
    item['Number'] = "4";
    item['Class'] = "W A";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['Name'] = "Nick";
    item['Time'] = "0:22";
    item['Number'] = "5";
    item['Class'] = "M A";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['Name'] = "Johnny";
    item['Time'] = "0:43";
    item['Number'] = "1";
    item['Class'] = "M B";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['Name'] = "Larry";
    item['Time'] = "1:03";
    item['Number'] = "8";
    item['Class'] = "M A";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['Name'] = "George";
    item['Time'] = "0:56";
    item['Number'] = "7";
    item['Class'] = "M A";
    item.key = key++;
  }

}
