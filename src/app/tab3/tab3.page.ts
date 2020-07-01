import { Component } from '@angular/core';
import { MaternitySummariesConstant } from '../const/maternity-summaries-constant';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  expandClick: boolean = true;
  segments: any[] = [
    { value: 'all', display: 'All' },
    { value: 'active', display: 'Active' },
    { value: 'inactive', display: 'Inactive' }
  ];

  //variables of Template
  protected notStarted = 'Not started';
  protected inProgress = 'In progress';
  protected completed = 'Completed';

  private nonViableStatus = 'Non viable';
  private typeOfSubstance = 5;
  private typeOfDelivery = 3;
  private typeOfAntenatal = 1;
  private deliveried = 'Delivered';
  private typeOfPostnatal = 2;
  private typeOfBirthSummary = 9;
  private typeOfPostnatalDelivery = 4;
  private antenatalHeader = 'ANTENATAL_HEADER';

  //the segment buttons on ionic segment for selected to filter encounter
  private maternityTypesDashboard = [
    { id: MaternitySummariesConstant.ALL.CODE, title: MaternitySummariesConstant.ALL.TEXT, activated: true },
    { id: MaternitySummariesConstant.ANTENATAL.CODE, title: MaternitySummariesConstant.ANTENATAL.TEXT, activated: false },
    { id: MaternitySummariesConstant.DELIVERY.CODE, title: MaternitySummariesConstant.DELIVERY.TEXT, activated: false },
    { id: MaternitySummariesConstant.POSTNATAL.CODE, title: MaternitySummariesConstant.POSTNATAL.TEXT, activated: false },
  ]
  protected deliveryType = MaternitySummariesConstant.DELIVERY_SUMMARY.TYPE;

  visitList: Array<any> = [
    [
      {
        "visitId": "RHQCon-02113",
        "episodeId": "RHQ-00283",
        "visitNumber": 2,
        "visitType": 0,
        "visitDate": "30-Jun-2020 18:00",
        "visitOID": 600000050748,
        "miFormStatus": "[]",
        "siFormStatus": "[\"MN_MAT_RSKASS\",\"MN_MAT_CURPREG\"]",
        "visitProcessType": "",
        "episodeStartDate": "2020-04-09T03:24:42Z",
        "startProcess": true,
        "visitName": "Postnatal Summary",
        "visitStatus": "Not started",
        "visitProcess": "POSTNATAL",
        "content": [],
        "isMissingAntenatalForm": false,
        "isShowPDFPrinter": false
      }
    ],
    [
      {
        "visitId": "RHQCon-02050",
        "episodeId": "RHQ-00283",
        "visitNumber": 1,
        "visitType": 2,
        "visitDate": "16-Jun-2020 18:00",
        "visitOID": 600000048156,
        "miFormStatus": "[\"MN_MAT_PNMWLBNG\"]",
        "siFormStatus": "[\"MN_MAT_RSKASS\",\"MN_MAT_CURPREG\"]",
        "visitProcessType": "",
        "episodeStartDate": "2020-04-09T03:24:42Z",
        "startProcess": true,
        "visitName": "Postnatal Summary",
        "visitStatus": "In progress",
        "visitProcess": "POSTNATAL",
        "content": [
          [
            {
              "assessmentDate": "",
              "durationDays": "",
              "content": [
                {
                  "itemName": "BP",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Breast",
                  "itemValue": "",
                  "itemHasSubGroup": true,
                  "itemSubGroupContent": [],
                  "itemType": "postnatal",
                  "itemClass": "width-66"
                },
                {
                  "itemName": "Uterus palpated",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Legs",
                  "itemValue": "",
                  "itemHasSubGroup": true,
                  "itemSubGroupContent": [],
                  "itemType": "postnatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Additional symptoms",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Micturation",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Bowels",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Emotional wellbeing",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Abdominal wound",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Perineum",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-66"
                },
                {
                  "itemName": "Abdominal wound clean",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Perineum clean",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-66"
                },
                {
                  "itemName": "Abdominal wound healing",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Perineum healing",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-66"
                },
                {
                  "itemName": "Abdominal details",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Perineum details",
                  "itemValue": "",
                  "itemType": "postnatal",
                  "itemClass": "width-66"
                }
              ]
            }
          ]
        ],
        "isMissingAntenatalForm": false,
        "age": "",
        "isShowPDFPrinter": false
      }
    ],
    [],
    [
      {
        "visitId": "RHQCon-01792",
        "episodeId": "RHQ-00283",
        "visitNumber": 2,
        "visitType": 1,
        "visitDate": "20-Apr-2020 16:00",
        "visitOID": 600000044360,
        "miFormStatus": "[\"MA_MAT_ANTREV\"]",
        "siFormStatus": "[\"MN_MAT_RSKASS\",\"MN_MAT_CURPREG\"]",
        "visitProcessType": "",
        "episodeStartDate": "2020-04-09T03:24:42Z",
        "startProcess": true,
        "visitName": "Antenatal Summary",
        "visitStatus": "Delivered",
        "visitProcess": "AN_REVIEW",
        "content": [
          [
            [
              [
                {
                  "itemName": "Blood pressure",
                  "itemValue": "",
                  "itemType": "antenatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Urine abnormalities",
                  "itemValue": "",
                  "itemType": "antenatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Fundal height (cm)",
                  "itemValue": "70",
                  "itemType": "antenatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Accompanied",
                  "itemValue": "Yes",
                  "itemType": "antenatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Mental wellbeing discussed",
                  "itemValue": "",
                  "itemType": "antenatal",
                  "itemClass": "width-33"
                }
              ]
            ],
            [
              [
                {
                  "itemName": "Fetus 1 · Fetal ID",
                  "itemValue": "RHQ.FETALID-00580",
                  "itemType": "fetal",
                  "itemClass": "width-15"
                },
                {
                  "itemName": "FM Concern",
                  "itemValue": "Not specified",
                  "itemType": "fetal",
                  "itemClass": "width-20"
                },
                {
                  "itemName": "Lie",
                  "itemValue": "Longitudinal",
                  "itemType": "fetal",
                  "itemClass": "width-16"
                },
                {
                  "itemName": "Presentation",
                  "itemValue": "Breech",
                  "itemType": "fetal",
                  "itemClass": "width-20"
                },
                {
                  "itemName": "Engagement",
                  "itemValue": "Not recorded",
                  "itemType": "fetal",
                  "itemClass": "width-20"
                },
                {
                  "itemName": "FHR",
                  "itemValue": "",
                  "itemType": "fetal",
                  "itemClass": "width-8"
                },
                {
                  "itemName": "Status",
                  "itemValue": "Viable",
                  "itemType": "fetal"
                }
              ]
            ]
          ]
        ],
        "isMissingAntenatalForm": false,
        "isShowPDFPrinter": false
      },
      {
        "visitId": "RHQCon-01751",
        "episodeId": "RHQ-00283",
        "visitNumber": 1,
        "visitType": 1,
        "visitDate": "14-Apr-2020 18:00",
        "visitOID": 600000043903,
        "miFormStatus": "[]",
        "siFormStatus": "[\"MN_MAT_RSKASS\",\"MN_MAT_CURPREG\"]",
        "visitProcessType": "",
        "episodeStartDate": "2020-04-09T03:24:42Z",
        "startProcess": true,
        "visitName": "Antenatal Summary",
        "visitStatus": "Delivered",
        "visitProcess": "AN_BOOKING",
        "content": [
          [
            [
              [
                {
                  "itemName": "Blood pressure",
                  "itemValue": "",
                  "itemType": "antenatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Urine abnormalities",
                  "itemValue": "",
                  "itemType": "antenatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Fundal height (cm)",
                  "itemValue": "",
                  "itemType": "antenatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Accompanied",
                  "itemValue": "",
                  "itemType": "antenatal",
                  "itemClass": "width-33"
                },
                {
                  "itemName": "Mental wellbeing discussed",
                  "itemValue": "",
                  "itemType": "antenatal",
                  "itemClass": "width-33"
                }
              ]
            ],
            [
              [
                {
                  "itemName": "Fetus 1 · Fetal ID",
                  "itemValue": "RHQ.FETALID-00580",
                  "itemType": "fetal",
                  "itemClass": "width-15"
                },
                {
                  "itemName": "FM Concern",
                  "itemValue": "",
                  "itemType": "fetal",
                  "itemClass": "width-20"
                },
                {
                  "itemName": "Lie",
                  "itemValue": "",
                  "itemType": "fetal",
                  "itemClass": "width-16"
                },
                {
                  "itemName": "Presentation",
                  "itemValue": "",
                  "itemType": "fetal",
                  "itemClass": "width-20"
                },
                {
                  "itemName": "Engagement",
                  "itemValue": "",
                  "itemType": "fetal",
                  "itemClass": "width-20"
                },
                {
                  "itemName": "FHR",
                  "itemValue": "",
                  "itemType": "fetal",
                  "itemClass": "width-8"
                },
                {
                  "itemName": "Status",
                  "itemValue": "Viable",
                  "itemType": "fetal"
                }
              ]
            ]
          ]
        ],
        "isMissingAntenatalForm": false,
        "isShowPDFPrinter": false
      }
    ]
  ]
  buttonEnable: boolean = true;

  isColor = true;
  iconDisabled = false;
  constructor() {}
  backtoDashboard(){
    
    
  }
  print(){

  }
  handleEventManualProcess(){

  }
  pushEventProcess(){

  }
}
