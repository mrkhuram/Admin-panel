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



class EditExpenseGroup extends React.Component {

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

    }
    render() {
        return (
            <>
                <div class="content-wrapper">
                    <div id="order_preview" class="wow fadeInUp content_box"
                        style={{ visibility: 'visible', animationName: "fadeInUp",width: "70%",margin: 'auto' }}>
                        <Row className="table-header"
                        style={{marginLeft: 40}}
                        >

                            <Col xs='12' md='8'>
                                <h2 class="section-title">Edit Expense Group 
                  
                                </h2>
                            </Col>
                        </Row>
                        <div class="row"
                        style={{marginLeft: 40}}
                        >
                            <Row >


                                <Col xs='12' md='10'>
                                    <form>
                                        <div class="form-group">
                                            <label for="pwd">Group Name</label>
                                            <input type="text" class="form-control" name="companyName"
                                                value='Faisalabad'
                                                onChange={this.onChangeHandler}
                                                style={{

                                                    width: '60%'
                                                }} />
                                        </div>
                                        
                                        <div class="form-group">

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
                                                                 

                                                                >
                                                                </textarea>
                                                            </div>
                                                        </tr>
                                                    }) : <></>}
                                                </tbody>
                                            </table>
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
export default EditExpenseGroup