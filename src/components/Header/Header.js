import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="header-container">
      <div id="logo-container">
        <img id="logo" src="https://static.wixstatic.com/media/bad424_7e24b8d49b0f4f61aaa320311b4c3db6~mv2.jpg/v1/fill/w_121,h_80,al_c,q_80,usm_0.66_1.00_0.01/bad424_7e24b8d49b0f4f61aaa320311b4c3db6~mv2.webp" alt="logo" />
      </div>
      <div id="header-text">
      <p>GMRT GEAR</p>
      <p>S T Y L I S H &nbsp; X &nbsp; C O M F O R T&nbsp;™</p>
      </div>
    </div>
  )
}
