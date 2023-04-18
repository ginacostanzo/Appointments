import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [ appointments, setAppointments ] = useState([]);
  const [ contacts, setContacts ] = useState([]);

  const newContact = (name, number, email) => {
    setContacts((prev) => [...prev, {
      name: name,
      number: number,
      email: email
    }
  ]);
  };

  const newAppointment = (title, contact, date, time) => {
    setAppointments((prev) => [...prev, {
      title: title,
      contact: contact,
      date: date,
      time: time
    }
  ]);
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} newContact={newContact} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} newAppointment={newAppointment} /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
