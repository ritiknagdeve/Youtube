import React,{useState, useEffect} from 'react'

import {Link, useNavigate} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addSearchData, clearSearchData } from '../utils/searchSlice';

const SuggestedCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const listRef = React.useRef();
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  
  const [suggested, setSuggested] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategoryClick = async(e) => {
    
    const category = e.target.value || e.target.innerText;
    setActiveCategory(category);
    console.log("Category clicked:", category);
    const res = await fetch(`/api/search?q=${encodeURIComponent(category.trim())}`);
    const data = await res.json();
    console.log("Search results for category:", data);
    dispatch(clearSearchData()); // Clear previous search data
    dispatch(addSearchData(data.items));
    navigate('/search');
  }

  useEffect(()=>{
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        console.log("Fetched categories:", data);
        setSuggested(data.items.map(item => item.snippet.title));
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  },[])


  // Check scroll position to show/hide arrows
  const checkScroll = () => {
    const el = listRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = listRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [suggested]);

  return (
    <div className="relative flex items-center px-8 py-4" style={{overflow: 'hidden'}}>
      {showLeft && (
        <button
          className="absolute left-0 z-30 bg-black text-white px-2 py-2 rounded-full shadow hover:bg-gray-700 focus:outline-none"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          onClick={() => listRef.current.scrollBy({ left: -500, behavior: 'smooth' })}
          aria-label="Scroll left"
        >
          {'<'}
        </button>
      )}
      <div
        ref={listRef}
        className="flex w-full px-2"
        style={{ scrollBehavior: 'smooth', overflow: 'hidden' }}
      >
        <ul className="flex gap-4 w-full">
          {suggested.map((category, index) => (
            <li
              onClick={handleCategoryClick}
              key={category + '-' + index}
              className={`text-white px-4 py-2 rounded-xl shadow-md cursor-pointer font-medium text-base whitespace-nowrap transition-all duration-150 border border-gray-700 hover:bg-gray-700 hover:scale-105 focus:outline-none ${activeCategory === category ? 'bg-gray-500' : 'bg-gray-800'}`}
              tabIndex={0}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      {showRight && (
        <button
          className="absolute right-0 z-30 bg-black text-white px-2 py-2 rounded-full shadow hover:bg-gray-700 focus:outline-none"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          onClick={() => listRef.current.scrollBy({ left: 500, behavior: 'smooth' })}
          aria-label="Scroll right"
        >
          {'>'}
        </button>
      )}
    </div>
  )
}

export default SuggestedCategories