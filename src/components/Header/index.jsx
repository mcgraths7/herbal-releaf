import React from 'react';
import './Header.css';
import logo from '../../assets/images/herblogo.png';
import user from '../../assets/icons/user.svg';
import bell from '../../assets/icons/bell.svg';
import bag from '../../assets/icons/shopping-bag.svg';

const Header = () => {
  return (
    <header className="flex jst-sb align-center header text-md container">
      <h1>
        <img src={logo} alt="herbal releaf logo" className="logo" />
      </h1>
      <div className="flex align-center gap-2">
        <div className="flex align-center gap-1">
          <button className="btn btn-secondary">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <div className="flex gap-1">
          <img src={user} alt="user icon" className="icon" />
          <img src={bell} alt="notification icon" className="icon" />
          <img src={bag} alt="shopping bag icon" className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
