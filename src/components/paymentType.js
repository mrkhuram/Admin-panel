import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { allCoupons, deleteACoupon } from '../../redux/action/adminAction'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import EditPaymentType from './paymentTypeEdit';


import {addNewPayment , deletePaymentType} from '../redux/actions/paymentTypeAction'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';

import Toast from 'light-toast';


class PaymentType extends React.Component {
    constructor(props) {
        super(props)
        
        getPaymentType = ()=>{

            let header = { 
                headers: {
                    'Content-Type': 'application/json',
                    "x-sh-auth" : localStorage.getItem('token')
                }
            }
            axios.get('https://mr-expense-backend.herokuapp.com/admin/get_all_payment_type',header)
            .then(res =>{
                console.log(res.data);
                
                this.setState({
                    allPayment: res.data.expense_group,
                    paymentList: res.data.expense_group
                })
            })
        }

        successFul = (parm) => {
            if(parm === "success"){
      
              Toast.success('Successfully Created...!!', 2000, () => {
                
              });
            }
          }
          createdFail = (parm) => {
            if(parm === "err"){
      
            Toast.fail('Internal Server Error, Try Again.', 2000, () => {
      
            });
          }
          }
          successFul()
          createdFail() 
        getPaymentType()
    }
    state = {
        coupons: [
            {
                group_name: 'Cheque',
                expenseCategory: 'Maintanence'
            },
            {
                group_name: 'Cash',
                expenseCategory: 'Maintanence'
            },
            {
                group_name: 'Cheque',
                expenseCategory: 'Maintanence'
            },
        ],
        open: false,
        openPop: false,
        delete: false,
        edit: false,
        expense: [
            {
                expenseName: 'Bike Maintance',
                expenseAmount: '1000'
            },
            {
                expenseName: 'Car Wash',
                expenseAmount: '500'
            },
            {
                expenseName: 'Electrical work',
                expenseAmount: '4300'
            },
        ],
        arr: [
            {
                groupName: '',
                introExpense: ''

            },
        ]
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }



    deleteItem = (index, id) => {
        // console.log(id);
        this.state.coupons.splice(index, 1)
        this.setState({
            coupons: this.state.coupons
        })

        this.props.couponDelete(id)
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


    onChangeHandler = (e) => {
        console.log('working');
        this.setState({[e.target.name]: e.target.value})

    }


    onSubmitPayment = (eve) => {
        eve.preventDefault()
        if(this.state.payment_type){
            
            this.props.addNewType(this.state.payment_type)
        }else{
            Toast.fail('Payment Type Required, Try Again.', 2000)
        
        }
        this.handleClose('openPop')   

        
    }


    // notifyErr = () => toast.error("Sorry your request didn't complete , Try Again.", { autoClose: 2000 })
    // notifySuccess = () => toast.success("Request Successfully Completed", { autoClose: 2000 })


    // deletePType = ()=>{

    // }
    searchingItem = []
    searchItem = (e)=>{

        let searchVal = e.target.value
        if(searchVal == ''){
            this.setState({
                allPayment: this.state.paymentList
            })
        }
        
        this.searchingItem = this.state.allPayment.filter((item)=>{
                                if(searchVal == item.payment_type){
                                        return item
                                        
                                    }
                                }
        )
        
        
        
    }
    searchBtn = (e)=>{
        e.preventDefault()

        console.log(this.searchingItem);
        
        if(this.searchingItem.length !== 0){

            this.setState({
                allPayment: this.searchingItem
            })
                   
        }
        
        
    }

    render() {
        return (
            <>
                <div class="content-wrapper">
                {/* <ToastContainer position="top-right"  style={{zIndex: 1111}}/> */}

                    <div id="order_preview" class="wow fadeInUp content_box"
                        style={{ visibility: 'visible', animationName: "fadeInUp" }}>
                        <div class="row table-header">
                            <div class="col-xs-12 col-md-6">
                                <h2 class="section-title">Payment Type</h2>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <form class="form-inline form-searchbar">
                                <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Search Payment.."
                                        onChange={this.searchItem}
                                        />
                                    </div>
                                    <button type="submit" class="btn btn-default"
                                    onClick={this.searchBtn}
                                    >Search</button>
                                    <a href="#" class="btn btn-default"
                                        onClick={() => {
                                            this.handleClickOpen('openPop')
                                        }}
                                        style={{
                                            marginLeft: 20
                                        }}
                                    ><i class="fa fa-plus"></i>
                                        Add Payment</a>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                { this.state.allPayment ? 
                                    <table class="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th class="active" width="50">No. </th>
                                                <th class="active" width="250">Payment Type</th>
                                                <th class="active" style={{ width: "200px" }}>Action</th>
                                            </tr>
                                        
                                       { 
                                        this.state.allPayment.map((item, index) => {

                                            return <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.payment_type}</td>

                                                <td>
                                                    <Link to='#' class="badge blue"
                                                        onClick={() => {
                                                            this.setState({
                                                                id: item._id,
                                                                ind: index
                                                            })
                                                            this.handleClickOpen('open')
                                                        }}
                                                    > <FontAwesomeIcon icon={faEye} className='iconCompany' /></Link>

                                                    <Link
                                                        // to='/editPaymentType'
                                                        onClick={() => {
                                                            this.setState({
                                                                id: item._id,
                                                                ind: index
                                                            })
                                                            this.handleClickOpen('edit')
                                                        }}
                                                        class="badge del link" data-toggle="modal" data-target="#myModal">
                                                        <FontAwesomeIcon icon={faUserEdit} className='iconCompany' />
                                                    </Link>

                                                    <a class="badge red" data-toggle="modal" data-target="#myModal"
                                                        onClick={() => {
                                                            this.setState({
                                                                id: item._id
                                                            })
                                                            this.handleClickOpen('delete')
                                                        }}

                                                    > <FontAwesomeIcon icon={faTrashAlt} className='iconCompany' /></a>

                                                </td>
                                            </tr>
                                            }) }
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



                <Dialog onClose={() => { this.handleClose('open') }} open={this.state.open}
                    style={{
                        margin: 0
                    }}
                >
                    <MuiDialogContent style={{
                        padding: 0,
                        margin: 0
                    }}>
                        
                        <div class="content-wrapper" 
                        style={{
                            padding: 0,
                            overflowY: 'auto'
                        }}
                        >
                            <div id="order_preview" class="wow fadeInUp content_box"
                                style={{ visibility: 'visible', animationName: "fadeInUp",padding: "35px 50px" }}>
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
                                        <h2 class="section-title">Payment Type</h2>
                                    </div>
                                </div>
                                    <hr style={{marginTop: 10,borderTop: "1px solid #909090", width: "94%", marginLeft: 15}}/>
                                <div class="row">
                                    <div class="col-xs-12 col-md-12">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th class="active" width="80">No.</th>
                                                    <th class="active" width="280">Name</th>
                                                    {/* <th class="active" width="280">Added On</th> */}


                                                </tr>
                                                {
                                                this.state.allPayment ? this.state.allPayment.map((item, index) => {

                                                    return <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{item.payment_type}</td>
                                                        {/* <td>{item.date}</td> */}



                                                    </tr>
                                                }) : <></>}
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MuiDialogContent>
                </Dialog>






                <Dialog onClose={() => {
                                        this.handleClose('openPop')
                                    }} open={this.state.openPop}
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
                                    visibility: "visible", animationName: "fadeInUp", padding: '25px'

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
                                       
                                    >
                                        <h2 className="section-title"
                                            style={{
                                               
                                                color: '#060606'
                                            }}
                                        > New Payment Type
    
										</h2>
                                <hr style={{marginTop: 10,borderTop: "1px solid #909090"}}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-md-12"
                                        id='div'
                                    >
                                       

                                       
                                                    <form>
                                                        <div className="form-group">
                                                             <label for="pwd">

                                                                Payment Name

                                                            </label>

                                                            <input type="text" className="form-control"
                                                                name="payment_type"
                                                               
                                                                style={{
                                                                    width: "100%",
                                                                }}
                                                                onChange={this.onChangeHandler}
                                                                />
                                                               

                                                        </div>

                                                    </form>
                                               
                                            
                                           
                                        <div style={{
                                            marginTop: 20,
                                            float:'right',
                                        }}>

                            

                                            <button type="submit" className="btn btn-default noBtn"
                                                style={{ margin: 'auto',padding: "10px 44px" }}
                                                onClick={this.onSubmitPayment}
                                            >Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MuiDialogContent>
                </Dialog>





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
                                    this.props.delete_p_type(this.state.id)
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





                <Dialog onClose={() => {
                    this.handleClose('edit')
                }} open={this.state.edit}
                    style={{
                        margin: 0
                    }}
                >
                    <MuiDialogContent style={{

                        margin: 0,
                        overFlow: 'hidden'
                    }}>
                        
                        <EditPaymentType  handleClose={this.handleClose} id={this.state.id}/>

                    </MuiDialogContent>
                </Dialog>


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
        addNewType: body =>{
            dispatch(addNewPayment(body))
        },
        delete_p_type: body =>{
            dispatch(deletePaymentType(body))
        }
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaymentType));
export let successFul, createdFail, getPaymentType
