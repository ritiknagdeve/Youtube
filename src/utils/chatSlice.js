import { createSlice } from '@reduxjs/toolkit';
const chatSlice = createSlice({
  name: 'chatData',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      // Only keep the latest 200 messages
      if (state.messages.length > 200) {
        state.messages = state.messages.slice(-200);
      }
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;
