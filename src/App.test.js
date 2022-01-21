import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
});
