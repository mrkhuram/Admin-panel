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



class PaymentType extends React.Component {
    constructor(props) {
        super(props)
        // this.props.couponsList()
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


    onChangeHandler = (e, ind) => {
        console.log('working');

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


    onSubmit = (eve) => {
        eve.preventDefault()
        console.log(this.state);
    }

    render() {
        return (
            <>
                <div class="content-wrapper">
                    <div id="order_preview" class="wow fadeInUp content_box"
                        style={{ visibility: 'visible', animationName: "fadeInUp" }}>
                        <div class="row table-header">
                            <div class="col-xs-12 col-md-6">
                                <h2 class="section-title">Payment Type</h2>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <form class="form-inline form-searchbar">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Search Group.." />
                                    </div>
                                    <button type="submit" class="btn btn-default">Search</button>
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
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th class="active" width="50">No. </th>
                                            <th class="active" width="250">Payment Type</th>
                                            {/* <th class="active">Expense Category</th> */}
                                            <th class="active" style={{ width: "200px" }}>Action</th>
                                        </tr>
                                        {this.state.coupons ? this.state.coupons.map((item, index) => {

                                            return <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.group_name}</td>
                                                {/* <td>{item.expenseCategory}</td> */}

                                                <td>
                                                    <Link to='#' class="badge blue"
                                                        onClick={() => {
                                                            this.handleClickOpen('open')
                                                        }}
                                                    > <FontAwesomeIcon icon={faEye} className='iconCompany' /></Link>

                                                    <Link
                                                        // to='/editPaymentType'
                                                        onClick={() => {
                                                            this.handleClickOpen('edit')
                                                        }}
                                                        class="badge del link" data-toggle="modal" data-target="#myModal">
                                                        <FontAwesomeIcon icon={faUserEdit} className='iconCompany' />
                                                    </Link>

                                                    <a class="badge red" data-toggle="modal" data-target="#myModal"
                                                        onClick={() => {
                                                            this.handleClickOpen('delete')
                                                        }}

                                                    > <FontAwesomeIcon icon={faTrashAlt} className='iconCompany' /></a>

                                                </td>
                                            </tr>
                                        }) : <></>}
                                    </tbody>
                                </table>
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
                                                    {/* <th class="active" width="130">Amount</th> */}

                                                </tr>
                                                {this.state.expense ? this.state.coupons.map((item, index) => {

                                                    return <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{item.group_name}</td>
                                                        {/* <td>{item.expenseAmount}</td> */}


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

                            <div id="order_preview" className="wow fadeInUp content_box"
                                style={{
                                    visibility: "visible", animationName: "fadeInUp", width: '500px', padding: '25px'

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
                                            // textAlign: 'center'
                                        }}
                                    >
                                        <h2 className="section-title"
                                            style={{
                                                // marginTop: -30,
                                                // borderBottom: "1px solid grey",
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
                                       

                                        {

                                            this.state.arr.map((item, ind) => {
                                                let eName = `groupName-${ind + 1}`, amount = `introExpense-${ind + 1}`
                                                return <>
                                                    <form
                                                        // style={{
                                                        //     display: 'flex'
                                                        // }}
                                                        key={ind}
                                                        // onChange={this.onChangeHandler}
                                                    >
                                                        <div className="form-group"

>
                                                                    {
                                                                        ind == 0 ?
                                                                        <>
                                                            <label for="pwd">

                                                                Payment Name

                                                            </label>

                                                            <input type="text" className="form-control"
                                                                name={eName}
                                                                data-id={ind}
                                                                id={eName}
                                                                style={{
                                                                    width: "100%",
                                                                    // marginLeft: 20
                                                                }}
                                                                // placeholder="Group Name"
                                                                />
                                                                </>
                                                                : ''
                                                                }

                                                        </div>
{/*                                                         
                                                        <div class="form-group">
                                                                <label for="pwd">Payment Type</label>
                                                                <select class="form-control" name='to_client'
                                                                onChange={onChangeHandler}
                                                                >
                                                                    <option value="client">Select Payment Type</option>

                                                                    <option value="client">Cheque</option>
                                                                    <option value="reader">Cash</option>
                                                                    <option value="reader">Contract</option>
                                                                        <option value="reader">Intern</option>


                                                                </select>
                                                            </div> */} 
                                                    </form>
                                                </>
                                            })}
                                            
                                            {/* <label for="pwd">Reciept</label>

                                            <label class="switch"
                                                style={{marginLeft: 10}}
                                                > 
                                                <input type="checkbox"/>
                                                <span class="checkbox_slider round"></span>
                                                </label> */}
                                        <div style={{
                                            // display: 'flex',
                                            marginTop: 20,
                                            float:'right',
                                            // width: "100%"
                                        }}>

                                {/* <hr style={{marginTop: 5,borderTop: "1px solid #909090"}}/> */}

                                            {/* <button type="submit" className="btn btn-default noBtn blue"
                                                style={{ margin: 'auto',marginRight: 10 }}
                                                onClick={this.addNewField}
                                            >More Expense</button> */}

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
                            {/* <FontAwesomeIcon icon={faTimesCircle}
                                    style={{
                                        fontSize: 35,
                                        color: 'red',

                                    }}
                                /> */}
                            <h4
                                style={{
                                    marginTop: 30,
                                    marginBottom: 50
                                }}
                            >Are you sure ?</h4>

                            <button type="submit" class="btn btn-default yesBtn"><i class="fa fa-search"></i> Yes</button>
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
                        {/* <p
                            style={{
                                float: 'right',
                                marginTop: '-20',
                                cursor: 'pointer'
                            }}
                            // onClick={() => {
                            //     this.handleClose('edit')
                            // }}
                        >X</p> */}
                        <EditPaymentType  handleClose={this.handleClose}/>

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

    })
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CouponAdmin));
export default PaymentType