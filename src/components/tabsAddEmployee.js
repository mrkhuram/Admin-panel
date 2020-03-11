import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { addNewEmployee } from '../redux/actions/employeeAction'
import Toast from 'light-toast';




class AddEmployeeForm extends React.Component {


    state = {
        activeTab: '1',
        start_date: new Date(),
        personal_information: []
    }

    toggle = tab => {
        if (this.state.activeTab !== tab) this.setState({ activeTab: tab })
    }


    onChangeHandler = e => {
        // console.log(e.target.value);

        this.setState({

            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        // console.log(date);

        this.setState({
            start_date: date
        })
    }

    // onBlurHandler = (e)=>{
    //     let name = e.target.name
    //     let value = e.target.value
    //     let obj
    //     if(value){

    //          obj = {"name": name ,"value": value}
    //          this.state.personal_information.push(obj)
    //     }

    //     console.log(this.state.personal_information);

    // }
    onSubmit = (e) => {
        e.preventDefault()

        if (this.state.email && this.state.password) {
            this.props.addNewEmp(this.state)
            this.props.close()
        } else {

            Toast.fail("Email and Password Can't be Empty...!!", 2000, () => {

            });
        }


    }

    render() {



        return (
            <div>
                <Nav tabs
                    style={{
                        marginBottom: 20
                    }}
                >

                    <NavItem>
                        <NavLink
                            className={this.state.activeTab == '1' ? 'activeTab' : 'noneActiveTab'}
                            onClick={() => { this.toggle('1'); }}
                            style={{
                                margin: 0,
                                marginTop: 10,
                                color: "#5a5a5a",
                                fontWeight: "normal",
                                cursor: 'pointer'
                            }}
                        >
                            <span

                            >Employee Detail</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={this.activeTab == '2' ? 'activeTab' : 'noneActiveTab'}
                            onClick={() => { this.toggle('2'); }}
                            style={{
                                margin: 0,
                                marginTop: 10,
                                color: "#5a5a5a",
                                fontWeight: "normal",
                                cursor: 'pointer'

                            }}
                        >
                            Personal Detail
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12" md='6'>
                                <form encType="multipart/form-data">
                                    <div class="form-group">
                                        <label for="pwd">Firt Name</label>
                                        <input type="text" class="form-control" name="first_name" onChange={this.onChangeHandler} />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Position</label>
                                        <input type="text" class="form-control" name="position" onChange={this.onChangeHandler} />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Work Email</label>
                                        <input type="email" class="form-control" name="email" onChange={this.onChangeHandler} />

                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">Work Phone</label>

                                        <IntlTelInput
                                            containerClassName="intl-tel-input"
                                            inputClassName="form-control"
                                            style={{
                                                width: "100%",

                                            }}
                                            ref='phone'
                                            onSelectFlag={(num, country) => {
                                                console.log('onSelectFlag', country);
                                            }}
                                            onPhoneNumberChange={
                                                (status, value, countryData, number, id) => {
                                                    console.log('onPhoneNumberChange value', value);
                                                    let newPhn = value.replace(/\s+/g, "")
                                                    this.setState({ ph_no: newPhn })
                                                    console.log('onPhoneNumberChange number', newPhn);


                                                }}

                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Profile Picture</label>
                                        <input type="file" class="form-control" name="dp_active_file"
                                        // onChange={this.onChangeHandler}
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">Team</label>
                                        <input type="text" class="form-control" name="" onChange={this.onChangeHandler} />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Location</label>
                                        <input type="text" class="form-control" name="location" onChange={this.onChangeHandler} />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Driving License</label>
                                        <input type="text" class="form-control" name="driving_license" onChange={this.onChangeHandler} />
                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">LinkedIn</label>
                                        <input type="text" class="form-control" name="linkedIn" onChange={this.onChangeHandler} />
                                    </div>


                                </form>

                            </Col>
                            <Col sm="12" md='6'>
                                <form>
                                    <div class="form-group">
                                        <label for="pwd">Last Name</label>
                                        <input type="text" class="form-control" name="last_name" onChange={this.onChangeHandler} />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Title</label>
                                        <input type="text" class="form-control" name="title" onChange={this.onChangeHandler} />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Starting Date</label>

                                        <DatePicker
                                            selected={this.state.start_date}
                                            onChange={this.onChangeDate}
                                            style={{
                                                width: '100%'
                                            }}
                                            name="starting_date"
                                        />

                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Employee Status</label>
                                        <select class="form-control" name='employee_status' onChange={this.onChangeHandler}>
                                            <option value="">Select Employee Status</option>

                                            <option value="full_time">Full Time</option>
                                            <option value="part_time">Part Time</option>
                                            <option value="contract">Contract</option>
                                            <option value="intern">Intern</option>


                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Direct Manager</label>
                                        <input type="text" class="form-control" name="direct_manager" onChange={this.onChangeHandler} />
                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">Public Holiday Group</label>
                                        <input type="text" class="form-control" name="public_holiday_group" onChange={this.onChangeHandler} />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Access Level</label>
                                        <select class="form-control" name='access_level' onChange={this.onChangeHandler}>
                                            <option value="">Select Access Level</option>

                                            <option value="employee">Employee</option>
                                            <option value="accountatn">Accountant</option>
                                            <option value="admirative">Admirative</option>



                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">Employee No.</label>
                                        <input type="text" class="form-control" name="employee_number" onChange={this.onChangeHandler} />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Skype</label>
                                        <input type="text" class="form-control" name="skype" onChange={this.onChangeHandler} />
                                    </div>



                                </form>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12" md='6'>
                                <form>
                                    <div class="form-group">
                                        <label for="pwd">Personal Email</label>
                                        <input type="email" class="form-control" name="personal_email" onChange={this.onChangeHandler}

                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Nationality</label>
                                        <input type="text" class="form-control" name="nationality" onChange={this.onChangeHandler}

                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Street 1</label>
                                        <input type="text" class="form-control" name="street1" onChange={this.onChangeHandler}

                                        />

                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">City</label>
                                        <input type="text" class="form-control" name="city" onChange={this.onChangeHandler}

                                        />

                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Postal Code</label>
                                        <input type="text" class="form-control" name="postal_code" onChange={this.onChangeHandler}

                                        />

                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">Set a Password</label>
                                        <input type="password" class="form-control" name="password" onChange={this.onChangeHandler}

                                        />

                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Gender</label>
                                        <select class="form-control" name='gender' onChange={this.onChangeHandler}

                                        >
                                            <option value="">Select Gender</option>

                                            <option value="male">Male</option>
                                            <option value="female">Female</option>



                                        </select>
                                    </div>



                                </form>

                            </Col>
                            <Col sm="12" md='6'>
                                <form>
                                    <div class="form-group">
                                        <label for="pwd">Home Phone</label>

                                        <IntlTelInput
                                            containerClassName="intl-tel-input"
                                            inputClassName="form-control"
                                            style={{
                                                width: "100%",
                                                //  marginBottom: 10, marginLeft: 15, zIndex: 5 
                                            }}
                                            ref='phone'
                                            onSelectFlag={(num, country) => {
                                                console.log('onSelectFlag', country);
                                            }}
                                            onPhoneNumberChange={
                                                (status, value, countryData, number, id) => {
                                                    console.log('onPhoneNumberChange value', value);
                                                    let newPhn = value.replace(/\s+/g, "")
                                                    this.setState({ home_phone: newPhn })


                                                    console.log('onPhoneNumberChange number', newPhn);


                                                }}
                                        // onPhoneNumberBlur={(status, value, countryData, number, id) => {
                                        //     let newPhn = value.replace(/\s+/g, "")
                                        //     this.state.personal_information.push({home_phone: newPhn})


                                        // }}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Mobile Phone</label>

                                        <IntlTelInput
                                            containerClassName="intl-tel-input"
                                            inputClassName="form-control"
                                            style={{
                                                width: "100%",
                                                //  marginBottom: 10, marginLeft: 15, zIndex: 5 
                                            }}
                                            ref='phone'
                                            onSelectFlag={(num, country) => {
                                                console.log('onSelectFlag', country);
                                            }}
                                            onPhoneNumberChange={
                                                (status, value, countryData, number, id) => {
                                                    console.log('onPhoneNumberChange value', value);
                                                    let newPhn = value.replace(/\s+/g, "")
                                                    this.setState({ mobile_phone: newPhn })

                                                    console.log('onPhoneNumberChange number', newPhn);


                                                }}
                                        // onPhoneNumberBlur={(status, value, countryData, number, id) => {
                                        //     let newPhn = value.replace(/\s+/g, "")
                                        //     this.state.personal_information.push({mobile_phone: newPhn})

                                        // }}
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">Street 2 </label>
                                        <input type="text" class="form-control" name="street2" onChange={this.onChangeHandler}

                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">State </label>
                                        <input type="text" class="form-control" name="state" onChange={this.onChangeHandler}

                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Country </label>
                                        <input type="text" class="form-control" name="country" onChange={this.onChangeHandler}

                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">Starting Date</label>

                                        <DatePicker
                                            selected={this.state.start_date}
                                            onChange={this.onChangeDate}
                                            style={{
                                                width: '100%'
                                            }}
                                            name="starting_date"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Marital Status</label>
                                        <select class="form-control" name='meterial_status' onChange={this.onChangeHandler}

                                        >
                                            <option value="">Select Marital Status</option>

                                            <option value="single">Single</option>
                                            <option value="married">Married</option>
                                            <option value="divorced">Divorced</option>
                                            <option value="widowed">Widowed</option>

                                        </select>
                                    </div>


                                    <button type="submit" class="btn btn-default"
                                        style={{ marginTop: 10, float: 'right' }}
                                        onClick={this.onSubmit}
                                    >Save</button>


                                </form>

                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

let mapStateToProps = (store) => {

    return {
        admin: store.AdminReducer
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        addNewEmp: body => {
            dispatch(addNewEmployee(body))
        },
        // deleteGroup: body =>{   
        //     dispatch(deleteExpenseGroup(body))
        // }
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddEmployeeForm));
// export let expenseGroupErr, addExpenseGroupSuccess, getExpenseGroup