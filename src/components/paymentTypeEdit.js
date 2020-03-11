import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'


import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import {
    Row,
    Col,
    Container
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';

import {editPaymentType } from '../redux/actions/paymentTypeAction'
import axios from 'axios'

class EditPaymentType extends React.Component {


    constructor(props){
        super(props)
      
        
    }

    state = {
        
    }

    onChangeHandler = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onTo = (e) => {
        if (e.target.value === 'client') {
            this.setState({
                to_client: true,
                to_adviser: false
            })
        } else {
            this.setState({
                to_client: false,
                to_adviser: true
            })
        }
    }
    onSubmit = (e) => {
        e.preventDefault()

        this.props.editType(this.state.payment_type, this.props.id)

        this.props.handleClose('edit')

    }
    render() {
        return (
            <>

                <div class="content-wrapper newCompanyDiv"
                    style={{
                        padddingBottom: 0,
                        padding: 0,

                    }}

                >
                    <p
                        style={{
                            float: 'right',
                            marginTop: 10,
                            cursor: 'pointer',
                            marginRight: 20
                        }}
                        onClick={() => {
                            this.props.handleClose('edit')
                        }}
                    >X</p>
                    <div id="order_preview" class="wow content_box"
                        style={{
                            visibility: 'visible', animationName: "fadeInUp",

                            padding: 20
                        }}>
                        <Row className="table-header"

                        >

                            <Col xs='12' md='8'>
                                <h2 class="section-title">Edit Payment Type

                                </h2>
                            </Col>
                        </Row>
                        <div class="row"
                            style={{}}
                        >
                            <Row >


                                <Col xs='12' md='10'>
                                    <form>

                                        <div class="form-group">
                                            <label for="pwd">Payment Type</label>
                                            <input type="text" className="form-control"
                                                name="payment_type"

                                                style={{
                                                    width: "100%",
                                                }}
                                                onChange={this.onChangeHandler}
                                            />
                                            
                                        </div>



                                    </form>
                                </Col>



                            </Row>



                            <button type="submit" className="btn btn-default noBtn"
                                style={{
                                    margin: 'auto', padding: "10px 44px", float: 'right',
                                    marginRight: 50
                                }}
                                onClick={this.onSubmit}
                            >Save</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

let mapStateToProps = (store) => {

    return {
        admin: store.AdminReducer
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        editType: (body,id) =>{
            dispatch(editPaymentType(body,id))
        },
       
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPaymentType));
// export let paymentTypeErr, addNewPaymentType,getPaymentType
