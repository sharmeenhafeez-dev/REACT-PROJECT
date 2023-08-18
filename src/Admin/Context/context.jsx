import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import Cookies from "js-cookie";
// import jwt_decode from 'jwt-decode'

export const GlobalContext = createContext("Initial Value");

let data = {
    // user: undefined,
    // role : undefined,
    token: Cookies.get('token')||undefined
};
export default function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, data);
    useEffect(()=>{
        Cookies.set ('token',state.token)
        },[state.token]
    )
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}