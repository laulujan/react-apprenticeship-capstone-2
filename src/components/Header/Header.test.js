import Header from './Header';
import { render, screen } from '@testing-library/react';

describe('<Header />', () => {
  test('It renders nasa logo', () => {
    render(<Header />);
    expect(screen.getByAltText('Nasa Logo')).toBeInTheDocument();
  });
});
