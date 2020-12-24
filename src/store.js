import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

// localStorage.js
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("my_contacts");
    if (serializedState === null) {
      return undefined;
    }
    const res = JSON.parse(serializedState);
    return {
      contacts: {
        contactsList: res,
      },
    };
  } catch (err) {
    console.warn(err);
    return undefined;
  }
};

const store = createStore(
  rootReducer,
  loadState(),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
