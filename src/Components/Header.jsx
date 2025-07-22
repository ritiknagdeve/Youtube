import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../utils/appSlice'; 
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { addSearchData, clearSearchData } from '../utils/searchSlice'; 

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setsearchQuery] = useState("");
  const [sugggestions, setsuggestions] = useState([]);

  const toggleHamburger = () => {
    dispatch(toggleSidebar());
  }

  const handleSuggestionClick = async(e) => {
    const suggestion = e.target.value || e.target.innerText;
    try{
      const res = await fetch(`/api/search?q=${encodeURIComponent(suggestion.trim())}`);
      const data = await res.json();
      dispatch(clearSearchData()); // Clear previous search data
      dispatch(addSearchData(data.items));
      setsuggestions([]); // Hide suggestions
      navigate('/search');
    } catch (err) {
      console.error("Failed to fetch search results", err);
    }
  }

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      return;
    }
    fetch(`/api/search?q=${encodeURIComponent(searchQuery.trim())}`)
      .then(res => res.json())
      .then(data => {
        dispatch(clearSearchData()); // Clear previous search data
        dispatch(addSearchData(data.items));
        navigate('/search');
      })
      .catch(err => {
        console.error("Failed to fetch search results", err);
      });
  }

  useEffect(()=>{
    const debounce = setTimeout(()=>{
      if(searchQuery !== "") {
        getSuggestions();
      }
    }, 300);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  const getSuggestions = async()=> {
    try {
      const res = await fetch(`/api/suggestions?q=${encodeURIComponent(searchQuery)}`);
      const data = await res.json();
      console.log(data[1]);
      setsuggestions(data[1]);
    } catch (err) {
      console.error("Failed to fetch suggestions", err);
    }
  }

  return (
    <div className="flex items-center justify-between p-4 bg-black shadow-md border-b border-gray-900">
      {/* Hamburger and Logo */}
      <div className="flex items-center space-x-4">
        <button onClick={toggleHamburger} className="text-white p-2 rounded-md hover:text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="cursor-pointer text-xl font-bold text-red-600"><a href="/">YouTube</a></div>
      </div>

      {/* Search Input */}
      <div className="flex items-center flex-1 max-w-2xl mx-8">
        <div className="relative w-full flex items-center">
          <input
            id="search"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 border text-white bg-gray-950 border-gray-700 rounded-l-full focus:outline-none focus:border-blue-100"
            autoComplete="off"
          />
          <button onClick={handleSearch} className="px-4 py-2 bg-gray-300 border border-l-0 border-gray-700 rounded-r-full hover:bg-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          {sugggestions.length > 0 && (
            <ul className="absolute left-0 top-full w-full bg-gray-950 rounded-b-none shadow-lg z-20 mt-[2px]" style={{borderTop: 'none', borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
              {sugggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-white hover:bg-gray-800 cursor-pointer transition-colors duration-150"
                  style={{ borderTop: index === 0 ? 'none' : '1px solid #222' }}
                  onClick = {handleSuggestionClick}
                  // onBlur={() => setsuggestions([])}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* User Logo */}
      <div className="flex items-center px-8">
        <button className="w-8 h-8  bg-gray-500 rounded-full flex items-center justify-center text-white font-semibold hover:bg-gray-600">
          R
        </button>
      </div>
    </div>
  );
};

export default Header;