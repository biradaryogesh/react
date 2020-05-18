
import {BUY_ICE} from '../actions/actionTypes';
const nameInitialState = {numberOfice:20}

const IceReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case BUY_ICE:
            return {...state,numberOfice : state.numberOfice-1}    
        default:
            return state
    }
}
export default IceReducer;
