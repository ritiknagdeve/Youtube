
import Header from "./Components/Header"; // Importing Header component
import Sidebar from "./Components/Sidebar"; // Importing Sidebar component
import Body from "./Components/Body"; // Importing Body component

import { Provider } from 'react-redux';
import store from './utils/store'; 

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import WatchPage from './Components/WatchPage'; // Importing WatchPage component



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Body />
    },
    {
      path: '/watch',
      element:<WatchPage />
    }
  ]);

  return (
    <Provider store={store}>

      <div className="flex flex-col h-screen bg-black overflow-hidden">
        
        <Header />
        <div className="flex flex-1 bg-black overflow-hidden">
          <Sidebar />
          <RouterProvider router={router} />
        </div>
      </div>

    </Provider>
  )
}

export default App
