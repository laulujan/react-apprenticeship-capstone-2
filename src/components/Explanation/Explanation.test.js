import Explanation from './Explanation';
import { render, screen } from '@testing-library/react';

describe('<Explanation />', () => {
  test('It renders explanation', () => {
    const pictureExplanation =
      'Hot, young stars and cosmic pillars of gas and dust seem to crowd into NGC 7822. At the edge of a giant';
    render(<Explanation picture={pictureExplanation} isOpen={false} />);
    expect(screen.getByText(/Hot/i)).toBeInTheDocument();
  });
  test('It renders explanation preview when open is false', async () => {
    const pictureExplanation =
      'Hot, young stars and cosmic pillars of gas and dust seem to crowd into NGC 7822. At the edge of a giant';
    render(<Explanation picture={pictureExplanation} isOpen={false} />);
    const text = screen.getByText(/Hot/i);
    expect(text.textContent.length).toBe(103);
  });
  test('It renders explanation complete when open is true', async () => {
    const pictureExplanation =
      'Hot, young stars and cosmic pillars of gas and dust seem to crowd into NGC 7822. At the edge of a giant';
    render(<Explanation picture={pictureExplanation} isOpen={true} />);
    const text = screen.getByText(/Hot/i);
    expect(text.textContent.length).toEqual(pictureExplanation.length);
  });
});
