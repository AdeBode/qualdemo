import { combineReducers } from "redux";
import contacts from "./contacts";

// just in case we end up with multiple reducer files
export default combineReducers({ contacts });
