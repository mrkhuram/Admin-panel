import React from 'react'
import { Link } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
class ReaderAdmin extends React.Component {


    state={
        open: false
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
                    <div id="order_preview" class="wow fadeInUp content_box" style={{visibility: 
                    "visible",animationName: "fadeInUp"}}>
                        <div class="row table-header">
                            <div class="col-xs-12 col-md-6">
                                <h2 class="section-title">Our Readers</h2>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <form class="form-inline form-searchbar" action="http://test.hiddenlogics.com/action_page.php">
                                    <div class="form-group">
                                        <label for="email">Search By</label>
                                        <select class="form-control">
                                            <option value="all">All</option>
                                            <option value="name">Name</option>
                                            <option value="email">Email</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Search Client.." />
                                    </div>
                                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i> Search</button>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th class="active">S#</th>
                                            <th class="active">Name</th>
                                            <th class="active">Email</th>
                                            <th class="active">Passowrd</th>
                                            <th class="active">Phone</th>
                                            <th class="active" width="120px">Visible on site</th>
                                            <th class="active" width="120px">Account Status</th>
                                            <th class="active" style={{width:"300px"}}>Action</th>

                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>John</td>
                                            <td>john@gmail.com</td>
                                            <td>42311</td>
                                            <td>+9212432344</td>
                                            <td>
                                                <label class="switch">
                                                    <input type="checkbox" />
                                                    <span class="checkbox_slider round"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <span class="badge">Active</span>
                                            </td>
                                            <td>
                                                <Link class="badge blue" to='/admin/readerDetail'> <i class="fa fa-external-link"></i> View Detail</Link>
                                                <a class="badge del"
                                                   onClick={this.handleClickOpen}
                                                data-toggle="modal" data-target="#myModal"> <i class="fa fa-trash"></i> Delete</a>
                                                <Link class="badge del" to='/admin/readerStatus'>Set Status</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>John</td>
                                            <td>john@gmail.com</td>
                                            <td>42311</td>
                                            <td>+9212432344</td>
                                            <td>
                                                <label class="switch">
                                                    <input type="checkbox" checked="checked" />
                                                    <span class="checkbox_slider round"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <span class="badge">Active</span>
                                            </td>
                                            <td>
                                                <Link class="badge blue" to='/admin/readerDetail'> <i class="fa fa-external-link"></i> View Detail</Link>
                                                <a class="badge del"
                                                   onClick={this.handleClickOpen}
                                                data-toggle="modal" data-target="#myModal"> <i class="fa fa-trash"></i> Delete</a>
                                                <Link class="badge del" to='/admin/readerStatus'>Set Status</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>John</td>
                                            <td>john@gmail.com</td>
                                            <td>42311</td>
                                            <td>+9212432344</td>
                                            <td>
                                                <label class="switch">
                                                    <input type="checkbox" checked="checked" />
                                                    <span class="checkbox_slider round"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <span class="badge">Active</span>
                                            </td>
                                            <td>
                                                <Link class="badge blue" to='/admin/readerDetail'> <i class="fa fa-external-link"></i> View Detail</Link>
                                                <a class="badge del"
                                                   onClick={this.handleClickOpen}
                                                data-toggle="modal" data-target="#myModal"> <i class="fa fa-trash"></i> Delete</a>
                                                <Link class="badge del" to='/admin/readerStatus'>Set Status</Link>
                                            </td>
                                        </tr>
                                        <tr >
                                            <td>4</td>
                                            <td>John</td>
                                            <td>john@gmail.com</td>
                                            <td>42311</td>
                                            <td>+9212432344</td>
                                            <td>
                                                <label class="switch">
                                                    <input type="checkbox" />
                                                    <span class="checkbox_slider round"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <span class="badge">Close</span>
                                            </td>
                                            <td>
                                                <Link class="badge blue" to='/admin/readerDetail'> <i class="fa fa-external-link"></i> View Detail</Link>
                                                <a class="badge del"
                                                   onClick={this.handleClickOpen}
                                                data-toggle="modal" data-target="#myModal"> <i class="fa fa-trash"></i> Delete</a>
                                                <Link class="badge del" to='/admin/readerStatus'>Set Status</Link>
                                            </td>
                                        </tr>
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
export default ReaderAdmin;