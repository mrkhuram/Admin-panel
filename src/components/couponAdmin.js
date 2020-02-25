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
        coupons: '',
        open: false
    }
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             coupons: this.props.admin.couponsList
    //         })
    //     }, 1500);


    // }

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

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };
    handleClose = () => {
        this.setState({
            open: false
        })
    };

    render() {
        return (
            <>
                <div class="content-wrapper">
                    <div id="order_preview" class="wow fadeInUp content_box"
                        style={{ visibility: 'visible', animationName: "fadeInUp" }}>
                        <div class="row table-header">
                            <div class="col-xs-12 col-md-6">
                                <h2 class="section-title">Coupon List</h2>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <form class="form-inline form-searchbar"
                                    action="http://test.hiddenlogics.com/action_page.php">
                                    <Link to='/new_coupon' class="btn btn-default"><i class="fa fa-plus"></i>
                                        New Coupon</Link>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th class="active" width="50">S#</th>
                                            <th class="active" width="250">Coupon Name</th>
                                            <th class="active">Coupon Discount Price</th>
                                            <th class="active">Coupon Detail</th>
                                            <th class="active">Created Date</th>
                                            <th class="active">Status</th>
                                            <th class="active" style={{ width: "200px" }}>Action</th>
                                        </tr>
                                        {this.state.coupons ? this.state.coupons.map((item, index) => {

                                            return <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.coupon_name}</td>
                                                <td>{item.discount_price}</td>
                                                <td>{item.coupon_detail}</td>
                                                <td>{item.date}</td>
                                                <td>
                                                    <label class="switch">
                                                        <input type="checkbox" checked={item.status} />
                                                        <span class="checkbox_slider round"></span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <Link to='/edit_coupon' class="badge blue"> <i
                                                        class="fa fa-trash"></i> Edit</Link>
                                                    <a class="badge red" data-toggle="modal" data-target="#myModal" onClick={() => {
                                                        this.deleteItem(index, item._id)
                                                    }}> <i class="fa fa-trash" ></i> Delete</a>
                                                    <div class="dropdown hide">
                                                        <button class="btn btn-primary dropdown-toggle" type="button"
                                                            data-toggle="dropdown">More
													<span class="caret"></span></button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">Edit</a></li>
                                                            <li><a href="#">View Detail</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        }) : <></>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog onClose={this.handleClose} open={this.state.open}
                    style={{
                        margin: 0
                    }}
                >
                    <MuiDialogContent style={{
                        padding: 0,
                        margin: 0
                    }}>
                        <div class=" customPopup">
                            <div class="modal-dialog modal-sm" style={{
                                margin: 0
                            }}>
                                {/* <!-- Modal content--> */}
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <p><i class="fa fa-trash"></i><br />Are you sure you want to delete</p>
                                        <p>
                                            <button type="button" class="btn btn-default yes" data-dismiss="modal"
                                                onClick={this.props.deleteAccount}
                                            >Yes</button>
                                            <button type="button" class="btn btn-default no" data-dismiss="modal"
                                                onClick={this.handleClose}
                                            >No</button></p>
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