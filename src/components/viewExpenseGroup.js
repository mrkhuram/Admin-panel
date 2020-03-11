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

import { editPaymentType } from '../redux/actions/paymentTypeAction'
import axios from 'axios'

class ViewExpenseGroup extends React.Component {


    constructor(props) {
        super(props)
        console.log(props.item);

        // this.setState({
        //     item: props.item
        // })
        

    }


    // componentDidMount(){
    //     this.setState({
    //         item: this.props.item
    //     })
    // }

    state = {
        item: null
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
        // let item = this.props.item

        return (
            <>

                <div class="content-wrapper"
                    style={{
                        padding: 0,
                        overflowY: 'auto'
                    }}
                >
                    <div id="order_preview" class="wow fadeInUp content_box"
                        style={{ visibility: 'visible', animationName: "fadeInUp", padding: "35px 50px" }}>
                        <p
                            style={{
                                float: 'right',
                                marginTop: '-20',
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                this.handleClose('open')
                            }}
                        >X</p>
                        <div class="row table-header">
                            <div class="col-xs-12 col-md-6">
                                <h2 class="section-title">Expense Details</h2>
                            </div>
                        </div>
                        <hr style={{ marginTop: 10, borderTop: "1px solid #909090", width: "94%", marginLeft: 15 }} />


                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th class="active" width="80">No.</th>
                                            <th class="active" width="280">Name</th>
                                            {/* <th class="active" width="130">Amount</th> */}

                                        </tr>
                                        {
                                            this.props.item ?
                                            this.props.item.expense_type.map((item, index) => {
                                                    console.log(item);

                                                    return <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{item}</td>



                                                    </tr>
                                                }) 
                                                : <></>
                                                }
                                    </tbody>
                                </table>
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
        admin: store.AdminReducer
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        // editType: (body,id) =>{
        //     dispatch(ViewExpenseGroup(body,id))
        // },

    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewExpenseGroup));
// export let paymentTypeErr, addNewPaymentType,getPaymentType
