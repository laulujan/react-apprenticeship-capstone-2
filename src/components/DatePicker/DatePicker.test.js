import DatePicker from './DatePicker';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<DatePicker />', () => {
  test('It renders date picker', () => {
    render(<DatePicker />);
    expect(screen.getByLabelText('Select a date:')).toBeInTheDocument();
  });
  test('It allows to select date', async () => {
    render(<DatePicker />);
    const input = screen.getByLabelText('Select a date:');
    fireEvent.change(input, { target: { value: '2020-05-12' } });
    expect(input.value).toBe('2020-05-12');
  });
  test('It does not allow to select date previous to 1995-06-16', async () => {
    render(<DatePicker />);
    const input = screen.getByLabelText('Select a date:');
    expect(input.min).toBe('1995-06-16');
  });
  test('Input value equals to todays date', async () => {
    render(<DatePicker />);
    const input = screen.getByLabelText('Select a date:');
    const today = new Date().toISOString().split('T')[0];
    expect(input.value).toEqual(today);
  });
  test('Input does not allows to select future date', async () => {
    render(<DatePicker />);
    const input = screen.getByLabelText('Select a date:');
    const today = new Date().toISOString().split('T')[0];
    expect(input.max).toEqual(today);
  });
});
