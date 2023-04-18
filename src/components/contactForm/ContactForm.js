import React from "react";

export const ContactForm = ({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name" value={name} onChange={handleNameChange}></input>
        <label htmlFor="number">Phone Number(###-###-####): </label>
          <input id="number" type="text" name="number" pattern="^[2-9]\d{2}-\d{3}-\d{4}$" value={number} onChange={handleNumberChange}></input>
        <label htmlFor="email">Email: </label>
          <input id="email" type="text" name="email" value={email} onChange={handleEmailChange}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

