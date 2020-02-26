import React from 'react'
import { Link } from 'react-router-dom'


import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import {
    Row,
    Col,
    Container
  } from 'reactstrap'



class NewCompany extends React.Component {

    state = {
      title: '',
      to_client: null,
      to_adviser: null,
      description: '',
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
                        <input type="text" class="form-control" name="companyName" 
                            value='John'
                        onChange={this.onChangeHandler} />
                      </div>
                      <div class="form-group">
                        <label for="pwd">Work Email</label>
                        <input type="text" class="form-control" value='work@gmail.com' name="workEmail" onChange={this.onChangeHandler} />
                      </div>
                      <div class="form-group">
                        <label for="pwd">Phone</label>
                        <input type="text" class="form-control" value='+9827635267' name="phone" onChange={this.onChangeHandler} />
                      {/* <IntlTelInput
                        containerClassName="intl-tel-input"
                        inputClassName="form-control"
                        style={{
                          width: "100%"
                        }}
                      /> */}
                      </div>
  
                      <div class="form-group">
                        <label for="pwd">Employee Limit</label>
                        <input type="number" class="form-control" value='13' name="limit" onChange={this.onChangeHandler} />
                      </div>
  
                      <div class="form-group">
                        <label for="pwd">Payment Type</label>
                        <select class="form-control"  name='to_client' onChange={this.onTo}>
                        <option value="client">Select Payment Type</option>
  
                          <option value="client" selected> Cheque</option>
                          <option value="reader" >Credit Card</option>
                        </select>
                      </div>
                     
                    
                    </form>
                  </Col>
  
                  <Col xs='12' md='5'>
                    <form>
                    <div class="form-group">
                        <label for="pwd">Expense Group</label>
                        <select class="form-control" value='' name='to_client' onChange={this.onTo}>
                        <option value="client">Select Expense Group</option>
  
                          <option value="client" selected>1</option>
                          <option value="reader">2</option>
                          <option value="reader">3</option>
  
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="pwd">Expense Image</label>
                        <select class="form-control" value='' name='to_client' onChange={this.onTo}>
                        <option value="client">Select Expense Image</option>
  
                          <option value="client">Yes</option>
                          <option value="reader" selected>No</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="pwd">Email Templates</label>
                        <select class="form-control" value='' name='to_client' onChange={this.onTo}>
                        <option value="client">Select Email Templates</option>
  
                          <option value="client">1</option>
                          <option value="reader" selected>2</option>
                          <option value="reader">3</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="pwd">Upload Logo</label>
                        <input type="file" class="form-control"  name="phone" onChange={this.onChangeHandler} />
                      </div>
                      {/* <div class="form-group">
                        <label for="pwd">Publish</label>
                        <input type="file" class="form-control" value='' name="phone" onChange={this.onChangeHandler} />
                      </div> */}
                     
                      <div class="form-group"
                        style={{
                          marginTop: 50
                        }}
                      >
                        <label for="pwd">Services</label>
                        <label class="switch"
                        style={{marginLeft: 10}}
                        >
                          <input type="checkbox"/>
                          <span class="checkbox_slider round"></span>
                        </label>
                      </div>
                      <button type="submit" class="btn btn-default" onClick={this.onSubmit}
                      style={{marginTop: 10, float: 'right',padding: '8px 16px',fontSize: 16}}
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
export default NewCompany