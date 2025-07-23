import { createSlice } from '@reduxjs/toolkit';

const isMobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 640px)').matches;
const appSlice = createSlice({
  name: 'app',
  initialState: {
    isSidebarOpen: !isMobile,
  },
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeSidebar: (state) => {
            state.isSidebarOpen = false;
        }
    },
});

export const { toggleSidebar, closeSidebar } = appSlice.actions;
export default appSlice.reducer;