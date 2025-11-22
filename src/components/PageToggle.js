import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PageToggle.css';

function PageToggle() {
  const location = useLocation();
  const isPortfolio = location.pathname === '/';

  return (
    <div className="page-toggle">
      {/* <Link 
        to="/" 
        className={`toggle-button ${isPortfolio ? 'active' : ''}`}
      >
        Portfolio
      </Link> */}
      <Link 
        to="/graduation" 
        className={`toggle-button ${!isPortfolio ? 'active' : ''}`}
      >
        Graduation
      </Link>
    </div>
  );
}

export default PageToggle;
