import {
    PAYMENT_TYPE_ADDED,
    PAYMENT_TYPE_ERROR,
    DELETE_PAYMENT_TYPE,
    EDIT_PAYMENT_TYPE
} from '../constat'
import axios from 'axios'
import {
    // addNewPaymentType,
    // paymentTypeErr,
    getPaymentType
} from '../../components/paymentType'
import {  
    // expenseGroupErr,
    // addExpenseGroupSuccess,
    getExpenseGroup 
} from '../../components/expenseCategory'
import {expenseGroupAdded,expenseGroupFail} from '../../components/expenseCategory'
import {successFul,createdFail} from '../../components/paymentType'


export function addNewPayment(body) {

    return dispatch => {

        let token = localStorage.getItem('token')

        let header = {

            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }

        console.log(body);
        let payment = {
            payment_type: body
        }


        axios.post('https://mr-expense-backend.herokuapp.com/admin/add_payment_type', payment, header)
            .then(res => {
                getPaymentType()
                successFul("success")

                dispatch({
                    type: PAYMENT_TYPE_ADDED,
                    payload: res.data
                })
            })
            .catch(err => {
                createdFail("err")

            })


    }
}

export function addExpenseGroup(body) {

    return dispatch => {

        let token = localStorage.getItem('token')

        let header = {

            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }

        console.log(body);
        // let payment = {
        //     payment_type: body
        // }


        axios.post('https://mr-expense-backend.herokuapp.com/admin/add_expense', body, header)
            .then(res => {
                // addExpenseGroupSuccess()
                getExpenseGroup()
                expenseGroupAdded("success")
                dispatch({
                    type: PAYMENT_TYPE_ADDED,
                    payload: res.data
                })
            })
            .catch(err => {
                // expenseGroupErr()
                expenseGroupFail('err')

            })


    }
}


export function deleteExpenseGroup(body) {

    return dispatch => {

        let token = localStorage.getItem('token')

        let header = {

            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }

        

        axios.get(`https://mr-expense-backend.herokuapp.com/admin/delete_expense?_id=${body}`, header)
            .then(res => {
                getExpenseGroup()
                dispatch({
                    type: PAYMENT_TYPE_ADDED,
                    payload: res.data
                })
            })
            .catch(err => {
                // expenseGroupErr()

            })


    }
}



export function deletePaymentType(body) {

    return dispatch => {

        let token = localStorage.getItem('token')

        let header = {

            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }

        

        axios.get(`https://mr-expense-backend.herokuapp.com/admin/delete_payment_type?_id=${body}`, header)
            .then(res => {
                getPaymentType()
                dispatch({
                    type: DELETE_PAYMENT_TYPE,
                    payload: res.data
                })
                // addNewPaymentType()
            })
            .catch(err => {
                // expenseGroupErr()

            })


    }
}



export function editPaymentType(body , id) {

    return dispatch => {

        let token = localStorage.getItem('token')

        let header = {

            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }

        console.log(body);
        let payment = {
            payment_type: body
        }


        axios.post(`https://mr-expense-backend.herokuapp.com/admin/edit_payment_type?_id=${id}`, payment, header)
            .then(res => {
                getPaymentType()
                // addNewPaymentType()

                dispatch({
                    type: EDIT_PAYMENT_TYPE,
                    payload: res.data
                })

            })
            .catch(err => {
                // paymentTypeErr()

            })


    }
}