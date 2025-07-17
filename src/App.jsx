
import Header from "./Components/Header"; // Importing Header component
import Sidebar from "./Components/Sidebar"; // Importing Sidebar component
function App() {

  return (
    <div className="flex flex-col bg-black">
      {/* we are building youtube */}
      <Header />
      <div className="flex flex-1 bg-black">
        <Sidebar />
        <div className="flex-1 bg-black">
          {/* Main content area */}
        </div>
      </div>
    </div>
  )
}

export default App
