import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import { gsap } from 'gsap';

function Menu() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const filteredRestaurants = useMemo(() => {
    if (!searchTerm.trim()) return restaurants;
    const lower = searchTerm.toLowerCase();
    return restaurants.filter(res => {
      for (const cat in res.menu) {
        if (cat.toLowerCase().includes(lower)) return true;
        if (res.menu[cat].some(item => item.name.toLowerCase().includes(lower))) return true;
      }
      return false;
    });
  }, [searchTerm]);

  useEffect(() => {
    // Kill any stuck tweens first to prevent StrictMode double-run opacity ghosting
    gsap.killTweensOf(".restaurant-card");
    gsap.fromTo(".restaurant-card",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power3.out", delay: 0.1 }
    );
    return () => gsap.killTweensOf(".restaurant-card");
  }, [filteredRestaurants]);

  const closeModal = () => setActiveModal(null);

  const copyNumber = (num) => {
    navigator.clipboard.writeText(num);
    alert("Copied: " + num);
  };

  return (
    // Re-added paddingTop here to ensure Menu gets padded but Home doesn't
    <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="grain"></div>

      <header className="menu-hero">
        <div className="container text-center">
          <span className="menu-eyebrow">SRM Campus Favorites</span>
          <h1 className="hero-title">Select your <em>Dining</em></h1>
        </div>
      </header>

      <main className="container py-5">
        {searchTerm.trim() !== '' && (
          <div className="mb-3 fs-5 fw-semibold">
            {filteredRestaurants.length > 0 ? (
              <span>🍽️ Restaurants that serve <em>{searchTerm}</em></span>
            ) : (
              <span>😕 No restaurants found for <em>{searchTerm}</em></span>
            )}
          </div>
        )}

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {filteredRestaurants.map(res => (
            <div className="col restaurant-card" key={res.id}>
              <div className="card h-100">
                <img src={res.img} className="card-img-top" alt={res.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{res.name}</h5>
                  <div className="d-flex flex-column gap-2 mt-3">
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => { setSelectedRestaurant(res); setActiveModal('menu'); }}
                    >
                      View Menu
                    </button>
                    <button
                      className="btn btn-success w-100"
                      onClick={() => { setSelectedRestaurant(res); setActiveModal('phone'); }}
                    >
                      <i className="fa-solid fa-phone me-2"></i>Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Menu Modal */}
      {activeModal === 'menu' && selectedRestaurant && (
        <>
          <div className="modal fade show d-block" tabIndex="-1" style={{ zIndex: 1055 }}>
            <div className="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <h5 className="modal-title display-6 fw-bold">{selectedRestaurant.name}</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body p-4">
                  {Object.keys(selectedRestaurant.menu || {}).map(category => (
                    <div className="mb-4" key={category}>
                      <h5 className="text-primary fw-bold bg-light p-2 rounded">{category}</h5>
                      <ul className="list-group list-group-flush">
                        {selectedRestaurant.menu[category].map((item, i) => (
                          <li className="list-group-item d-flex justify-content-between align-items-center" key={i}>
                            <span>{item.name}</span>
                            <span className="price-tag">₹{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="modal-footer border-0">
                  <button className="btn btn-secondary rounded-pill px-4" onClick={closeModal}>Close</button>
                  <button className="btn btn-success rounded-pill px-4" onClick={() => setActiveModal('phone')}>
                    <i className="fa-solid fa-phone me-2"></i>Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" style={{ zIndex: 1050 }}></div>
        </>
      )}

      {/* Phone Modal */}
      {activeModal === 'phone' && selectedRestaurant && (
        <>
          <div className="modal fade show d-block" tabIndex="-1" style={{ zIndex: 1055 }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content text-center p-4">
                <div className="modal-header border-0">
                  <h5 className="modal-title fw-bold">Contact {selectedRestaurant.name}</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <p className="fw-semibold mb-3">Call any of the numbers below:</p>
                  <div className="d-flex flex-column gap-2 align-items-center">
                    {selectedRestaurant.phones.map(phone => {
                      const cleanPhone = phone.replace(/[^0-9]/g, '');
                      return (
                        <div
                          className="d-flex justify-content-between align-items-center w-100"
                          style={{ maxWidth: '320px' }}
                          key={phone}
                        >
                          <span className="fw-bold">{phone}</span>
                          <div>
                            <a href={`tel:${cleanPhone}`} className="btn btn-success btn-sm me-2">Call</a>
                            <button className="btn btn-secondary btn-sm" onClick={() => copyNumber(cleanPhone)}>Copy</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {selectedRestaurant.note && (
                    <div className="text-center fw-semibold mt-2">({selectedRestaurant.note})</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" style={{ zIndex: 1050 }}></div>
        </>
      )}
    </div>
  );
}

export default Menu;
