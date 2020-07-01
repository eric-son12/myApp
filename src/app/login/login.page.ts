import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isShowMore: boolean = false;
  conflictArr: boolean = true;
  filterIcon: string = 'funnel-outline';
  appointmentStatus: {
    'BOOKED': 'booked',
    'ARRIVED': 'arrived',
    'FULFILLED': 'fulfilled',
    'NOSHOW': 'noshow',
    'CALLED': 'called',
    'CANCELLED': 'cancelled'
  }
  todayVisitsPage = {
    "visit": "Visit",
    "visits": "Visits",
    "postalCode": "Postcode",
    "purpose": "Purpose",
    "appointmentType": "Appointment type",
    "arrive": "Arrive",
    "depart": "Depart",
    "cancel": "Cancel",
    "delete": "Delete",
    "start": "Start",
    "duration": "Duration",
    "finished": "Finished",
    "cancelled": "Cancelled",
    "actual": "Actual",
    "cancelConfirmText": "Would you like to perform which below action?",
    "dnaCancel": "DNA the visit",
    "cancelCancel": "Cancel the visit",
    "dnaCancelVisit": "DNA",
    "deleteCancel": "Delete the visit",
    "unKnowName": "Patient's information is not available",
    "unKnowNumber": "N/A",
    "arrived": "Arrived"
  }
  private dataTodayVisits: Array<any> = [
    {
      "serviceType": "CONTACT",
      "visitOID": 600000040892,
      "visitId": "CONTACT-600000040892",
      "isDeadPatient": false,
      "patientId": "RLU000132",
      "patientName": "LAM, Tran",
      "patientGender": {
        "conceptCode": "CC_Female",
        "displayText": "Female"
      },
      "patientDateOfBirth": "1990-01-01T00:00:00Z",
      "isBabyPatient": false,
      "practitioner": {
        "id": "600000273122",
        "displayText": "Tanh Pham"
      },
      "ContactType": {
        "conceptCode": "CC_CONTFACETOFACE",
        "displayText": "Face To Face"
      },
      "AppointmentType": {
        "conceptCode": "CC_CONANT",
        "displayText": "Antenatal Booking Appointment"
      },
      "plannedCantactStartTime": "2020-06-26T11:00:00.000Z",
      "plannedCantactEndTime": "2020-06-26T12:00:00.000Z",
      "EventStatus": {
        "system": "http://azlor007.dxchealthlab.io/LMHIAService/http://www.dxc.technology/CONTSTA",
        "code": "CC_CONTPLANNED",
        "display": "Planned"
      },
      "startTime": "2020-06-26T11:00:00.000Z",
      "FullStartAt": "",
      "DairyType": {
        "conceptCode": "CC_SINGLECONT1",
        "displayText": "Single"
      },
      "PostalCode": "590000-hardcode",
      "phone": " ",
      "isAccessRestricted": false,
      "isDataErrorPatient": false,
      "status": "booked",
      "Duration": "",
      "Purpose": {
        "conceptCode": "CC_CTANTENATAL",
        "displayText": "Antenatal"
      },
      "LocationType": {
        "conceptCode": "CC_CorPTHome",
        "displayText": " NY United Kingdom"
      },
      "StartAt": "",
      "assignedTo": {
        "displayText": "Assigned to me",
        "id": "assignedToMe"
      }
    }
  ]


  isAuthenticated: boolean = true;
  isSmartCardLogin: boolean = true;
  serviceType: string = "CONTACT";
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  exportLog(){
    console.log("AHIHI DO NGOC")
  }

  navigateToPatient(){
    console.log(this.todayVisitsPage.purpose)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  changeShowMore(){
    this.isShowMore = !this.isShowMore;
  }
  showListOptions(){
    this.filterIcon = 'funnel';
  }

}
