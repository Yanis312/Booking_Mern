import "./footer.css";
import React from "react";
import logo_lacite from '../../photo/logoLaCite@3x.png';

const Footer = () => {
  return (
    <div className="footer">
      
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes</li>
          <li className="fListItem">Apartments</li>
          <li className="fListItem">Resorts</li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to stay</li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Unpacked: Travel articles</li>
          <li className="fListItem">Travel communities</li>
          <li className="fListItem">Seasonal and holiday deals</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Customer Service</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms &amp; conditions</li>
        </ul>
      </div>
      <div className="footerContent">
        <img src={logo_lacite} alt="logo_lacite" className="footerLogo" />
        <div className="footerText">
          &copy; 2024 College La Cite
        </div>
      </div>
    </div>
  );
};

export default Footer;