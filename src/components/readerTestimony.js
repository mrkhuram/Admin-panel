import React from 'react'
import {Link} from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent'; 

class ReaderTestimony extends React.Component {

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
				<div id="order_preview" class="wow fadeInUp content_box"
					style={{visibility: 'visible', animationName: "fadeInUp"}}>
					<div class="row table-header">
						<div class="col-xs-12 col-md-6">
							<h2 class="section-title">Our Announcement</h2>
						</div>
						<div class="col-xs-12 col-md-6">
						</div>
					</div>
					<div class="row" style={{fontSize: 15}}>
						<div class="col-xs-12 col-md-12">
							<table class="table table-bordered">
								<tbody>
									<tr>
										<th class="active" width="50">S#</th>
										<th class="active" width="250">Reader</th>
										<th class="active" width="250">Client Name </th>
										<th class="active">Review</th>
										<th class="active" width="120px">Visible on site</th>
                                        <th class="active" style={{width:"200px"}}>Action</th>
									</tr>
									<tr>
										<td>1</td>
										<td>John</td>
										<td>Ezabel</td>
										<td>In order to provide our products and services and related support, it is
											necessary for Ezoic to transfer your personal data outside of the European
											Union. In such case, the data controller for this data for EU residents is
											Ezoic Inc.</td>
										<td>
											<label class="switch">
												<input type="checkbox" checked="checked"/>
												<span class="checkbox_slider round"></span>
											</label>
										</td>
										<td>
											<a class="badge red" data-toggle="modal" data-target="#myModal"
											onClick={this.handleClickOpen}
											> <i
											class="fa fa-trash"></i> Delete</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div id="myModal" class="modal fade delPopup" role="dialog">
					<div class="modal-dialog modal-sm">
						{/* <!-- Modal content--> */}
						<div class="modal-content">
							<div class="modal-body">
								<p><i class="fa fa-trash"></i><br/>Are you sure you want to delete</p>
								<p>
									<button type="button" class="btn btn-default yes" data-dismiss="modal">Yes</button>
									<button type="button" class="btn btn-default no" data-dismiss="modal">No</button>
								</p>
							</div>
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
export default ReaderTestimony;