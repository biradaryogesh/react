
import {BUY_CAKE,BUY_SUCCESS,BUY_ERROR} from '../actions/actionTypes';
const nameInitialState = {numberOfcake : 10,userlist : [],error:''}

const buyReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {...state,numberOfcake : state.numberOfcake-1} 
        case BUY_SUCCESS:
            return {...state,userlist : action.payload}
        case BUY_ERROR : 
            return {...state,error:action.payload}          
        default:
            return state
    }
}
export default buyReducer;
