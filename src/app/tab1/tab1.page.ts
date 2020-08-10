import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showData: boolean = true;
  isSyncDone: boolean = true;
  isPatientBannerCollapsed: boolean = true;
  elapsedString = "22 hours";
  items: Array<any> = [
    {itemID: 1, itemLabel: "Ahihi", itemSelect: true},
    {itemID: 2, itemLabel: "Ahis", itemSelect: true},
    {itemID: 3, itemLabel: "daihi", itemSelect: false},
    {itemID: 4, itemLabel: "faschi", itemSelect: true},
    {itemID: 5, itemLabel: "sdafwa", itemSelect: false}
  ]
  constructor() {}


  expandPatientDetail(){

  };

}
