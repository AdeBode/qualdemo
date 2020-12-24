import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";

import "./contact-page.scss";
import defaultProfileImage from "images/default-profile-image.png";
import { updateContact, deleteContact } from "actions";

const ContactPage = () => {
  let history = useHistory();
  let { contactID } = useParams();
  // fetch data from Store
  const contactsList = useSelector((store) => store.contacts.contactsList);
  const contact = contactsList[contactID];
  const dispatch = useDispatch();

  const [data, setData] = useState({});

  const { picture, picture: { medium = defaultProfileImage } = {} } =
    contact || {};

  // map data to local State for editing
  useEffect(() => {
    const {
      name: { first = "", last = "" } = {},
      status = "",
      email = "",
      phone = "",
      cell = "",
    } = contact || {};
    setData({ first, last, status, email, phone, cell });
  }, [contact]);

  const handleBack = () => {
    history.goBack();
  };

  const handleSave = () => {
    const { first, last, status, email, phone, cell } = data;
    const reformattedData = {
      name: {
        first,
        last,
      },
      status,
      email,
      phone,
      cell,
      picture,
    };
    dispatch(updateContact(contactID, reformattedData));
  };

  const handleDelete = () => {
    history.push("/");
    dispatch(deleteContact(contactID));
  };

  const mapItemToRow = useCallback(() => {
    const handleInputChange = (event) => {
      const {
        target: { name, value },
      } = event;
      const hackyStateCopy = JSON.parse(JSON.stringify(data));
      hackyStateCopy[name] = value;
      setData(hackyStateCopy);
    };
    const values = data;
    const keys = Object.keys(values);
    const rows = keys.map((key) => (
      <div key={key}>
        <label>
          <span className="detail-type">{`${key}:`}</span>
          <input
            type="text"
            name={key}
            value={values[key]}
            onChange={handleInputChange}
          />
        </label>
      </div>
    ));
    return rows;
  }, [data]);

  if (!contact) {
    return <Redirect to="/" />;
  }

  return (
    <div className="contact-page">
      <div className="contact-page-content">
        <figure className="contact-page-image-wrapper">
          <img className="contact-page-image" src={medium} alt="user-medium" />
        </figure>
        {mapItemToRow()}
        <div className="contact-page-button-wrapper">
          <button onClick={handleBack}>back</button>
          <button onClick={handleSave}>save changes</button>
          <button onClick={handleDelete}>delete contact</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
