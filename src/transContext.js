import React, {createContext, useReducer, children} from 'react';
import TransactionReducer from './transReducer';

//for dynamic 
 let intitalTransactions = [
    { amount: 100, desc: "Cash" },
    { amount: -40, desc: "Bank" },
    { amount: -200, desc: "Camera" }
]

// we are creating Context , which createContext HOOK
export const TransactionContext = createContext(intitalTransactions);


// here we are initializing reducer with initial state of context.

//commiting it because we are calling it into provider
// let [state, dispatch] = useReducer(TransactionReducer, intitalTransactions);


// we were calling direct transactions into child like  let transactions = useContext(TransactionContext);

//so here we are creating proveder which will render children

export const TransactionProvider = ({children}) =>{

    let [state, dispatch] = useReducer(TransactionReducer, intitalTransactions);
    
    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                disc: transObj.desc
            },
        })
    }
    return(

        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}

//if want to use this state into child then we need to create provide inside App.js