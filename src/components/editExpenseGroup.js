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




    constructor(props){
        super(props)

        this.state = props.location.expenseItem.expense
    }


    expense = null
    componentDidMount() {
      console.log(this.props.location.expenseItem.expense);
      this.expense = this.props.location.expenseItem.expense
     
    this.forceUpdate()
  
  
  
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
                                            <input type="text" class="form-control" name="expense_name"
                                                value={this.state ? this.state.expense_name : ''}
                                                onChange={this.onChangeHandler}
                                                style={{
                                                    width: '60%'
                                                }} />
                                        </div>
                                        
                                        <div class="form-group">

                                            <table class="table table-bordered">
                                                <tbody>
                                                  
                                                    {this.state ? this.state.expense_type.map((item, index) => {
                                                            // console.log(item);
                                                            
                                                        return <>
                                                       
                                                    
                                                        
                                                        <div className="form-group"
                                                        
                                                        >
                                                        
                                                             <label for="pwd">

                                                                Describe Expense

                                                                </label>
                                                           
                                                            <textarea type="text" className="form-control"
                                                                name={item}
                                                                onChange={this.onChangeHandler}

                                                            >
                                                            </textarea>
                                                        </div>
                                                
                                                        </>
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