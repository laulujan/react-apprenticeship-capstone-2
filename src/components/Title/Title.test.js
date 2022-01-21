import Title from './Title';
import { render, screen } from '@testing-library/react';

describe('<Title />', () => {
  test('It renders page title', () => {
    render(<Title />);
    expect(
      screen.getByText('Astronomy Picture of the Day')
    ).toBeInTheDocument();
  });
});
