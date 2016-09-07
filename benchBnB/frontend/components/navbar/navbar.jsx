import React from 'react';
import { Link } from 'react-router';

const Navbar = ({ currentUser, logout }) => {
  let greeting, links;

  if (currentUser) {
    greeting = (
      <h3>Hi, {currentUser.username}!</h3>
    );
    links = (
      <button onClick={logout}>Logout</button>
    );
  } else {
    greeting = (
      <h2>BenchBnB</h2>
    );
    links = (
      <nav className='login-signup'>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up!</Link>
      </nav>
    );
  }

  return (
    <nav className='navbar'>
      <div className='navbar-greeting'>
        {greeting}
      </div>
      <div className='navbar-links'>
        {links}
      </div>
    </nav>
  );
};

export default Navbar;
