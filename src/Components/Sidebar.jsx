import {useSelector} from 'react-redux';


const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  if(!isSidebarOpen) {
    return null; // If sidebar is closed, return null to not render anything
  }

  const menuItems = [
    { 
      name: "Home", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      )
    },
    { 
      name: "Shorts", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L12 18.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5v-13C7 4.12 8.12 3 9.5 3s2.5 1.12 2.5 2.5v1.83c.13-.04.23-.07.23-.07l4.57-1.83c.77-.32 1.2-.5 1.2-.5s2.5.84 2.5 2.5v4.33c0 1.66-2.5 2.5-2.5 2.5z"/>
        </svg>
      )
    },
    { 
      name: "Subscriptions", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"/>
        </svg>
      )
    }
  ];

  const userItems = [
    { 
      name: "History", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
        </svg>
      )
    },
    { 
      name: "Playlists", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
        </svg>
      )
    },
    { 
      name: "Your videos", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
        </svg>
      )
    },
    { 
      name: "Watch later", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
        </svg>
      )
    },
    { 
      name: "Liked videos", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-60 bg-black h-full overflow-y-auto border-r border-gray-900 flex-shrink-0">
      {/* Main Menu */}
      <div className="py-2">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center px-6 py-2 hover:bg-gray-900 cursor-pointer">
            <div className="mr-6 text-gray-600">
              {item.icon}
            </div>
            <span className="text-white text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>

      <hr className="my-2 border-gray-900" />

      {/* You Section */}
      <div className="py-2">
        <div className="px-6 py-2">
          <h3 className="text-sm font-medium text-white">You</h3>
        </div>
        {userItems.map((item, index) => (
          <div key={index} className="flex items-center px-6 py-2 hover:bg-gray-900 cursor-pointer">
            <div className="mr-6 text-gray-600">
              {item.icon}
            </div>
            <span className="text-white text-sm">{item.name}</span>
          </div>
        ))}
      </div>

      <hr className="my-2 border-gray-900" />

      
    </div>
  );
};

export default Sidebar;