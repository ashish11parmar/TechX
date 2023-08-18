import React from 'react';
import TechXlogo from '../images/TechX Icon.png';
import './Navbar.css';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/"><img src={TechXlogo} width='100px' alt=''/></Link>
              <input type="search"
                className="form-control" name="Search" id="Search"  placeholder="Search"/>
        </div>
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar