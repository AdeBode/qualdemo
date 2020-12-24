import React from "react";
import clsx from "clsx";

import "./contact-card.scss";

const ContactCard = ({ contact = {}, clickable = false }) => {
  return (
    <div className={clsx("contact-card", clickable ? "clickable" : null)}>
      hi world
    </div>
  );
};

export default ContactCard;
