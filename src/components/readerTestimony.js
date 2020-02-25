import React from 'react'
import { Link } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import {
	Row,
	Col,
	Container
} from 'reactstrap'


class ReaderTestimony extends React.Component {

	state = {
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
						style={{ visibility: 'visible', animationName: "fadeInUp" }}>
						<Row className="table-header">

							{/* <Col xs='12' md='12'>
								<h2 class="section-title">Expenditures</h2>
							</Col>
 */}


							<Col xs='12' md='4'>
                                <h2 class="section-title">Expenditures</h2>
                            </Col>
                            <Col class="col-xs-12 col-md-8" xs='12' md='8'>
                                <form class="form-inline form-searchbar" action="http://test.hiddenlogics.com/action_page.php">
                                    <div class="form-group">
                                        <label for="pwd">Filter  </label>
                                        <select class="form-control">
                                            <option value="1">By Month</option>
                                            <option value="January">January</option>
                                            <option value="Febuary">Febuary</option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">August</option>
                                            <option value="September">September</option>
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                            <option value="December">December</option>
                                        </select>
                                    </div>
                                    
                                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i> Search</button>
                                    <Link className='link' to='/' style={{
                                        marginLeft: 10
                                    }}>
                                        <button type="submit" class="btn btn-default"><i class="fa fa-search"></i> Back </button>
                                    </Link>

                                </form>
                            </Col>
						</Row>
						<div class="row" style={{ fontSize: 15 }}>
							<div class="col-xs-12 col-md-12">
								<table class="table table-bordered">
									<tbody>
										<tr>
											<th class="active" width="50">S#</th>
											<th class="active" width="250">Added By</th>
											<th class="active" width="150">Payment Type </th>
											<th class="active">Description</th>
											<th class="active" width="120px">Paid/Unpaid</th>
											<th class="active" width="120px">Status</th>
											<th class="active" width="120px">Approved By</th>

											<th class="active" style={{ width: "200px" }}>Action</th>
										</tr>
										<tr>
											<td>1</td>
											<td>John</td>
											<td>Cheque</td>
											<td>In order to provide our products and services and related support, it is
												necessary.</td>
											<td>
												
												Unpaid
											</td>
											<td>
												<span class="badge">Approved</span>
											</td>

											<td>
												John (Admin)
											</td>
											<td>
												<a class="badge del" data-toggle="modal" data-target="#myModal"
													onClick={this.handleClickOpen}
												> <i
													class="fa fa-trash"></i> Approve</a>
												<a class="badge red" data-toggle="modal" data-target="#myModal"
													onClick={this.handleClickOpen}
												> <i
													class="fa fa-trash"></i> Reject</a>
													<br/>
													<a class="badge del" data-toggle="modal" data-target="#myModal"
												
												> <i
													class="fa fa-trash"></i> Paid</a>
												<a class="badge red" data-toggle="modal" data-target="#myModal"
													
												> <i
													class="fa fa-trash"></i> Unpaid</a>
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
									<p><i class="fa fa-trash"></i><br />Are you sure you want to Reject</p>
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
										<p><i class="fa fa-trash"></i><br />Are you sure you want to Approve</p>
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