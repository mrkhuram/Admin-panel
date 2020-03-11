import axios from 'axios'
import {
    LOGIN_DETAIL,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    TOKEN,
    PROFILE,
    LOGOUT,
    PASSWORD_CONFIRMED,
    PASSWORD_CONFIRMED_ERROR,
    PASSWORD_UPDATED_ERROR,
    PASSWORD_UPDATED,
} from '../constat'
import { setData } from '../../App'
import { getData } from '../../components/admin'
import { passwordDidntMatch } from '../../components/settingCompany'
import { pwSuccess } from '../../components/editSettingCompany'
import { pwErr } from '../../components/editSettingCompany'
import { errFunction } from '../../components/signIn'
// import {passwordDidntMatch} from '../../components/pwSetting'


// user login 
import jwt_decode from 'jwt-decode';



let token = localStorage.getItem('token')


export function userAuth(body) {

    return dispatch => {

        // let token = localStorage.getItem('token')


        axios.post('https://mr-expense-backend.herokuapp.com/user/login', body)
            .then(resp => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: resp.data
                })
                getData()
            }
            )
            .catch(err =>{
                errFunction()
                
                dispatch({
                    type: LOGIN_FAILED,
                    payload: err
                })
            })


    }
}

export function getProfile() {

    return dispatch => {

        let token = localStorage.getItem('token')
        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get("https://mr-expense-backend.herokuapp.com/user/profile", header)
            .then(resp => {
                // console.log(resp);

                if (resp) {
                    dispatch({
                        type: PROFILE,
                        payload: resp.data
                    })
                }

            })

    };
}

export function logoutuser() {

    return dispatch => {

        let token = localStorage.getItem('token')
        localStorage.getItem('token')
        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get("https://mr-expense-backend.herokuapp.com/user/logout", header)
            .then(resp => {
                // console.log(resp);

                if (resp) {
                    dispatch({
                        type: LOGOUT,
                        payload: resp.data
                    })
                }

            })

    };
}





export function confirmPassword(body) {

    return dispatch => {

        // let token = localStorage.getItem('token')


        axios.post('https://mr-expense-backend.herokuapp.com/user/login', body)
            .then(resp => {
                dispatch({
                    type: PASSWORD_CONFIRMED,
                    payload: resp.data
                })

            }
            )
            .catch(err => {
                passwordDidntMatch("err")
                dispatch({
                    type: PASSWORD_CONFIRMED_ERROR
                })
            })


    }
}


export function updateUser(body) {

    return dispatch => {

        let token = localStorage.getItem('token')
        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                // "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        let device_token = '12345'
        let platform = 'windows'
        let { email, password, old_password } = body
        let newBody = { email, password, old_password, device_token, platform }
        axios.post('https://mr-expense-backend.herokuapp.com/user/change/password', newBody, header)
            .then(resp => {
                pwSuccess()
                dispatch({
                    type: PASSWORD_UPDATED,
                    payload: resp.data
                })

            }
            )
            .catch(err => {
                pwErr()
                dispatch({
                    type: PASSWORD_UPDATED_ERROR
                })
            })


    }
}