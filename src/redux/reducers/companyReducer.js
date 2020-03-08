import {
    CREATE_COMPANY,
    COMPANIES_LIST,
    DELETE_COMPANY,
    EDIT_COMPANY
} from '../constat'
import history from '../../components/history/history'


let initState = {
    msg: null,
    companies: [ ],
    companyDeteledMsg: null,
    companyEditMsg: null,


}



export function companyReducer(state = initState, action) {


    switch (action.type) {
        case CREATE_COMPANY:

            state.msg = "Company Succesfully Created."

            break;
        case COMPANIES_LIST:
            state.companies = action.payload

            break;

        case DELETE_COMPANY:
            // state.companies = action.payload
            state.companyDeteledMsg = "Company Successfully Deleted"

            break;

        case EDIT_COMPANY:
            state.companyEditMsg = "Company Successfully Edited"
            setTimeout(() => {
                history.push('/')   
            });

            break;

        default:
            break;
    }
    return state
}