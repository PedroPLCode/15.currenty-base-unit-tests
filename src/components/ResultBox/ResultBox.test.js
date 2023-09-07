import ResultBox from './ResultBox';
import { render, screen, /* cleanup */} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//import userEvent from '@testing-library/user-event';

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from='PLN' to='USD' amount={666} />);
  });

  it('should render proper info about conversion when PLN -> USD', () => {
    render(<ResultBox from='PLN' to='USD' amount={100} />);
    const resultBoxDiv = screen.getByTestId('resultBoxDiv');
    expect(resultBoxDiv).toHaveTextContent('PLN 100.00 = $28.57');
  });
});

