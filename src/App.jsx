
import Header from "./Components/Header"; // Importing Header component
import Sidebar from "./Components/Sidebar"; // Importing Sidebar component
import Body from "./Components/Body"; // Importing Body component

import { Provider } from 'react-redux';
import store from './utils/store'; 

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import WatchPage from './Components/WatchPage'; // Importing WatchPage component
import HomePage from './Pages/HomePage';
import ShortsPage from './Pages/ShortsPage';
import SubscriptionsPage from './Pages/SubscriptionsPage';
import HistoryPage from './Pages/HistoryPage';
import PlaylistsPage from './Pages/PlaylistsPage';
import YourVideosPage from './Pages/YourVideosPage';
import WatchLaterPage from './Pages/WatchLaterPage';
import LikedVideosPage from './Pages/LikedVideosPage';
import { useSelector } from 'react-redux';

// Layout component for home page
const HomeLayout = ({ children }) => (
  <div className="flex flex-col h-screen bg-black overflow-hidden">
    <Header />
    <div className="flex flex-1 bg-black overflow-hidden">
      <Sidebar />
      <div className="flex-1 h-full overflow-auto">{children ? children : <Body />}</div>
    </div>
  </div>
);

// Layout component for watch page  
const WatchLayout = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden">
      <Header />
      <div className="flex flex-1 bg-black overflow-hidden">
        {isSidebarOpen && <Sidebar />}
        <WatchPage />
      </div>
    </div>
  );
};

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />
    },
    {
      path: '/shorts',
      element: <HomeLayout><ShortsPage /></HomeLayout>
    },
    {
      path: '/subscriptions',
      element: <HomeLayout><SubscriptionsPage /></HomeLayout>
    },
    {
      path: '/history',
      element: <HomeLayout><HistoryPage /></HomeLayout>
    },
    {
      path: '/playlists',
      element: <HomeLayout><PlaylistsPage /></HomeLayout>
    },
    {
      path: '/your-videos',
      element: <HomeLayout><YourVideosPage /></HomeLayout>
    },
    {
      path: '/watch-later',
      element: <HomeLayout><WatchLaterPage /></HomeLayout>
    },
    {
      path: '/liked-videos',
      element: <HomeLayout><LikedVideosPage /></HomeLayout>
    },
    {
      path: '/search',
      element: <HomeLayout />
    },
    {
      path: '/watch',
      element: <WatchLayout />
    }
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
