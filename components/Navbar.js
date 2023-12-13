import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* ... (código anterior) ... */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* Otros elementos <li> con <Link> dentro */}
            <li className='nav-item'>
              <Link to='/Form' className='nav-links' onClick={closeMobileMenu}>
                Form
              </Link>
            </li>
            {/* Otros elementos <li> con <Link> dentro */}
            {/* ... (resto del código) ... */}
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGuiente</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
