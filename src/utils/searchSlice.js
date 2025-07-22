import { createSlice } from '@reduxjs/toolkit';
const searchSlice = createSlice({
  name: 'searchData',
  initialState: {
    searchData: []
  },
  reducers: {
    addSearchData: (state, action) => {
      state.searchData.push(action.payload);
    },
    clearSearchData: (state) => {
        state.searchData = [];
    }
  },
});

export const { addSearchData, clearSearchData } = searchSlice.actions;
export default searchSlice.reducer;
