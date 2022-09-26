import { createStore } from "redux";
import { updateContacts } from "./reducers/ContactReducer";
import rootReducers from "./reducers/index";
// import { updateContacts } from "./reducers/ContactReducer";

// const Store = createStore(updateContacts);

const Store = createStore(updateContacts);

export default Store;
