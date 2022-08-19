//set data layer
//we need this to track the basket

import React, { createContext, useContext, useReducer } from 'react'
//this is the data layer
export const StateContext = createContext();
//build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//thisi is how we use it inside the component
export const useStateValue = () => useContext(StateContext);