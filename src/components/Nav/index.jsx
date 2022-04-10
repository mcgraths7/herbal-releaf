import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <nav className="flex jst-even container">
      <Link to="/" className="page-link text-md text-bold">
        Home
      </Link>
      <Link to="/" className="page-link text-md text-bold">
        Categories
      </Link>
      <Link to="/" className="page-link text-md text-bold">
        Herbs
      </Link>
      <Link to="/" className="page-link text-md text-bold">
        Shop
      </Link>
      <Link to="/" className="page-link text-md text-bold">
        Quiz
      </Link>
    </nav>
  );
};

export default Nav;
