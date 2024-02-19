import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    // contacts: [
    //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    // ],
    filters: {
      name: "",
    },
  },
  reducers: {
    nameFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const { nameFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

// nameFilter: (state, action) => {
//       state.filters.name.filter((el) =>
//         el.name.toLowerCase().includes(action.payload.toLowerCase())
//       );
//     },
