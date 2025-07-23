import { createSlice } from '@reduxjs/toolkit';
const chatSlice = createSlice({
  name: 'chatData',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
      if (state.messages.length > 30) {
            state.messages = state.messages.slice(-30);
      }
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;
