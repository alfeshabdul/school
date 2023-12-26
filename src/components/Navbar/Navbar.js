
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../../overall.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (

   <div className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <Link className=' ' to='/apply'>Apply</Link>
    <Link className='wt-c' to='/apply'> CLASS</Link>
    <Link className='wt-c' to='/apply'>Staff</Link>
    <Link className='wt-c' to='/apply'>Fees</Link>

   </div>
  );
};

export default Navbar;
