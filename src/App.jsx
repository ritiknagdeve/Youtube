
import Header from "./Components/Header"; // Importing Header component
import Sidebar from "./Components/Sidebar"; // Importing Sidebar component
import Body from "./Components/Body"; // Importing Body component

import { Provider } from 'react-redux';
import store from './utils/store'; 

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import WatchPage from './Components/WatchPage'; // Importing WatchPage component
import { useSelector } from 'react-redux';

// Layout component for home page
const HomeLayout = () => (
  <div className="flex flex-1 bg-black overflow-hidden">
    <Sidebar />
    <Body />
  </div>
);

// Layout component for watch page  
const WatchLayout = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  
  return (
    <div className="flex flex-1 bg-black overflow-hidden">
      {isSidebarOpen && <Sidebar />}
      <WatchPage />
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
      path: '/watch',
      element: <WatchLayout />
    }
  ]);

  return (
    <Provider store={store}>

      <div className="flex flex-col h-screen bg-black overflow-hidden">
        
        <Header />
        <RouterProvider router={router} />
      </div>

    </Provider>
  )
}

export default App
