import { createContext, useEffect, useReducer } from "react";

// Fonction pour récupérer l'état initial de l'utilisateur depuis localStorage
function getInitialUserState() {
  const userData = localStorage.getItem("user");
  try {
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error parsing user from local storage:", error);
    return null;
  }
}


// Définir l'état initial du contexte
const INITIAL_STATE = {
  user: getInitialUserState(), // Utilisation de la fonction pour définir l'état initial de l'utilisateur
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

// Le reducer pour gérer les actions d'authentification
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, user: null, loading: true, error: null };
      case "LOGIN_SUCCESS":
        return { ...state, user: action.payload, loading: false, error: null };
      
    case "LOGIN_FAILURE":
      return { ...state, user: null, loading: false, error: action.payload };
    case "LOGOUT":
      return { ...state, user: null, loading: false, error: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    console.log("Mise à jour de l'utilisateur dans localStorage", state.user);
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);
  

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
