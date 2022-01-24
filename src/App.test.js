import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders app', () => {
    render(<App />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
  test('Calls fetch on click button', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({ url: 'test', title: 'test', explanation: 'test' }),
      })
    );
    render(<App />);
    const input = screen.getByLabelText('Select a date:');
    const button = screen.getByRole('button');
    fireEvent.change(input, { target: { value: '2022-01-22' } });
    fireEvent.click(button);
    waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
  });
  test('Display response on click', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({ url: 'test', title: 'test', explanation: 'test' }),
      })
    );
    render(<App />);
    const input = screen.getByLabelText('Select a date:');
    const button = screen.getByRole('button');
    fireEvent.change(input, { target: { value: '2022-01-22' } });
    fireEvent.click(button);
    waitFor(() => {
      expect(screen.getByText('test')).toBeInTheDocument();
    });
  });
  test('Calls fetch on click button with wrong date and display error message', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ code: 403, msg: 'error' }),
      })
    );
    render(<App />);
    const input = screen.getByLabelText('Select a date:');
    const button = screen.getByRole('button');
    fireEvent.change(input, { target: { value: '2023-01-23' } });
    fireEvent.click(button);
    waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
      expect(screen.getByText('error')).toBeInTheDocument();
    });
  });
  test('display error message when inexpected happens', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ error: {} }),
      })
    );
    render(<App />);
    const input = screen.getByLabelText('Select a date:');
    const button = screen.getByRole('button');
    fireEvent.change(input, { target: { value: '2023-01-23' } });
    fireEvent.click(button);
    waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
      expect(
        screen.getByText('There was an error, please try again.')
      ).toBeInTheDocument();
    });
  });
});
