import React from "react";

export const ContactPicker = (props) => {
  return (
    <>
    <select onChange={props.onChange} value={props.value} name={props.name} defaultValue=''>
      <option value=''>No Contact Selected</option>  
      {props.contacts && props.contacts.map((contact) => {
        return <option key={contact.name} value={contact.name}>{contact.name}</option>
      })}
    </select>
    </>
  );
};
