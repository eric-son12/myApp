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
  constructor() {}


  expandPatientDetail(){

  };

}
