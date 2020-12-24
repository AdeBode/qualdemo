import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "types";

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
    case UPDATE_CONTACT: {
      const updatedContactsList = [...state.contactsList];
      updatedContactsList[action.index] = action.data;
      return {
        ...state,
        contactsList: updatedContactsList,
      };
    }
    case DELETE_CONTACT: {
      const updatedContactsList = [...state.contactsList];
      updatedContactsList.splice(action.index, 1);
      return {
        ...state,
        contactsList: updatedContactsList,
      };
    }
    default:
      return state;
  }
};

export default contactsReducer;
