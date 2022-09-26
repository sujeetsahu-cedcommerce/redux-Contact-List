import { updateContacts } from "./ContactReducer";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  updateContacts,
});

export default rootReducers;
