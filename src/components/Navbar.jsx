import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(searchParams.get('search') || '');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('mainNavbar');
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
      }

      if (window.location.pathname === '/') {
        const sections = ['home', 'features', 'aboutUs'];
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
          <form className="d-flex nav-search-container" role="search" onSubmit={handleSearchSubmit}>
            <input className="form-control" type="search" id="menuSearch" value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder="Roll, Biryani, Pizza..." aria-label="Search" />
            <button className="btn btn-search-trigger" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
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
