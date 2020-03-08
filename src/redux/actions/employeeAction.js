import {
    ADD_NEW_EMPLOYEE,
    DELETE_EMPLOYEE,
    APPROVE_EXPENSE,
    REJECT_EXPENSE
} from '../constat'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import {employeeList} from '../../components/addEmployee'
import { getExpenseList} from '../../components/expenseStatus'

export function addNewEmployee(body) {

    return dispatch => {

        let token = localStorage.getItem('token')

        let header = {

            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }

        // console.log(jwt.decode(token));
        let companyId = localStorage.getItem('company_id')
        
      


        axios.post(`https://mr-expense-backend.herokuapp.com/user/register_employee?user_type=employee&_id=${companyId}`, body, header)
            .then(res => {
                employeeList()

                dispatch({
                    type: ADD_NEW_EMPLOYEE,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
                

            })


    }
}



export function deleteEmployee(id) {

    return dispatch => {

        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json',
                'x-sh-auth': token
            }
        }

        axios.get(`https://mr-expense-backend.herokuapp.com/user/delete_employee?_id=${id}`, header)
            .then(resp => {
                employeeList()

                dispatch({
                    type: DELETE_EMPLOYEE,
                    payload: resp.data
                })
            })
    }
}




export function approveByAdmin(id) {

    return dispatch => {

        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json',
                'x-sh-auth': token
            }
        }

        axios.get(`https://mr-expense-backend.herokuapp.com/admin/approve_expense?expense_id=${id}`, header)
            .then(resp => {
                getExpenseList()

                dispatch({
                    type: APPROVE_EXPENSE,
                    payload: resp.data
                })
            })
    }
}



export function rejectByAdmin(id) {

    return dispatch => {

        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json',
                'x-sh-auth': token
            }
        }

        axios.get(`https://mr-expense-backend.herokuapp.com/admin/approve_expense?expense_id=${id}`, header)
            .then(resp => {
                employeeList()

                dispatch({
                    type: REJECT_EXPENSE,
                    payload: resp.data
                })
            })
    }
}

