import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as testCases from './ResultBoxTestCases';

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from='PLN' to='USD' amount={666} />);
  });

  it('should render proper info about conversion when PLN -> USD', () => {
    for (const testObj of testCases.PLNtoUSD) {
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);
      const resultBoxDiv = screen.getByTestId('resultBoxDiv');
      expect(resultBoxDiv).toHaveTextContent(testObj.result);
      cleanup();
    }
  });

  it('should render proper info about conversion when USD -> PLN', () => {
    for (const testObj of testCases.USDtoPLN) {
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);
      const resultBoxDiv = screen.getByTestId('resultBoxDiv');
      expect(resultBoxDiv).toHaveTextContent(testObj.result);
      cleanup();
    }
  });

  it('should render proper info when trying to convert USD -> USD', () => {
    for (const testObj of testCases.USDtoUSD) {
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);
      const resultBoxDiv = screen.getByTestId('resultBoxDiv');
      expect(resultBoxDiv).toHaveTextContent(testObj.result);
      cleanup();
    }
  });

  it('should render proper info when trying to convert PLN -> PLN', () => {
    for (const testObj of testCases.PLNtoPLN) {
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);
      const resultBoxDiv = screen.getByTestId('resultBoxDiv');
      expect(resultBoxDiv).toHaveTextContent(testObj.result);
      cleanup();
    }
  });

  it('should return "Error. Wrong value." when trying to convert amount lower than zero', () => {
    for (const testObj of testCases.Negative) {
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);
      const resultBoxDiv = screen.getByTestId('resultBoxDiv');
      expect(resultBoxDiv).toHaveTextContent(testObj.result);
      cleanup();
    }
  });
});

