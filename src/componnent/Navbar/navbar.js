import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbarstyl.css';
import { Button } from '../Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState (true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960){
      setButton (false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize',showButton);
  return ( 
    <>
        <nav classname="navbar">
          <div classname="navbar-container">
            <Link to="/" classname="navbar-logo">
              Monitoring Sungai 
              <i classname='fab fa-typo3'/>
              </Link>
              < div classname ='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-items'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
              </Link>
              </li>
              <li className='nav-items'>
              <Link to='/History' className='nav-links' onClick={closeMobileMenu}>
              History
              </Link>
              </li>
              <li className='nav-items'>
              <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
              SignUp
              </Link>
              </li> 
              </ul>
              {button && <button buttonStyle='btn--outline'> SIGNUP </button>}
              </div>
        </nav>
    </>

  );
}
export default navbar;