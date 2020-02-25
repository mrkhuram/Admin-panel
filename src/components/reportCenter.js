import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { allReports } from '../../redux/action/adminAction'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent'; 


class ReportCenterAdmin extends React.Component {

    constructor(props) {
        super(props)
        // props.reports()
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
    //     },1500);


    // }


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
                    <div id="order_preview" class="wow fadeInUp content_box">
                        <div class="row table-header">
                            <div class="col-xs-12 col-md-6">
                                <h2 class="section-title">Reports Center</h2>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <form class="form-inline form-searchbar"
                                    action="http://test.hiddenlogics.com/action_page.php">
                                    <div class="form-group">
                                        <label for="email">Search By</label>
                                        <select class="form-control">
                                            <option value="all">All</option>
                                            <option value="name">Clients</option>
                                            <option value="email">Readers</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Search here.." />
                                    </div>
                                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i>
                                        Search</button>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th class="active">S#</th>
                                        <th class="active">Date</th>
                                        <th class="active">Sender Name</th>
                                        <th class="active">Sender Type</th>
                                        <th class="active">Category</th>
                                        <th class="active">Description</th>
                                        <th class="active">Status</th>
                                        <th class="active">Action</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>23/2/2019</td>
                                        <td>Alia Jozuf</td>
                                        <td>Client</td>
                                        <td>Account</td>
                                        <td>My account has blocked to unknown reason</td>
                                        <td><span class="badge">Panding</span></td>
                                        <td>
                                            <a class='badge del' href="#">View</a>
                                            <a class='badge del' 
											onClick={this.handleClickOpen}
                                            
                                            data-toggle="modal" data-target="#myModal"> <i
                                                class="fa fa-trash"></i> Delete</a>

                                            <div class="dropdown">
                                                <button class="btn btn-primary dropdown-toggle" type="button"
                                                    data-toggle="dropdown"> <i class="fa fa-check"></i> Mark as
												<span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Going</a></li>
                                                    <li><a href="#">Resolved</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
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
        // reports: () => {
        //     dispatch(allReports())
        // },
    
    })
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReportCenterAdmin));
export default ReportCenterAdmin
