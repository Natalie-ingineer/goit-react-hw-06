import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
    },
  },
  reducers: {
    addContacts: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        (el) => [el.id](`http://el.id/`) !== action.payload
      );
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

const persistConfig = {
  key: "balance",
  storage,
  whiteList: ["value"],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
