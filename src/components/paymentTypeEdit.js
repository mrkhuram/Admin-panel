import React from 'react'
import { Link } from 'react-router-dom'


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



class EditPaymentType extends React.Component {

    state = {
        title: '',
        to_client: null,
        to_adviser: null,
        description: '',
        coupons: [
            {
                group_name: 'Bike',
                expenseCategory: 'Maintanence'
            },
            {
                group_name: 'Car',
                expenseCategory: 'Maintanence'
            },
            {
                group_name: 'APV',
                expenseCategory: 'Maintanence'
            },
        ],
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
        // this.props.AddAnnouncement(this.state)

    }
    render() {
        return (
            <>

                <div class="content-wrapper"
                    style={{
                        padddingBottom: 0,
                        padding: 0,
                        width: 500
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
                    <div id="order_preview" class="wow fadeInUp content_box"
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
                                        {/* <div class="form-group">
                                            <label for="pwd">Payment Name</label>
                                            <input type="text" class="form-control" name="companyName"
                                                value='Faisalabad'
                                                onChange={this.onChangeHandler}
                                                style={{
                                                    width: '60%'
                                                }} />
                                        </div> */}

                                        {/* <div class="form-group">

                                            <table class="table table-bordered">
                                                <tbody>

                                                    {this.state.coupons ? this.state.coupons.map((item, index) => {

                                                        return <tr>

                                                            <div className="form-group"

                                                            >

                                                                <label for="pwd">

                                                                    Describe Expense

                                                                </label>

                                                                <textarea type="text" className="form-control"
                                                                    value={item.group_name}
                                                                    data-id={index}

                                                                // placeholder="Descripe Expense"

                                                                >
                                                                </textarea>
                                                            </div>
                                                        </tr>
                                                    }) : <></>}
                                                </tbody>
                                            </table>
                                        </div> */}
                                        <div class="form-group">
                                            <label for="pwd">Payment Type</label>
                                            <select class="form-control" name='to_client'
                                                onChange={this.onChangeHandler}
                                            >
                                                <option value="client">Select Payment Type</option>

                                                <option value="client" selected>Cheque</option>
                                                <option value="reader">Cash</option>
                                                <option value="reader">Contract</option>
                                                <option value="reader">Intern</option>


                                            </select>
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
export default EditPaymentType