import React, { Component } from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <div className="nav-container">
        <div className="nav-links">
          <div className="links">
            <Link to="/">Home</Link>
            <div className="dropdown">
            <Link className="dropbtn" to="/Shop">Shop</Link>
              <div className="dropdown-content">
                <Link to="/Men">Men's</Link>
                <Link to="/Women">Women's</Link>
                <Link to="/Tops">Tops</Link>
                <Link to="/Hoodies">Hoodies</Link>
                <Link to="/Headwear">Headwear</Link>
                <Link to="/Accessories">Accessories</Link>
              </div>
              </div>
            <Link to="/Lifestyle">Looks</Link>
            <Link to="/Cart">Cart</Link>
          </div>
        </div>
      </div>
    )
  }
}
