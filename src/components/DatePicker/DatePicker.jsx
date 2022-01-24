import React, { useState } from 'react';
import { DatePickerContainer, Label, Input, Button } from './DatePicker.styles';
import { getPicture } from '../../api/getPicture';

const DatePicker = ({ today, updatePicture }) => {
  const [date, setDate] = useState(today);

  const handleChange = (e) => {
    setDate(e.target.value);
  };
  const handleClick = () => {
    try {
      getPicture(date).then((data) => {
        updatePicture(data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DatePickerContainer>
      <Label>
        Select a date:
        <Input
          type="date"
          min="1995-06-16"
          id="dateinput"
          onChange={handleChange}
          max={today}
          value={date}
        />
      </Label>
      <Button onClick={handleClick}>See Picture</Button>
    </DatePickerContainer>
  );
};

export default DatePicker;
