

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../../overall.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <Link className='bl-c fs-3 title mx-3' to='/'><span className='bl-c'>NV SCHOOL</span></Link>
      <div className="options-container">
        <Link className='options' to='/apply'>Apply</Link>
        <Link className='options' to='/class'>Class</Link>
        <Link className='options' to='/staff'>Staff</Link>
        <Link className='options' to='/fees'>Fees</Link>
      </div>
    </div>
  );
};

export default Navbar;
