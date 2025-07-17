
import Header from "./Components/Header"; // Importing Header component
import Sidebar from "./Components/Sidebar"; // Importing Sidebar component

import { Provider } from 'react-redux';
import store from './utils/store'; 

function App() {

  return (
    <Provider store={store}>

      <div className="flex flex-col h-screen bg-black overflow-hidden">
        {/* we are building youtube */}
        <Header />
        <div className="flex flex-1 bg-black overflow-hidden">
          <Sidebar />
          <div className="flex-1 bg-black min-h-full overflow-y-auto">
            {/* Main content area */}
          </div>
        </div>
      </div>

    </Provider>
  )
}

export default App
