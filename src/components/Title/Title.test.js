import Title from './Title';
import { render, screen, waitFor } from '@testing-library/react';

describe('<Title />', () => {
  test('It renders page title', () => {
    render(<Title />);
    expect(
      screen.getByText('Astronomy Picture of the Day')
    ).toBeInTheDocument();
  });
});

describe('Responsiveness', () => {
  test('Large screen', async () => {
    const title = render(<Title />);
    waitFor(() => {
      expect(title.width).toBeGreaterThan(500);
    });
  });
  test('resize', async () => {
    const title = render(<Title />);
    const resizeWindow = (width, height) => {
      window.innerWidth = width;
      window.innerHeight = height;
      window.dispatchEvent(new Event('resize'));
    };
    resizeWindow(500, 300);
    waitFor(() => {
      expect(title.width).toBeLessThanOrEqual(500);
    });
  });
});
