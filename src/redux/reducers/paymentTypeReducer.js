import {
    PAYMENT_TYPE_ADDED,
    PAYMENT_TYPE_ERROR,
} from '../constat'
import history from '../../components/history/history'



let state = {
    userDetail: null,
    message: null
}

export function paymentTypeReducer(newState = state, action) {

    switch (action.type) {
        case PAYMENT_TYPE_ADDED:
            console.log(action.payload);
            break;
       


        default:
            break;
    }
    return newState
}

