import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./main-page.scss";
import mockAxios from "apis";
import { addContact } from "actions";
import ContactCard from "components/contact-card";
import AddCard from "components/add-card";

const MainPage = () => {
  // connect to Redux store
  const contactsList = useSelector((store) => store.contacts.contactsList);
  const dispatch = useDispatch();

  useEffect(() => {
    const generateFirstContact = async () =>
      mockAxios
        .get()
        .then((res) => {
          res.results && dispatch(addContact(res.results));
        })
        .catch((e) => console.error(e));

    !contactsList.length && generateFirstContact();

    // if we didn't mock axios we would cancel in-flight requests here
    // to prevent memory leaks upon component un-mounting
    // return generateFirstContact.cancel()
  }, [contactsList, dispatch]);

  return (
    <section className="contact-page">
      <h1>Your Contacts</h1>
      {contactsList.length ? (
        <div className="contact-grid">
          {contactsList.map((contact, index) => (
            <ContactCard
              clickable
              key={index}
              contact={contact}
              index={index}
            />
          ))}
          <AddCard />
        </div>
      ) : (
        <div>loading...</div>
      )}
    </section>
  );
};

export default MainPage;
