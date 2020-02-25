import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';




const AddEmployee = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const onChangeHandler = () => {

    }

    const [startDate, setStartDate] = useState(new Date())


    const handleChange = date => {
        setStartDate(date)
    };

    const nextMove = e => {
        e.preventDefault()
            toggle('2')
        
    }
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Employee Detail
          </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Personal Detail
          </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12" md='6'>
                            <form>
                                <div class="form-group">
                                    <label for="pwd">Firt Name</label>
                                    <input type="text" class="form-control" name="companyName" onChange={onChangeHandler} />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Position</label>
                                    <input type="text" class="form-control" name="workEmail" onChange={onChangeHandler} />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Work Email</label>
                                    <input type="text" class="form-control" name="phone" onChange={onChangeHandler} />

                                </div>

                                <div class="form-group">
                                    <label for="pwd">Work Phone</label>
                                    {/* <input type="text" class="form-control" name="phone" onChange={this.onChangeHandler} /> */}
                                    <IntlTelInput
                                        containerClassName="intl-tel-input"
                                        inputClassName="form-control"
                                        style={{
                                            width: "100%"
                                        }}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Profile Picture</label>
                                    <input type="file" class="form-control" name="limit" onChange={onChangeHandler} />
                                </div>

                                <div class="form-group">
                                    <label for="pwd">Team</label>
                                    <input type="text" class="form-control" name="limit" onChange={onChangeHandler} />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Location</label>
                                    <input type="text" class="form-control" name="limit" onChange={onChangeHandler} />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Driving License</label>
                                    <input type="text" class="form-control" name="limit" onChange={onChangeHandler} />
                                </div>

                                <div class="form-group">
                                    <label for="pwd">LinkedIn</label>
                                    <input type="text" class="form-control" name="limit" onChange={onChangeHandler} />
                                </div>


                            </form>

                        </Col>
                        <Col sm="12" md='6'>
                            <form>
                                <div class="form-group">
                                    <label for="pwd">Last Name</label>
                                    <input type="text" class="form-control" name="companyName" onChange={onChangeHandler} />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Title</label>
                                    <input type="text" class="form-control" name="workEmail" onChange={onChangeHandler} />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Starting Date</label>

                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%'
                                        }}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Employee Status</label>
                                    <select class="form-control" name='to_client' onChange={onChangeHandler}>
                                        <option value="client">Select Employee Status</option>

                                        <option value="client">Full Time</option>
                                        <option value="reader">Part Time</option>
                                        <option value="reader">Contract</option>
                                        <option value="reader">Intern</option>


                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Direct Manager</label>
                                    <input type="text" class="form-control" name="limit" onChange={onChangeHandler} />
                                </div>

                                <div class="form-group">
                                    <label for="pwd">Public Holiday Group</label>
                                    <input type="text" class="form-control" name="limit" onChange={onChangeHandler} />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Access Level</label>
                                    <select class="form-control" name='to_client' onChange={onChangeHandler}>
                                        <option value="client">Select Access Level</option>

                                        <option value="client">Employee</option>
                                        <option value="reader">Accountant</option>
                                        <option value="reader">Admirative</option>
                                        {/* <option value="reader">Intern</option> */}


                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="pwd">Employee No.</label>
                                    <input type="text" class="form-control" name="limit" onChange={onChangeHandler} />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Skype</label>
                                    <input type="text" class="form-control" name="limit" onChange={onChangeHandler} />
                                </div>

                                <button type="submit" class="btn btn-default"
                                    style={{ marginTop: 10, float: 'right' }}
                                    onClick={nextMove}
                                >Next</button>


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
                                    <input type="text" class="form-control" name="companyName" onChange={onChangeHandler} />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Nationality</label>
                                    <input type="text" class="form-control" name="workEmail" onChange={onChangeHandler} />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Street 1</label>
                                    <input type="text" class="form-control" name="phone" onChange={onChangeHandler} />

                                </div>

                                <div class="form-group">
                                    <label for="pwd">City</label>
                                    <input type="text" class="form-control" name="phone" onChange={onChangeHandler} />

                                </div>
                                <div class="form-group">
                                    <label for="pwd">Post Code</label>
                                    <input type="text" class="form-control" name="phone" onChange={onChangeHandler} />

                                </div>

                                <div class="form-group">
                                    <label for="pwd">Work Phone</label>
                                    {/* <input type="text" class="form-control" name="phone" onChange={this.onChangeHandler} /> */}
                                    <IntlTelInput
                                        containerClassName="intl-tel-input"
                                        inputClassName="form-control"
                                        style={{
                                            width: "100%"
                                        }}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Gender</label>
                                    <select class="form-control" name='to_client' onChange={onChangeHandler}>
                                        <option value="client">Select Gender</option>

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
                                    {/* <input type="text" class="form-control" name="phone" onChange={this.onChangeHandler} /> */}
                                    <IntlTelInput
                                        containerClassName="intl-tel-input"
                                        inputClassName="form-control"
                                        style={{
                                            width: "100%"
                                        }}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Mobile Phone</label>
                                    {/* <input type="text" class="form-control" name="phone" onChange={this.onChangeHandler} /> */}
                                    <IntlTelInput
                                        containerClassName="intl-tel-input"
                                        inputClassName="form-control"
                                        style={{
                                            width: "100%"
                                        }}
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="pwd">Street 2 </label>
                                    <input type="text" class="form-control" name="workEmail" onChange={onChangeHandler} />
                                </div>

                                <div class="form-group">
                                    <label for="pwd">State </label>
                                    <input type="text" class="form-control" name="workEmail" onChange={onChangeHandler} />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Country </label>
                                    <input type="text" class="form-control" name="workEmail" onChange={onChangeHandler} />
                                </div>

                                <div class="form-group">
                                    <label for="pwd">Starting Date</label>

                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%'
                                        }}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Marital Status</label>
                                    <select class="form-control" name='to_client' onChange={onChangeHandler}>
                                        <option value="client">Select Marital Status</option>

                                        <option value="male">Single</option>
                                        <option value="female">Married</option>
                                        <option value="female">Divorced</option>
                                        <option value="female">Widowed</option>

                                    </select>
                                </div>
                                

                                <button type="submit" class="btn btn-default"
                                    style={{ marginTop: 10, float: 'right' }}
                                    // onClick={nextMove}   
                                >Submit</button>


                            </form>

                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default AddEmployee