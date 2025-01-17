import Picture from './Picture';
import { render, screen, waitFor } from '@testing-library/react';

describe('<Picture />', () => {
  const picture = {
    title: 'test',
    url: 'url-test',
    copyright: 'copy-test',
    media_type: 'image',
  };
  test('It renders picture of the day', async () => {
    render(<Picture picture={picture} />);

    await waitFor(() => {
      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });
  test('It renders video when media type is video', async () => {
    const pic = {
      title: 'test',
      url: 'url-test',
      copyright: 'copy-test',
      media_type: 'video',
    };
    render(<Picture picture={pic} />);

    await waitFor(() => {
      expect(document.getElementsByTagName('iframe')[0]).toBeInTheDocument();
    });
  });
});
describe('Responsiveness', () => {
  const picture = { title: 'test', url: 'url-test', copyright: 'copy-test' };
  test('Large screen', async () => {
    const image = render(<Picture picture={picture} />);
    waitFor(() => {
      expect(image.width).toBeGreaterThan(500);
    });
  });
  test('resize', async () => {
    const picture = { title: 'test', url: 'url-test', copyright: 'copy-test' };
    const image = render(<Picture picture={picture} />);
    const resizeWindow = (width, height) => {
      window.innerWidth = width;
      window.innerHeight = height;
      window.dispatchEvent(new Event('resize'));
    };
    resizeWindow(500, 300);
    waitFor(() => {
      expect(image.width).toBeLessThanOrEqual(500);
    });
  });
});
