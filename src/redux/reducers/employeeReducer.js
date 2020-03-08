import {
    ADD_NEW_EMPLOYEE
} from '../constat'
import history from '../../components/history/history'



let state = {
    userDetail: null,
    message: null
}

export function employeeReducers(newState = state, action) {

    switch (action.type) {
        case ADD_NEW_EMPLOYEE:
            console.log(action.payload);
            break;
       


        default:
            break;
    }
    return newState
}

