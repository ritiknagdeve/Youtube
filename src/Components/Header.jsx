const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-black shadow-md border-b border-gray-900">
      {/* Hamburger and Logo */}
      <div className="flex items-center space-x-4">
        <button className="text-white p-2 rounded-md hover:text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="text-xl font-bold text-red-600">YouTube</div>
      </div>

      {/* Search Input */}
      <div className="flex items-center flex-1 max-w-2xl mx-8">
        <div className="flex items-center w-full">
          <input id="search"
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 border text-white bg-gray-950 border-gray-700 rounded-l-full focus:outline-none focus:border-blue-100"
          ></input>
          <button className="px-4 py-2 bg-gray-300 border border-l-0 border-gray-700 rounded-r-full hover:bg-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* User Logo */}
      <div className="flex items-center">
        <button className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white font-semibold hover:bg-gray-600">
          U
        </button>
      </div>
    </div>
  );
};

export default Header;