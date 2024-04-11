import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './navbar.css';
import logo_booking from '../../photo/Logo-MyBooking.png';

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="logo">
          <img src={logo_booking} alt="logo_booking" className="logoImage" />
          <span className="bookingText">My Booking</span> {/* Ajouté pour "My Booking" */}
        </Link>
        <div className="navItems">
          {!user ? (
            <>
              <Link to="/register" className="navButton">S'inscrire</Link>
              <Link to="/login" className="navButton">Se connecter</Link>
            </>
          ) : (
            <div className="userContainer">
              <span className="username">{user.username}</span>
              <button onClick={handleLogout} className="navButton logoutButton">Déconnexion</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
