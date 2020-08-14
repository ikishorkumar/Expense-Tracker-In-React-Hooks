import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// Creating the initial state
const initialState = {
    transactions:[
        {id:1,description:"Income 1", transactionsAmount:1000},
        {id:2,description:"Expense 1 ", transactionsAmount:-200},
        {id:3,description:"Income 2", transactionsAmount:700},
        {id:4,description:"Expense 1", transactionsAmount:-500}

    ]
}

// create the Global Context 
export const GlobalContext = createContext(initialState);

//creating provider to give the access to all components
export const GlobalProvider = ({children}) =>{
    const[state]= useReducer(AppReducer, initialState)
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}

        </GlobalContext.Provider>
    )
}