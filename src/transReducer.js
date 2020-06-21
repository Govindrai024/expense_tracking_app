import { TransactionContext } from "./transContext";

const TransactionReducer = ((state, action) =>{
    switch (action.type){
        case  "ADD_TRANSACTION": {
            return [action.payload , ...state]
        }
        default:
            return state;
    }
})

export default TransactionReducer;


//after creating reducer we need to use it inito transContext.js by import ....
//then inside transContext,  initillize the reducer with initial state of  context.
 