import React, { useState } from 'react';

const today = new Date().toISOString().split('T')[0];
const DatePicker = () => {
  const [date, setDate] = useState(today);
  const handleChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div>
      <label>
        Select a date:
        <input
          type="date"
          min="1995-06-16"
          id="dateinput"
          onChange={handleChange}
          max={today}
          value={date}
        />
      </label>
    </div>
  );
};

export default DatePicker;
