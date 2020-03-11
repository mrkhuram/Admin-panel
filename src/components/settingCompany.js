import React from 'react'
import history from './history/history'

import { confirmPassword } from '../redux/actions/authAction'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Toast from 'light-toast';


class SettingCompany extends React.Component {

    constructor(props){
        super(props)
        passwordDidntMatch = (parm) => {
            if(parm === "err"){
      
            Toast.fail('Wrong Password, Try Again.', 2000, () => {
      
            });
          }
          }
          passwordDidntMatch() 
    }

    state = {
        email: this.props.authDetail.userDetail.email,
        password: ''
    }


    componentDidUpdate() {
        return true
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitHandler = (e) => {
        e.preventDefault()
        if(this.state.password !== ''){
        this.props.confirmPasswordFirst(this.state)
        }else{
            Toast.fail('Password Required, Try Again.', 2000, () => {
      
            });
        }

    }


    
    

    // notifyErr = () => toast.error("Sorry your request didn't complete", { autoClose: 2000 })
    

    render() {
        return (
            <>

                <div className="content-wrapper"
                    style={{ marginTop: 60 }}
                >
                {/* <ToastContainer position="top-right"  style={{zIndex: 1111}}/> */}

                    <div id="order_preview" className="wow fadeInUp content_box settingDiv"
                        style={{ visibility: "visible", animationName: "fadeInUp", margin: 'auto' }}>
                        <div className="row table-header">
                            <div className="col-xs-12 col-md-12">
                                <h2 className="section-title">Confirm Password to Access</h2>
                            </div>
                        </div>
                        <div className="row"
                            style={{
                                margin: 'auto'
                            }}
                        >
                            <div className="col-xs-12 col-md-12">
                                <form onSubmit={this.confirmSetting}>
                                    <div className="form-group">
                                        <label for="pwd">User Name:</label>
                                        <input type="email" className="form-control" value={this.props.authDetail.userDetail.email} />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Password:</label>
                                        <input type="password" className="form-control" onChange={this.onChangeHandler} name='password' />
                                    </div>
                                    <div className="form-group"
                                        style={{
                                            textAlign: 'right',
                                            color: 'red'
                                        }}
                                    >
                                        {/* <label for="pwd">working {this.props.authDetail.message ? this.props.authDetail.message : null}</label> */}
                                    </div>

                                    <button type="submit" className="btn btn-default"
                                        style={{ float: 'right' }}
                                        onClick={this.submitHandler}
                                        // onClick={this.noti}
                                    >Confirm</button>
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
    console.log(store);

    return {
        authDetail: store.auth
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        confirmPasswordFirst: (data) => {
            dispatch(confirmPassword(data))
        },
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingCompany));
export let passwordDidntMatch