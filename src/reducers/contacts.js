import { ADD_CONTACT } from "types";

const initialState = {
  contactsList: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      return {
        ...state,
        contactsList: [...state.contactsList, ...action.newContact],
      };
    }
    default:
      return state;
  }
};

export default contactsReducer;
