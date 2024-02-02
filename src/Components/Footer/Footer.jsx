

import React from 'react'; // Import React to use JSX

import './Footer.css';

import { FootersLinksData } from '../../Data/Data';


import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">

        {/* About Us */}
        <div>
          <h4>About Us</h4>
          <ul className="about-params param-links">
            {FootersLinksData.Aboutus.map(({ link, linkname }, index) => (
              <li key={index}>{link ? <Link to={link}>{linkname}</Link> : linkname}</li>
            ))}
          </ul>
        </div>

        {/* Discover */}
        <div>
          <h4>Discover</h4>
          <ul className="discover-params param-links">
            {FootersLinksData.Discover.map(({ link, linkname }, index) => (
              <li key={index}>{link ? <Link to={link}>{linkname}</Link> : linkname}</li>
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4>My Account</h4>
          <ul className="myAccount-params param-links">
            {FootersLinksData.Myaccount.map(({ link, linkname }, index) => (
              <li key={index}>{link ? <Link to={link}>{linkname}</Link> : linkname}</li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4>Help</h4>
          <ul className="help-params param-links">
            {FootersLinksData.Help.map(({ link, linkname }, index) => (
              <li key={index}>{link ? <Link to={link}>{linkname}</Link> : linkname}</li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}