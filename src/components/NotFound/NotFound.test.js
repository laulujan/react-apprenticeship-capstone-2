import NotFound from './NotFound';
import { render, screen } from '@testing-library/react';

describe('<Not found />', () => {
  test('It renders not found image', () => {
    render(<NotFound />);
    expect(screen.getByAltText('Not Found')).toBeInTheDocument();
  });
  test('It renders error message ', () => {
    const error = 'Date must be between Jun 16, 1995 and Jan 24, 2022.';
    render(<NotFound error={error} />);
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
