import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const handleContactChange = (e) => {
    setContact(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Appointment Title: </label>
          <input id="title" type="text" value={title} onChange={handleTitleChange} />
        <label htmlFor="date">Date: </label>
          <input id="date" type="date" value={date} min={getTodayString} onChange={handleDateChange} />
        <label htmlFor="time">Time: </label>
          <input id="time type="time value={time} onChange={handleTimeChange} />
        <ContactPicker contacts={contacts} onChange={handleContactChange} value={contact} name={contact} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
