import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "types";

const emptyContact = [
  {
    name: {
      first: "New",
      last: "contact",
    },
    status: "",
    email: "",
    phone: "",
    cell: "",
  },
];

export const addContact = (newContact) => ({
  type: ADD_CONTACT,
  newContact: newContact,
});

export const addEmptyContact = () => ({
  type: ADD_CONTACT,
  newContact: emptyContact,
});

export const updateContact = (index, data) => ({
  type: UPDATE_CONTACT,
  index,
  data,
});

export const deleteContact = (index) => ({
  type: DELETE_CONTACT,
  index,
});
