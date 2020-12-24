import React from "react";
import { useDispatch } from "react-redux";

import { addEmptyContact } from "actions";

import "./add-card.scss";

const AddCard = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(addEmptyContact());
  return (
    <div className="add-card" onClick={handleClick}>
      Add Contact
    </div>
  );
};

export default AddCard;
