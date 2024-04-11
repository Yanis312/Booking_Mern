import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate pour la redirection
import { AuthContext } from '../../context/AuthContext';

const Logout = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate(); // Utilisez useNavigate pour la redirection

  const handleLogout = async () => {
    dispatch({ type: "LOGOUT" }); // Mettre à jour le contexte pour déconnecter l'utilisateur
    try {
      // Effectuer une requête au backend pour déconnecter l'utilisateur
      await axios.post("/auth/logout");
      // Utiliser navigate pour la redirection pour une approche plus "React"
      navigate("/"); 
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  // Inclure un bouton dans le rendu du composant qui, lorsqu'il est cliqué, appelle handleLogout
  return (
    <button onClick={handleLogout}>Déconnexion</button>
  );
};

export default Logout;
