import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { restaurants } from '../data/restaurants';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(searchParams.get('search') || '');
  const [activeSection, setActiveSection] = useState('home');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef(null);

  // Compute all unique menu items for autocomplete
  const allMenuItems = useMemo(() => {
    const items = new Set();
    restaurants.forEach(res => {
      Object.keys(res.menu || {}).forEach(category => {
        res.menu[category].forEach(item => {
          items.add(item.name);
        });
      });
      items.add(res.name);
    });
    return Array.from(items);
  }, []);

  const filteredSuggestions = useMemo(() => {
    if (!searchInput.trim()) return [];
    const lower = searchInput.toLowerCase();
    return allMenuItems.filter(item => item.toLowerCase().includes(lower)).slice(0, 8); // Limit to 8 suggestions
  }, [searchInput, allMenuItems]);

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('mainNavbar');
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
      }

      if (window.location.pathname === '/') {
        const sections = ['home', 'features', 'aboutUs','feedback'];
        let current = 'home';
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= window.innerHeight / 3) {
            current = id;
          }
        }
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Need to sync search state when external navigated
  useEffect(() => {
     setSearchInput(searchParams.get('search') || '');
  }, [searchParams]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/menu?search=${encodeURIComponent(searchInput)}`);
  };

  const isMenu = location.pathname === '/menu';

  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="mainNavbar">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          Food<span className="brand-2">2</span>U
        </Link>

        {isMenu ? (
          <form className="d-flex nav-search-container position-relative" role="search" onSubmit={handleSearchSubmit} ref={searchContainerRef}>
            <input 
              className="form-control" 
              type="search" 
              id="menuSearch" 
              value={searchInput} 
              onChange={e => {
                setSearchInput(e.target.value);
                setShowSuggestions(true);
              }} 
              onFocus={() => setShowSuggestions(true)}
              placeholder="Roll, Biryani, Pizza..." 
              aria-label="Search" 
              autoComplete="off"
            />
            <button className="btn btn-search-trigger" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            {showSuggestions && filteredSuggestions.length > 0 && (
              <ul className="list-group position-absolute w-100 shadow-sm mt-1 suggestions-dropdown" style={{ top: '100%', left: 0, zIndex: 1050, maxHeight: '250px', overflowY: 'auto' }}>
                {filteredSuggestions.map((suggestion, idx) => (
                  <li 
                    key={idx} 
                    className="list-group-item list-group-item-action d-flex align-items-center"
                    onClick={() => {
                      setSearchInput(suggestion);
                      setShowSuggestions(false);
                      navigate(`/menu?search=${encodeURIComponent(suggestion)}`);
                    }}
                    style={{ cursor: 'pointer', textAlign: 'left', fontSize: '0.95rem' }}
                  >
                    <i className="fa-solid fa-utensils text-primary me-2" style={{ fontSize: '0.8rem', opacity: 0.7 }}></i>
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </form>
        ) : (
          <>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-1">
                <li className="nav-item"><a className={`nav-link ${location.pathname === '/' && activeSection === 'home' ? 'active' : ''}`} href="/#home">Home</a></li>
                <li className="nav-item"><a className={`nav-link ${location.pathname === '/' && activeSection === 'features' ? 'active' : ''}`} href="/#features">Features</a></li>
                <li className="nav-item"><a className={`nav-link ${location.pathname === '/' && activeSection === 'aboutUs' ? 'active' : ''}`} href="/#aboutUs">About</a></li>
                <li className="nav-item"><a className={`nav-link ${location.pathname === '/' && activeSection === 'feedback' ? 'active' : ''}`} href="/#feedback">Contact</a></li>
                <li className="nav-item ms-lg-3">
                  <Link className="nav-cta" to="/menu">Order Now</Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;