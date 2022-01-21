import Picture from './Picture';
import { render, screen, waitFor } from '@testing-library/react';

describe('<Picture />', () => {
  const picture = { title: 'test', url: 'url-test', copyright: 'copy-test' };
  test('It renders picture of the day', async () => {
    render(<Picture picture={picture} />);

    await waitFor(() => {
      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });
});
