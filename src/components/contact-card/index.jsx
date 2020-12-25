import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import clsx from "clsx";

import defaultProfileImage from "images/default-profile-image.png";

import "./contact-card.scss";

const ContactCard = ({ contact = {}, clickable = false, index }) => {
  let history = useHistory();
  if (index === undefined) {
    console.error("contact card is missing index");
  }

  const {
    name: { first = "", last = "" } = {},
    status = "",
    email = "",
    phone = "",
    cell = "",
    picture: { medium = defaultProfileImage } = {},
  } = contact || {};

  const mapItemToRow = useCallback(() => {
    const values = { status, email, phone, cell };
    const keys = Object.keys(values);
    const rows = keys.map((key) =>
      values[key] ? (
        <tr key={key}>
          <td className="card-detail-type">{`${key}:`}</td>
          <td>{values[key]}</td>
        </tr>
      ) : null
    );
    return <tbody>{rows}</tbody>;
  }, [status, email, phone, cell]);

  return (
    <div
      className={clsx("contact-card", clickable ? "clickable" : null)}
      onClick={() => history.push(`/contact/${index}`)}
      data-testid="contact-grid-card"
    >
      <section className="contact-card-details">
        <h2>{`${first} ${last}`}</h2>
        <table>{mapItemToRow()}</table>
      </section>
      <figure className="contact-card-image-wrapper">
        <img className="contact-card-image" src={medium} alt="user-medium" />
      </figure>
    </div>
  );
};

export default ContactCard;
