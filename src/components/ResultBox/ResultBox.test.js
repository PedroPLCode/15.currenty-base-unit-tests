import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//import userEvent from '@testing-library/user-event';

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from='PLN' to='USD' amount={666} />);
  });

  it('should render proper info about conversion when PLN -> USD', () => {
    const testCases = [
      { amount: '100', from: 'PLN', to: 'USD', result: 'PLN 100.00 = $28.57' },
      { amount: '20', from: 'USD', to: 'PLN', result: '$20.00 = PLN 70.00'},
      { amount: '200', from: 'PLN', to: 'USD', result: 'PLN 200.00 = $57.14' },
      { amount: '345', from: 'USD', to: 'PLN', result: '$345.00 = PLN 1,207.50' },
    ];
    for (const testObj of testCases) {
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);
      const resultBoxDiv = screen.getByTestId('resultBoxDiv');
      expect(resultBoxDiv).toHaveTextContent(testObj.result);
      cleanup();
    }
  });
});
