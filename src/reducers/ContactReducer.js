const initialState = {
  contact: [],
};

export const updateContacts = (state = initialState, action) => {
  if (action.type === "ADD_HERE") {
    return {
      ...state,
      contact: [...state.contact, action.data],
    };
  }
  if (action.type === "remove") {
    var tempcontact = [...state.contact];
    tempcontact.splice(action.index, 1);
    return {
      ...state,
      contact: tempcontact,
    };
  } else {
    return state;
  }
};
