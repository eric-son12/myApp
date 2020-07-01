// import { UIStatusConst } from './encounter-constant'
// import { DataSummary } from '../models/ui/visit-entity';

export const MaternitySummariesConstant = {
  ALL: {
    CODE: 'ALL',
    TEXT: 'All'
  },
  ANTENATAL: {
    CODE: 'ANTENATAL',
    TEXT: 'Antenatal',
    DETAILS_NAME: 'Antenatal Summary'
  },
  DELIVERY: {
    CODE: 'DELIVERY',
    TEXT: 'Delivery',
    DETAILS_NAME: 'Delivery Summary'
  },
  POSTNATAL: {
    CODE: 'POSTNATAL',
    TEXT: 'Postnatal',
    DETAILS_NAME: 'Postnatal Summary'
  },
  RISK: {
    CODE: 'RISK',
    TEXT: 'Risk'
  },
  SCREENING: {
    CODE: 'SCREENING',
    TEXT: 'Screening'
  },
  NEXT_VISIT: {
    CODE: 'NEXT_VISIT',
    TEXT: 'Next Visit'
  },
  NOT_START_STATUS: {
    CODE: 'not-started',
    TEXT: 'Not started'
  },
  IN_PROGRESS_STATUS: {
    CODE: 'in progress',
    TEXT: 'In progress'
  },
  COMPLETED_STATUS: {
    CODE: 'completed',
    TEXT: 'Completed'
  },
  DELIVERIED_STATUS: {
    CODE: 'DELIVERIED',
    TEXT: 'Delivered'
  },

  SUBSTANCE_HISTORY: {
    TYPE: 'substance',
    CODE: 'SUBSTANCE_HISTORY',
    TEXT: 'Substance History'
  },

  START_BUTTON: 'START_BUTTON',
  VIEW_BUTTON: 'VIEW_BUTTON',
  RESUME_BUTTON: 'RESUME_BUTTON',

  SUBSTANCE_ASSESSMENT_DATE: 'Assessment date',
  SUBSTANCE_CO_TESTED: 'CO tested',
  SUBSTANCE_CO_VALUE: 'CO value',

  CLASS: {
    WIDTH_33: 'width-33',
    WIDTH_15: 'width-15',
    WIDTH_66: 'width-66',
    WIDTH_100: 'width-100',
    WIDTH_13: 'width-13',
    WIDTH_05: 'width-05',
    WIDTH_20: 'width-20',
    WIDTH_16: 'width-16',
    WIDTH_08: "width-8"
  },
  ANTENATAL_SUMMARY_CONST: {
    TYPE: 'antenatal',
    HEADER_TYPE: 'ANTENATAL_HEADER',
    ASSESSMENTDATE: 'Assessment date',
    GESTATION: 'Gestation',
    BLOOD_PRESSURE: 'Blood pressure',
    URINE: 'Urine abnormalities',
    FUN_HEIGHT: 'Fundal height (cm)',
    ACCOMPANIED: 'Accompanied',
    MENTAL_DISCUSSED: 'Mental wellbeing discussed'
  },
  FETAL_SUMMARY_CONST: {
    TYPE: 'fetal',
    FETAL_ID: 'Fetal ID',
    FM_DISCUSSED: 'FM Concern',
    LIE: 'Lie',
    PRESENTATION: 'Presentation',
    ENGAGEMENT: 'Engagement',
    FHR: 'FHR',
    STATUS: 'Status',
    VIABLE_STATUS: 'viable',
    NON_VIABLE_STATUS: 'non viable',
    NON_VIABLE_STATUS_VALUE: 'Non viable'
  },
  DELIVERY_SUMMARY: {
    TYPE: 'delivery',
    DISCHARGE_DATE: 'Discharge date',
    EBL: 'Estimated blood loss',
    FEEDING: 'Feeding',
    PASOIC :'Place at start of intrapartum care',
    DATE_DELIVERY: 'Date of delivery',
    DATE_OF_BIRTH: 'Date of birth',
    TYPE_OF_DELIVERY: 'Type of delivery',
    OUTCOME: 'Outcome',
    LOCATION_OF_DELIVERY: 'Location of delivery',
  },
  PROCESS: {
    POSTNATAL_REVIEW: 'POSTNATAL',
    ANTENATAL_REVIEW: 'AN_REVIEW',
    ANTENATAL_BOOKING: 'AN_BOOKING',
    AN_BOOK_AND_POSTNATAL : 'AN_BOOK_AND_POSTNATAL', // MIX ANTENATAL BOOKING AND POSTNATAL REVIEW
    AN_REVIEW_AND_POSTNATAL : 'AN_REVIEW_AND_POSTNATAL' //MIX ANTENATAL REVIEW AND POSTNATAL REVIEW
  },
  POSTNATAL_SUMMARY: {
    BP: 'BP',
    BREAST: 'Breast',
    UTERUS_PALPATED: 'Uterus palpated',
    LEGS: 'Legs',
    ADDITIONAL_SYMPTOMS: 'Additional symptoms',
    MICTURATION: 'Micturation',
    BOWELS: 'Bowels',
    EMOTIONAL_WELLBEING: 'Emotional wellbeing',
    ABDOMINAL_WOUND: 'Abdominal wound',
    PERINEUM: 'Perineum',
    ABDOMINAL_WOUND_CLEAN: 'Abdominal wound clean',
    PERINEUM_CLEAN:'Perineum clean',
    ABDOMINAL_WOUND_HEALING: 'Abdominal wound healing',
    PERINEUM_HEALING: 'Perineum healing',
    ABDOMINAL_DETAILS: 'Abdominal details',
    PERINEUM_DETAILS: 'Perineum details'
  },

  SINGLE_INSTANCE_CA_CODE: [
    'MN_MAT_CURPREG',
    'MN_MAT_PRVPREG',
    'MN_MAT_SUBHIS',
    'MN_MAT_FMLYHIS',
    'MN_MAT_RSKASS',
    'MN_MAT_SOCHIS',
  ],

  MULTI_INSTANCE_CA_CODE: [
    'MN_MAT_PREGMAN',
    'MN_MAT_ANTSCR',
    'MA_MAT_ANTREV',
    'MN_MAT_ANMWLBNG',
  ],

  POSTNATAL_PROCESS_CA_CODE: [
    'MN_MAT_PNEXAM',
    'MN_MAT_PNMWLBNG',
    'MN_MAT_PNDISASS'
  ],
}

