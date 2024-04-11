import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      // Vérifie si city est défini avant d'appeler toLowerCase
      const normalizedCity = action.payload.city ? action.payload.city.toLowerCase() : undefined;
      return {
        ...state,
        city: normalizedCity,
        dates: action.payload.dates,
        options: action.payload.options,
      };
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};



export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
