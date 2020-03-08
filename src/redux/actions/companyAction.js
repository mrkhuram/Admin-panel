import axios from 'axios'
import {
    CREATE_COMPANY,
    COMPANIES_LIST,
    DELETE_COMPANY,
    EDIT_COMPANY
} from '../constat'
import { getCompanieslist } from '../../components/Companies'
// import {Propstype} from 'Prop'




export function createCompany(body) {

    return dispatch => {

        let token = localStorage.getItem('token')


        let header = {
            headers: {
                'Content-Type': 'application/json',
                'x-sh-auth': token
            }
        }
        console.log(body);

        axios.post("https://mr-expense-backend.herokuapp.com/admin/add_company", body, header)
            .then(resp => {
                // getCompanieslist()
                localStorage.setItem("company_id", resp.data.company._id)
                
                dispatch({
                    type: CREATE_COMPANY,
                    payload: resp.data
                })
            }).catch(err => console.log(err)
            )
    }
}



export function getCompanies(body) {

    return dispatch => {

        let token = localStorage.getItem('token')



        let header = {
            headers: {
                'Content-Type': 'application/json',

                'x-sh-auth': token
            }
        }

        axios.post("https://mr-expense-backend.herokuapp.com/admin/add_company", body, header)
            .then(resp => {
                dispatch({
                    type: COMPANIES_LIST,
                    payload: resp.data
                })
            })
    }
}





export function deleteCompany(id) {

    return dispatch => {

        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json',
                'x-sh-auth': token
            }
        }

        axios.get(`https://mr-expense-backend.herokuapp.com/admin/delete_company?_id=${id}`, header)
            .then(resp => {
                getCompanieslist()
                dispatch({
                    type: DELETE_COMPANY,
                    payload: resp.data
                })
            })
    }
}



export function editCompany(id, body) {

    return dispatch => {

        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json',

                'x-sh-auth': token
            }
        }
        let { company_name, employee_limit, work_email, ph_no, services, expense_image, expense_group, payment_type, email_template, image_file } = body
        let newCompany = { company_name, employee_limit, work_email, ph_no, services, expense_group, expense_image, payment_type, email_template, image_file }
        axios.post(`https://mr-expense-backend.herokuapp.com/admin/edit_company?_id=${id}`, newCompany, header)
            .then(resp => {
                getCompanieslist()
                dispatch({
                    type: EDIT_COMPANY,
                    payload: resp.data
                })
            }).catch(err => console.log(err)
            )
    }
}