import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { createCompany } from '../redux/actions/companyAction'





import {
  Row,
  Col,
  Container
} from 'reactstrap'

class NewCompany extends React.Component {

  state = {
    ph_no: null
  }

  onChangeHandler = (e) => {

    if (e.target.name === "services" && e.target.value === "on") {
      this.setState({
        services: "true"
      })
      return true
    } else if (e.target.name === "services" && e.target.value === "off") {
      this.setState({
        services: "false"
      })
      return true
    }
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    

    this.props.create_company(this.state)
    

  }
  render() {
    return (
      <>
        <div class="content-wrapper">
          <div id="order_preview" class="wow fadeInUp content_box"
            style={{ visibility: 'visible', animationName: "fadeInUp" }}>
            <Row className="table-header">

              <Col xs='12' md='12'>
                <h2 class="section-title">New Company
                {/* <Link to='/'
                  class="btn btn-default pull-right"><i class="fa fa-chevron-left"></i> Back</Link> */}
                </h2>
              </Col>
            </Row>
            <div class="row">
              <Row>


                <Col xs='12' md='5'>
                  <form>
                    <div class="form-group">
                      <label for="pwd">Company Name</label>
                      <input type="text" class="form-control" name="company_name" onChange={this.onChangeHandler} />
                    </div>
                    <div class="form-group">
                      <label for="pwd">Work Email</label>
                      <input type="text" class="form-control" name="work_email" onChange={this.onChangeHandler} />
                    </div>
                    <div class="form-group">
                      <label for="pwd">Phone</label>
                      {/* <input type="text" class="form-control" name="phone" onChange={this.onChangeHandler} /> */}
                      {/* <IntlTelInput
                        containerClassName="intl-tel-input"
                        inputClassName="form-control"
                        style={{
                          width: "100%"
                        }}
                        name='ph_no'
                        onPhoneNumberChange={this.onChangeHandler}
                      // onChange={this.onChangeHandler}
                      /> */}

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
                            this.setState({ ph_no: newPhn})
                            console.log('onPhoneNumberChange number', newPhn);


                          }}
                        onPhoneNumberBlur={(status, value, countryData, number, id) => {
                          // console.log('onPhoneNumberBlur value', value);
                          // console.log('onPhoneNumberBlur number', number);
                          // console.log(this.state);


                        }}
                      />
                    </div>

                    <div class="form-group">
                      <label for="pwd">Employee Limit</label>
                      <input type="number" class="form-control" name="employee_limit" onChange={this.onChangeHandler} />
                    </div>

                    <div class="form-group">
                      <label for="pwd">Payment Type</label>
                      <input type="number" class="form-control" name="payment_type" onChange={this.onChangeHandler} />
                      {/* <select class="form-control" name='payment_type' onChange={this.onChangeHandler}>
                        <option value="" >Select Payment Type</option>

                        <option value="12">Cheque</option>
                        <option value="15">Credit Card</option>
                      </select> */}
                    </div>


                  </form>
                </Col>

                <Col xs='12' md='5'>
                  <form>
                    <div class="form-group">
                      <label for="pwd">Expense Group</label>
                      <input type="number" class="form-control" name="expense_group" onChange={this.onChangeHandler} />

                      {/* <select class="form-control" name='expense_group' onChange={this.onChangeHandler}>
                        <option value="">Select Expense Group</option>

                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>

                      </select> */}
                    </div>
                    <div class="form-group">
                      <label for="pwd">Expense Image</label>
                      <select class="form-control" name='expense_image' onChange={this.onChangeHandler}>
                        <option value="">Select Expense Image</option>

                        <option value="yes">Yes</option>
                        <option value="true">No</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="pwd">Email Templates</label>
                      <select class="form-control" name='email_template' onChange={this.onChangeHandler}>
                        <option value="">Select Email Templates</option>

                        <option value="new">new</option>
                        <option value="old">old</option>
                        <option value="demo">demo</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="pwd">Upload Logo</label>
                      <input type="file" class="form-control" name="image_file" onChange={this.onChangeHandler} />
                    </div>

                    <div class="form-group"
                      style={{
                        marginTop: 50
                      }}
                    >
                      <label for="pwd">Services</label>
                      <label class="switch"
                        style={{ marginLeft: 10 }}
                      >
                        <input type="checkbox" name='services' onChange={this.onChangeHandler} />
                        <span class="checkbox_slider round"></span>
                      </label>
                    </div>
                    <label for="pwd">{this.props.com.msg}</label>

                    <button type="submit" class="btn btn-default" onClick={this.onSubmit}
                      style={{ marginTop: 10, float: 'right', padding: '8px 16px', fontSize: 16 }}
                    >Create</button>
                  </form>
                </Col>

              </Row>
            </div>
          </div>
        </div>
      </>
    )
  }
}

let mapStateToProps = (store) => {
  return {
    admin: store.AdminReducer,
    com: store.companyReducer
  }
}

let mapDispatchToProps = (dispatch) => {

  return ({
    create_company: (data) => {
      dispatch(createCompany(data))
    },
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCompany));


