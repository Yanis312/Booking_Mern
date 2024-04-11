import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const { dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/register", formData);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
      setFormData({
        username: "",
        email: "",
        password: "",
        country: "",
        city: "",
        phone: "",
      });
      // Redirection vers la page de connexion après un court délai
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000); // Redirection après 2 secondes (2000 millisecondes)
    } catch (error) {
      console.error(error.response.data);
      if (error.response.data.message) {
        alert(error.response.data.message); // Affichage de l'alerte pop-up avec le message d'erreur
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
