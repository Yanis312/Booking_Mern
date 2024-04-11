import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);
    
    const navigate = useNavigate(); // Utilisation de useNavigate pour la navigation

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("/auth/login", credentials);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          navigate("/"); // Rediriger vers la page d'accueil après la connexion réussie
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };
    
    return (
        <div className="login">
            <div className="lContainer">
                <h1>Login</h1>
            
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                />
                <button disabled={loading} onClick={handleClick} className="lButton">
                    Login
                </button>
                <p className='register'>Do you have Account? <Link to={'/register'}>SignIn</Link></p>
              
                {error && <span style={{color: "greenyellow",fontWeight:900}}>{error.message}</span>}
            </div>
        </div>
    )
}

export default Login;
