export const PLNtoUSD = [
    { amount: '100', from: 'PLN', to: 'USD', result: 'PLN 100.00 = $28.57' },
    { amount: '20', from: 'PLN', to: 'USD', result: 'PLN 20.00 = $5.71'},
    { amount: '200', from: 'PLN', to: 'USD', result: 'PLN 200.00 = $57.14' },
    { amount: '345', from: 'PLN', to: 'USD', result: 'PLN 345.00 = $98.57' },
  ];

export const USDtoPLN = [
    { amount: '100', from: 'USD', to: 'PLN', result: '$100.00 = PLN 350.00' },
    { amount: '20', from: 'USD', to: 'PLN', result: '$20.00 = PLN 70.00'},
    { amount: '200', from: 'USD', to: 'PLN', result: '$200.00 = PLN 700.00' },
    { amount: '345', from: 'USD', to: 'PLN', result: '$345.00 = PLN 1,207.50' },
  ];

export const USDtoUSD = [
    { amount: '342', from: 'USD', to: 'USD', result: '$342.00 = $342.00' },
    { amount: '234', from: 'USD', to: 'USD', result: '$234.00 = $234.00'},
  ];

export const PLNtoPLN = [
    { amount: '350', from: 'PLN', to: 'PLN', result: 'PLN 350.00 = PLN 350.00' },
    { amount: '543', from: 'PLN', to: 'PLN', result: 'PLN 543.00 = PLN 543.00'},
  ];

export const Negative = [
    { amount: '-100', from: 'PLN', to: 'USD', result: 'Error. Wrong value.' },
    { amount: '-1', from: 'USD', to: 'PLN', result: 'Error. Wrong value.'},
    { amount: '-2134142', from: 'PLN', to: 'USD', result: 'Error. Wrong value.'},
    { amount: '-123', from: 'USD', to: 'PLN', result: 'Error. Wrong value.'},
  ];