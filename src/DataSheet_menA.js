import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_menA extends DataSheetBase {

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
    item['Name'] = "Nick\t";
    item['Time'] = "0:22";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['Name'] = "George";
    item['Time'] = "0:56";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['Name'] = "Larry";
    item['Time'] = "1:03";
    item.key = key++;
  }

}
