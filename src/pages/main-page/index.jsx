import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./main-page.scss";
import mockAxios from "apis";
import { addContact } from "actions";
import ContactCard from "components/contact-card";

const dummyArray = [
  { name: 1, age: 2 },
  { name: 1, age: 2 },
  { name: 1, age: 2 },
  { name: 1, age: 2 },
  { name: 1, age: 2 },
  { name: 1, age: 2 },
  { name: 1, age: 2 },
  { name: 1, age: 2 },
];

const MainPage = () => {
  // connect to Redux store
  const contacts = useSelector((store) => store.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const generateFirstContact = async () =>
      mockAxios
        .get()
        .then((res) => {
          res.results && dispatch(addContact(res.results));
        })
        .catch((e) => console.error(e));

    generateFirstContact();

    // if we didn't mock axios we would cancel in-flight requests here
    // to prevent memory leaks upon component un-mounting
    // return generateFirstContact.cancel()
  }, []);

  return (
    <section className="contact-page">
      <h1>Your Contacts</h1>
      <div className="contact-grid">
        {dummyArray.map((contact, index) => (
          <ContactCard clickable key={index} />
        ))}
      </div>
    </section>
  );
};

export default MainPage;
