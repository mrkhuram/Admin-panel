import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { allCoupons, deleteACoupon } from '../../redux/action/adminAction'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
class CouponAdmin extends React.Component {
    constructor(props) {
        super(props)
        // this.props.couponsList()
    }
    state = {
        coupons: [
            {
                group_name: 'Faisalabad',
                expenseCategory: 'Maintanence'
            },
            {
                group_name: 'Faisalabad',
                expenseCategory: 'Maintanence'
            },
            {
                group_name: 'Faisalabad',
                expenseCategory: 'Maintanence'
            },
        ],
        open: false,
        openPop: false,
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
                eName: '',
                eAmount: ''

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
        // let count = 1
        // count++
        // let anotherName = 'name'+count
        // let anotherExpense = 'expense'+count


        // this.setState({
        //     arr: [...this.state.arr, 
        //             anotherName,
        //             anotherExpense]
        // })

        // console.log(this.state.arr);

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
                                <h2 class="section-title">Expense Groups</h2>
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
                                        Add Group</a>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th class="active" width="50">S#</th>
                                            <th class="active" width="250">Group Name</th>
                                            <th class="active">Expense Category</th>
                                            <th class="active" style={{ width: "200px" }}>Action</th>
                                        </tr>
                                        {this.state.coupons ? this.state.coupons.map((item, index) => {

                                            return <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.group_name}</td>
                                                <td>{item.expenseCategory}</td>

                                                <td>
                                                    <Link to='#' class="badge blue"
                                                        onClick={() => {
                                                            this.handleClickOpen('open')
                                                        }}
                                                    > <i
                                                        class="fa fa-trash"></i> View</Link>
                                                    <a class="badge red" data-toggle="modal" data-target="#myModal"
                                                    // onClick={() => {
                                                    //     this.deleteItem(index, item._id)
                                                    // }}

                                                    > <i class="fa fa-trash" ></i> Delete</a>

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
                        <div class="content-wrapper">
                            <div id="order_preview" class="wow fadeInUp content_box"
                                style={{ visibility: 'visible', animationName: "fadeInUp" }}>
                                <div class="row table-header">
                                    <div class="col-xs-12 col-md-6">
                                        <h2 class="section-title">Expense Details</h2>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-md-12">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th class="active" width="50">S#</th>
                                                    <th class="active" width="250">Expense Name</th>
                                                    <th class="active">Expense Amount</th>

                                                </tr>
                                                {this.state.expense ? this.state.expense.map((item, index) => {

                                                    return <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{item.expenseName}</td>
                                                        <td>{item.expenseAmount}</td>


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

                <Dialog onClose={this.handleClose} open={this.state.openPop}
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
                                padding: 30,
                                overflowY: 'hidden'
                            }}
                        >

                            <div id="order_preview" className="wow fadeInUp content_box"
                                style={{
                                    visibility: "visible", animationName: "fadeInUp", width: '500px'

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
                                            textAlign: 'center'
                                        }}
                                    >
                                        <h2 className="section-title"
                                        style={{
                                            marginTop: -30
                                        }}
                                        >Add New Expense

										</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-md-12"
                                        id='div'
                                    >
                                        <form
                                            style={{
                                                display: 'flex',
                                                marginLeft: 20
                                            }}
                                        >


                                            <div className="form-group">
                                                <label for="pwd">Expense Name:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group"
                                                style={{
                                                    marginLeft: 20
                                                }}
                                            >
                                                <label for="pwd">Expense Amount:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <br />

                                        </form>

                                        {

                                            this.state.arr.map((item, ind) => {
                                                let eName = `eName-${ind}`, amount = `age-${ind}`
                                                return <>
                                                    <form
                                                        style={{
                                                            display: 'flex'
                                                        }}
                                                        key={ind}
                                                        onChange={this.onChangeHandler}
                                                    >
                                                        <div className="form-group"
                                                            style={{
                                                                width: "87%"
                                                            }}
                                                        >
                                                            {/* <label for="pwd">{`Expense Name #${ind + 1}`}</label> */}
                                                            <textarea type="text" className="form-control"
                                                                name={eName}
                                                                data-id={ind}
                                                                id={eName}
                                                                style={{
                                                                    width: "100%",
                                                                    marginLeft: 20
                                                                }}
                                                            >
                                                            </textarea>
                                                        </div>
                                                        {/* <div className="form-group"
                                                            style={{
                                                                marginLeft: 20
                                                            }}
                                                        >
                                                            <label for="pwd">{`Expense Amount #${ind + 1}`}</label>
                                                            <input type="text" className="form-control"
                                                                name={amount}
                                                                data-id={ind}
                                                                id={amount}


                                                                 />
                                                        </div> */}
                                                    </form>
                                                </>
                                            })}


                                        <button type="submit" className="btn btn-default noBtn"
                                            style={{ margin: 'auto', float: 'right', marginRight: 60 }}
                                            onClick={this.onSubmit}
                                        >Add Expense</button>
                                        <button type="submit" className="btn btn-default noBtn"
                                            style={{ margin: 'auto', float: 'right', marginRight: 60 }}
                                            onClick={this.addNewField}
                                        >Add another Expense</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
export default CouponAdmin