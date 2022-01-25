import Explanation from './Explanation';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

describe('<Explanation />', () => {
  test('It renders explanation', () => {
    const pictureExplanation =
      'Hot, young stars and cosmic pillars of gas and dust seem to crowd into NGC 7822. At the edge of a giant';
    render(<Explanation description={pictureExplanation} isOpen={false} />);
    expect(screen.getByText(/Hot/i)).toBeInTheDocument();
  });
  test('It renders explanation preview when open is false', async () => {
    const pictureExplanation =
      'Hot, young stars and cosmic pillars of gas and dust seem to crowd into NGC 7822. At the edge of a giant';
    render(<Explanation description={pictureExplanation} isOpen={false} />);
    const text = screen.getByText(/Hot/i);
    expect(text.textContent).toContain('Read More');
  });
  test('It renders explanation complete when open is true', async () => {
    const pictureExplanation =
      'Hot, young stars and cosmic pillars of gas and dust seem to crowd into NGC 7822. At the edge of a giant';
    render(<Explanation description={pictureExplanation} isOpen={true} />);
    const text = screen.getByText(/Hot/i);
    expect(text.textContent).toContain('Show Less');
  });
  test('Shows complete explanation On click action', async () => {
    const pictureExplanation =
      'Hot, young stars and cosmic pillars of gas and dust seem to crowd into NGC 7822. At the edge of a giant';
    render(<Explanation description={pictureExplanation} isOpen={false} />);
    const text = screen.getByText(/Hot/i);
    fireEvent.click(text);
    waitFor(() => {
      expect(text.textContent).toContain('Show Less');
    });
  });
});
