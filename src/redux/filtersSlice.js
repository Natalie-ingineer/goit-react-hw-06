import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    // contacts: {
    //   items: [],
    // },
    filters: {
      name: "",
    },
  },
  reducers: {
    nameFilter: (state, action) => {
      state.contacts.filter((el) =>
        el.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { nameFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
