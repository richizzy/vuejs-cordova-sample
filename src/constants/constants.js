const cwl_premium_labels = [
  {
    label: 'State',
    value: 'states',
  },
  {
    label: 'Age',
    value: 'childsAge',
  },
  {
    label: 'Face Amount',
    value: 'faceAmount',
    currency: '$',
  },
];

const cwl_faceamount_labels = [
  {
    label: 'State',
    value: 'states',
  },
  {
    label: 'Age',
    value: 'childsAge',
  },
  {
    label: 'Desired Payment',
    value: 'desiredPayment',
    currency: '$',
  },
  {
    label: 'Payment Mode',
    value: 'PaymentMode',
  },
];

const calculated_result_labels = [
  {
    label: 'Monthly BSP',
    value: 'calculateMonthlyBSP',
    currency: '$',
  },
  {
    label: 'Quartely',
    value: 'calculateQuarterly',
    currency: '$',
  },
  {
    label: 'Twice a Year',
    value: 'calculateSemiAnnually',
    currency: '$',
  },
  {
    label: 'Annually',
    value: 'calculateAnnually',
    currency: '$',
  },
];

const faceamount_result_labels = [
  {
    label: 'Face Amount',
    value: 'calculateFaceAmount',
    currency: '$',
  },
];

const FACEAMOUNT = 'FACEAMOUNT';
const PREMIUM = 'PREMIUM';
const CONTEXT = 'QUOTE';
const ALERT_MSG = 'There is a problem with our service. Please try again.';

export default {
  FACEAMOUNT: FACEAMOUNT,
  PREMIUM: PREMIUM,
  CONTEXT: CONTEXT,
  ALERT_MSG: ALERT_MSG,
  cwl_premium_labels: cwl_premium_labels,
  cwl_faceamount_labels: cwl_faceamount_labels,
  calculated_result_labels: calculated_result_labels,
  faceamount_result_labels: faceamount_result_labels,
};
