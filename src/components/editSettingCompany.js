import React from 'react'

import { updateUser } from '../redux/actions/authAction'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';


class EditSettingCompany extends React.Component {


    constructor(props) {
        super(props)
        // this.notiErr()
        pwSuccess = () => {
            this.notifySucc()
        }
        pwSuccess()
        pwErr = () => {
            this.pwLengthErr()
        }
        pwErr()
    }
    state = {
        email: this.props.authDetail.userDetail.email,
        password: '',
        confirm_password: ''
    }


    onChangeHandler = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitHandler = (e) => {
        e.preventDefault()
        let { password, confirm_password } = this.state

        if (password === confirm_password) {
            this.props.updatePassword(this.state)
            return true
        }
        this.notifyErr()
    }


    notifyErr = () => toast.error("Error! Your Password Didn't match..!!", { autoClose: 2000 })
    notifySucc = () => toast.success("Congrats! Your Password Successfully changed..!!", { autoClose: 2000 })
    pwLengthErr = () => toast.error("Error! Minimun Characters 6..!!", { autoClose: 2000 })

    render() {
        return (
            <>
                <div className="content-wrapper"
                    style={{ marginTop: 60 }}
                >
                    <ToastContainer position="top-right" style={{ zIndex: 1111 }} />

                    <div id="order_preview" className="wow fadeInUp content_box settingDiv"
                        style={{ visibility: "visible", animationName: "fadeInUp", margin: 'auto' }}>
                        <div className="row table-header">
                            <div className="col-xs-12 col-md-12">
                                <h2 className="section-title">Edit Settings</h2>
                            </div>
                        </div>
                        <div className="row"
                            style={{
                                margin: 'auto'
                            }}
                        >
                            <div className="col-xs-12 col-md-12">
                                <form>
                                    <div className="form-group">
                                        <label for="pwd">User Name:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={this.props.authDetail.userDetail.email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Old Password:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="old_password"
                                            onChange={this.onChangeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">New Password:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            onChange={this.onChangeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Confirm New Password:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="confirm_password"
                                            onChange={this.onChangeHandler}
                                        />
                                    </div>
                                    <label >{this.state.msg}</label>
                                    <button type="submit" className="btn btn-default"
                                        style={{ float: 'right' }}
                                        onClick={this.submitHandler}
                                    >Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


let mapStateToProps = (store) => {
    return {
        authDetail: store.auth
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        updatePassword: (data) => {
            dispatch(updateUser(data))
        },
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditSettingCompany));
export let pwSuccess, pwErr
