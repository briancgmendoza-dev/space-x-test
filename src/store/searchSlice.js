import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
};

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = '';
    },
  },
});

export const { setSearchTerm, clearSearchTerm } = SearchSlice.actions;

export default SearchSlice.reducer;
