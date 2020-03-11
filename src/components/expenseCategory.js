import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'


import {addExpenseGroup, deleteExpenseGroup} from '../redux/actions/paymentTypeAction'
import ViewExpenseGroup from './viewExpenseGroup';
import CircularProgress from '@material-ui/core/CircularProgress';
import Toast from 'light-toast';



class ExpenseGroup extends React.Component {
    constructor(props) {
        super(props)
        
         getExpenseGroup = ()=>{

            let header = { 
                headers: {
                    'Content-Type': 'application/json',
                    "x-sh-auth" : localStorage.getItem('token')
                }
            }
            axios.get('https://mr-expense-backend.herokuapp.com/admin/list_expense',header)
            .then(res =>{
                console.log(res.data);
                
                this.setState({
                    allPayment: res.data.expense_group,
                    paymentList: res.data.expense_group
                })
                // console.log(this.state.allPayment[4].expense_type);
                
            })
        }


        // addExpenseGroupSuccess = ()=>{
        //     this.notifySuccess()
        //     this.handleClose('openPop')

        // }
        // expenseGroupErr =()=>{
        //     this.notifyErr()
        //     this.handleClose('openPop')

        // }




        expenseGroupAdded = (parm) => {
            if(parm === "success"){
      
              Toast.success('Successfully Created...!!', 2000, () => {
                
              });
            } 
          }
          expenseGroupFail = (parm) => {
            if(parm === "err"){
      
            Toast.fail('Email Already in use, Try Again.', 2000, () => {
      
            });
          }
          }
          expenseGroupAdded()
          expenseGroupFail()
        // expenseGroupErr()
        // addExpenseGroupSuccess()
        getExpenseGroup()
    }





    state = {
        open: false,
        openPop: false,
        delete: false,
        arr: [
            {
                groupName: '',
                introExpense: ''

            },
        ],
        expense_type: [],
        id: 2
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }



   
    handleClickOpen = (element) => {
        this.setState({
            [element]: true
        })
    };
    handleClose = (element) => {
        this.setState({
            [element]: false
        })
    };



    addNewField = () => {
        
        this.setState({
            arr: [...this.state.arr, { eName: '', eAmount: '' }]
        })

    }

    // notifyErr = () => toast.error("Sorry your request didn't complete , Try Again.", { autoClose: 2000 })
    // notifySuccess = () => toast.success("Successfully Added", { autoClose: 2000 })



    onChangeHandler = (e, ind) => {
        // console.log('working');

        if (["eName", "eAmount"].includes(e.target.className)) {
            let arr = [...this.state.arr]
            arr[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({ arr }, () => {
                console.log((this.state.arr));
            })
        }
        else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }
    
    onBlurHandler =(e)=>{
    let name =  e.target.name
    let value =  e.target.value

    this.state.expense_type.push(value)
    console.log(this.state.expense_type);
    

    }

    onSubmit = (eve) => {
        eve.preventDefault()
        console.log(this.state);
        let {expense_name,expense_type} = this.state
        let obj = {expense_name,expense_type}
        this.props.addNewExpenseGroup(obj)
        setTimeout(() => {
            this.handleClose('openPop')   
        });

    }

    expense_type = false

    searchingItem = []
    searchItem = (e)=>{

        let searchVal = e.target.value
        if(searchVal == ''){
            this.setState({
                paymentList: this.state.allPayment
            })
        }
        
        this.searchingItem = this.state.paymentList.filter((item)=>{
                                if(searchVal == item.expense_name){
                                        return item
                                        
                                    }
                                }
        )
        
        
        
    }
    searchBtn = (e)=>{
        e.preventDefault()

        
        if(this.searchingItem.length !== 0){

            this.setState({
                paymentList: this.searchingItem
            })
                   
        }
        
        
    }




    render() {
        
        return (
            <>
                <div class="content-wrapper">
                {/* <ToastContainer position="top-right"  style={{zIndex: 1111}}/> */}

                    <div 
                    id="order_preview"
                    class="wow fadeInUp content_box" 
                    style={{ visibility: 'visible', animationName: "fadeInUp" }}
                    >
                        <div class="row table-header">
                            <div class="col-xs-12 col-md-6">
                                <h2 class="section-title">Expense Groups</h2>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <form class="form-inline form-searchbar" onSubmit={(e)=>{
                                    e.preventDefault()
                                }} >
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Search Group.."
                                        onChange={this.searchItem}

                                        />
                                    </div>
                                    <button type="submit" class="btn btn-default"
                                    onClick={this.searchBtn}
                                    >Search</button>
                                    <a href="#" class="btn btn-default"
                                        onClick={() => {
                                            this.setState({
                                               arr: [ {
                                                    groupName: '',
                                                    introExpense: ''
                                    
                                                },]
                                            })

                                            this.handleClickOpen('openPop')
                                        }}
                                        style={{
                                            marginLeft: 20
                                        }}
                                    ><i class="fa fa-plus"></i>
                                        Add Group</a>
                                </form>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                        {
                                        this.state.paymentList 
                                                    ? 
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th class="active" width="50">No. </th>
                                            <th class="active" width="250">Group Name</th>
                                            <th class="active" style={{ width: "200px" }}>Action</th>
                                        </tr>
                                    {
                                            this.state.paymentList.map((item, index) => {

                                            return <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.expense_name}</td>

                                                <td>
                                                    <Link to='#' class="badge blue"
                                                        onClick={() => {
                                                            
                                                            this.setState({
                                                                item: item
                                                            })
                                                            
                                                            this.handleClickOpen('open')

                                                            
                                                        }}
                                                    > <FontAwesomeIcon icon={faEye} className='iconCompany' /></Link>

                                                    <Link
                                                        // to='/editexpenseGroup'
                                                        class="badge del link" data-toggle="modal" data-target="#myModal"
                                                        to={{
                                                            pathname: '/editexpenseGroup',
                                                            expenseItem: { expense: item }
                                                        }}
                                                        >
                                                        <FontAwesomeIcon icon={faUserEdit} className='iconCompany' />
                                                    </Link>

                                                    <a class="badge red" data-toggle="modal" data-target="#myModal"
                                                        onClick={() => {
                                                            this.setState({
                                                                groupId: item._id
                                                            })
                                                            this.handleClickOpen('delete')

                                                        }}

                                                    > <FontAwesomeIcon icon={faTrashAlt} className='iconCompany' /></a>

                                                </td>
                                            </tr>
                                        }) 
                                    }
                                        
                                    </tbody>
                                </table>
                                        : 
                                        <CircularProgress color="secondary"
                                        style={{
                                            marginLeft: "45%",
                                            marginTop: 30,
                                            marginBottom: 30
                                        }}
                                    />
                                        }
                            </div>
                        </div>
                    </div>
                </div>













                {/* PopUp of View Start  */}

                <Dialog onClose={() => { this.handleClose('open') }} open={this.state.open}
                    style={{
                        margin: 0
                    }}
                >
                    <MuiDialogContent style={{
                        padding: 0,
                        margin: 0
                    }}>
                        
                        <ViewExpenseGroup item={this.state.item} />    


                    </MuiDialogContent>
                </Dialog>


                {/* PopUp of View End  */}

                {/* PopUp of Add Group Start  */}


                <Dialog 
                onClose={() => {
                   this.handleClose('openPop')
                }} 
                open={this.state.openPop}
                    style={{
                        margin: 0
                    }}
                >
                    <MuiDialogContent style={{
                        padding: 0,
                        margin: 0
                    }}>

                        <div className="content-wrapper"
                            style={{
                                padding: 0,
                                overflowY: 'hidden'
                            }}
                        >

                            <div id="order_preview" className="wow fadeInUp content_box newCompanyDiv"
                                style={{
                                    visibility: "visible", animationName: "fadeInUp",  padding: '25px'

                                }}>
                                <p
                                    style={{
                                        float: 'right',
                                        marginTop: '-20',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => {
                                        this.handleClose('openPop')
                                    }}
                                >X</p>
                                <div className="row table-header">
                                    <div className="col-xs-12 col-md-12"
                                        style={{
                                        }}
                                    >
                                        <h2 className="section-title"
                                            style={{
                                                color: '#060606'
                                            }}
                                        > New Expense Group
    
										</h2>
                                        <hr style={{marginTop: 10,borderTop: "1px solid #909090"}}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-md-12"
                                        id='div'
                                    >
                                       

                                        {

                                            this.state.arr.map((item, ind) => {
                                                let eName = `groupName-${ind + 1}`, amount = `expens-${ind + 1}`
                                                return <>
                                                    <form
                                                        key={ind}
                                                        onChange={this.onChangeHandler}
                                                        onSubmit={(e)=>{
                                                            e.preventDefault()
                                                        }}
                                                    >
                                                        <div className="form-group"

>
                                                                    {
                                                                        ind == 0 ?
                                                                        <>
                                                            <label for="pwd">

                                                                Group Name

                                                            </label>

                                                            <input type="text" className="form-control"
                                                                name="expense_name"
                                                                data-id={ind}
                                                                id={eName}
                                                                style={{
                                                                    width: "100%",
                                                                }}
                                                                />
                                                                </>
                                                                : ''
                                                                }

                                                        </div>
                                                        <div className="form-group"
                                                      
                                                        >
                                                        
                                                             <label for="pwd">

                                                                Describe Expense

                                                                </label>
                                                           
                                                            <textarea type="text" className="form-control"
                                                                name={amount}
                                                                data-id={ind}
                                                                id={amount}
                                                                onBlur={this.onBlurHandler}

                                                            >
                                                            </textarea>
                                                        </div>
                                                    </form>
                                                </>
                                            })}
                                            
                                            <label for="pwd">Reciept</label>

                                            <label class="switch"
                                                style={{marginLeft: 10}}
                                                > 
                                                <input type="checkbox"/>
                                                <span class="checkbox_slider round"></span>
                                                </label>
                                        <div style={{
                                            marginTop: 20,
                                            float:'right',
                                        }}>


                                            <button type="submit" className="btn btn-default noBtn blue"
                                                style={{ margin: 'auto',marginRight: 10 }}
                                                onClick={this.addNewField}
                                            >More Expense</button>

                                            <button type="submit" className="btn btn-default noBtn"
                                                style={{ margin: 'auto',padding: "10px 44px" }}
                                                onClick={this.onSubmit}
                                            >Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MuiDialogContent>
                </Dialog>



                {/* PopUp of Add Group End  */}



                {/* PopUp of Delete Start  */}

                <Dialog onClose={() => {
                    this.handleClose('delete')
                }} open={this.state.delete}
                    style={{
                        margin: 0
                    }}
                >
                    <MuiDialogContent style={{

                        margin: 0,
                        overFlow: 'hidden'
                    }}>
                        <p
                            style={{
                                float: 'right',
                                marginTop: '-20',
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                this.handleClose('delete')
                            }}
                        >X</p>
                        <div
                            style={{
                                padding: "30px 100px" ,
                                textAlign: 'center'
                            }}
                        >
                            
                            <h4
                                style={{
                                    marginTop: 30,
                                    marginBottom: 50
                                }}
                            >Are you sure ?</h4>

                            <button type="submit" class="btn btn-default yesBtn"
                                onClick={()=>{
                                    this.props.deleteGroup(this.state.groupId)
                                    this.handleClose('delete')
                                }}
                            ><i class="fa fa-search"></i> Yes</button>
                            <button type="submit" class="btn btn-default noBtn"
                                onClick={() => {
                                    this.handleClose('delete')
                                }}
                            ><i class="fa fa-search"></i> No</button>
                        </div>

                    </MuiDialogContent>
                </Dialog>

                {/* PopUp of Delete Start  */}



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
        addNewExpenseGroup: body =>{
            dispatch(addExpenseGroup(body))
        },
        deleteGroup: body =>{
            dispatch(deleteExpenseGroup(body))
        }
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExpenseGroup));
export let getExpenseGroup,expenseGroupAdded,expenseGroupFail
