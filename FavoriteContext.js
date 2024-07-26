import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  favorites: [],
  cart: [],
};

// Define actions
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Define reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload),
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

// Create context
const FavoriteContext = createContext();

// Create provider
export const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addFavorite = product => {
    dispatch({ type: ADD_FAVORITE, payload: product });
  };

  const removeFavorite = productId => {
    dispatch({ type: REMOVE_FAVORITE, payload: productId });
  };

  const addToCart = product => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeFromCart = productId => {
    dispatch({ type: REMOVE_FROM_CART, payload: productId });
  };

  const isFavorite = productId => state.favorites.some(item => item.id === productId);
  const isInCart = productId => state.cart.some(item => item.id === productId);

  return (
    <FavoriteContext.Provider
      value={{
        favorites: state.favorites,
        cart: state.cart,
        addFavorite,
        removeFavorite,
        addToCart,
        removeFromCart,
        isFavorite,
        isInCart,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

// Custom hook to use the favorite context
export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};
