import {createStore,combineReducers,applyMiddleware} from 'redux'
import {auth} from './reducers/authReducer'
import thunk from "redux-thunk";
import {companyReducer} from './reducers/companyReducer'
import {paymentTypeReducer} from './reducers/paymentTypeReducer'
import { employeeReducers} from './reducers/employeeReducer'

let AllReducers = combineReducers({auth,companyReducer,paymentTypeReducer,employeeReducers})

let store = createStore(AllReducers,applyMiddleware(thunk))

export default store