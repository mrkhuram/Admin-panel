import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { blogsAndArticles,approveAnArticle,deleteAnArticle } from '../../redux/action/adminAction'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import AddEmployeeForm from './tabsAddEmployee';
import EditEmployeeForm from './editEmployee';




class AddEmployee extends React.Component {
	constructor(props) {
		super(props)
	}
	state = {
		articlesList: [
			{
				name: 'john',
				addedBy: 'Admin',
				addedOn: '20/1/2019'
			},
			{
				name: 'john',
				addedBy: 'Admin',
				addedOn: '20/1/2019'
			},
			{
				name: 'john',
				addedBy: 'Admin',
				addedOn: '20/1/2019'
			},
			{
				name: 'john',
				addedBy: 'Admin',
				addedOn: '20/1/2019'
			},


		],
		checked: true,
		openPop: false,
		open: false,
		delete: false,
		addNew: false,
		edit: false
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
	
	onChangeHandler = (e) => {
		this.setState({
			checked: !this.state.checked
		})

	}
	deleteItem = (index, id) => {
		this.state.invoices.splice(index, 1)
		this.setState({
			invoices: this.state.invoices
		})

		this.props.delete(id)
	}
	 toggle = tab => {
		// if (activeTab !== tab) setActiveTab(tab);
	}


	render() {
		return (
			<>

				
				<div class="content-wrapper">
					<div id="order_preview" class="wow fadeInUp content_box"
						style={{ visibility: 'visible', animationName: "fadeInUp" }}>
						<div class="row table-header">
							<div class="col-xs-12 col-md-6"
								style={{ display: 'flex' }}
							>
								<h2 class="section-title">Employee List</h2>

							</div>
							<div class="col-xs-12 col-md-6">
								<form class="form-inline form-searchbar">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Search Employee.." />
									</div>
									<button type="submit" class="btn btn-default">Search</button>
									<Link to="#" className="btn btn-default link"
										onClick={() => {
											this.handleClickOpen('addNew')
										}}
										style={{
											marginLeft: 20
										}}
									><i class="fa fa-plus"></i>
										Add Employee</Link>
								</form>
							</div>
						</div>



						<div class="row">
							<div class="col-xs-12 col-md-12">
								<table class="table table-bordered">
									<tbody>
										<tr>
											<th class="active" width="50">S#</th>
											<th class="active" width="200">Employee Name</th>
											<th class="active" width="100">Added By</th>
											<th class="active" width="100">Added on</th>

											<th class="active" width="200">Action</th>
										</tr>
										{this.state.articlesList ?
											this.state.articlesList.map((item, index) => {
												return <tr>
													<td>{index + 1}</td>
													<td>{item.name}</td>
												
													<td>{item.addedBy}</td>

													<td>{item.addedOn}</td>

													<td>
														<Link
															onClick={() => {
																this.handleClickOpen('openPop')
															}}
															to='#'
															class="badge blue" > <FontAwesomeIcon icon={faEye} className='iconCompany' /> </Link>

														<Link
															to='#'
															class="badge del link" data-toggle="modal" data-target="#myModal"
															onClick={() => {
																this.handleClickOpen('edit')
															}}
														>
															<FontAwesomeIcon icon={faUserEdit} className='iconCompany' />
														</Link>
														<Link to='#'
															onClick={() => {
																this.handleClickOpen('delete')
															}}
															class="badge red" > <FontAwesomeIcon icon={faTrashAlt} className='iconCompany' /></Link>

													</td>
												</tr>
											}) : <></>
										}

									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>



				<Dialog onClose={() => {
					this.handleClose('openPop')
				}} open={this.state.openPop}
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
								this.handleClose('openPop')
							}}
						>X</p>

						<div>
							<div class="col-xs-12 col-md-12"
								style={{
									textAlign: 'center',

								}}
							>
								<h4 class="section-title"
									style={{
										marginBottom: 40,
										// marginTop: -30,
										float: 'left'
									}}
								>Employee Details</h4>

								<img src={require("./assets/images/logo.png")} alt=""
									style={{
										width: 100,
										float: 'right'
									}}
								/>

								<table class="table table-bordered">
									<tbody>
										<tr>
											<th  >Title</th>
											<td >John Doe</td>
										</tr>
										<tr>
											<th  >Employee Name</th>
											<td >John Doe</td>
										</tr>
										<tr>
											<th >Work Email</th>
											<td>john@gmail.com</td>
										</tr>
										<tr>
											<th >Phone</th>
											<td>09876543213</td>
										</tr>
										<tr>
											<th >Position</th>
											<td>X</td>
										</tr>
										<tr>
											<th >Starting Date</th>
											<td>20/02/2018</td>
										</tr>
										<tr>
											<th  >Employee Status</th>
											<td>Contract</td>
										</tr>
										<tr>
											<th >Direct Manager</th>
											<td>No</td>
										</tr>
										<tr>
											<th >Team</th>
											<td>Yes</td>
										</tr>
										<tr>
											<th >Location</th>
											<td>Faisalad, Pakistan</td>
										</tr>
										<tr>
											<th >Public Holiday Group</th>
											<td>Yes</td>
										</tr>
										<tr>
											<th >Access Level</th>
											<td>Employee</td>
										</tr>
										<tr>
											<th >Driving License #</th>
											<td>NHL12341018</td>
										</tr>
										<tr>
											<th >Employee No.</th>
											<td>007635</td>
										</tr>
										<tr>
											<th >LinkedIn</th>
											<td>/ksalex23</td>
										</tr>
										<tr>
											<th >Skype</th>
											<td>/ksalex23</td>
										</tr>



										<tr>
										</tr>
									</tbody>
								</table>

								<Link
									className='link'
								>
									<button type="submit" class="btn btn-default noBtn"
										style={{
											marginLeft: 30
										}}
										onClick={() => {
											this.handleClose('openPop')

											this.handleClickOpen('open')
										}}
									><i class="fa fa-search"></i> Next</button>
								</Link>

							</div>
						</div>


					</MuiDialogContent>
				</Dialog >








				<Dialog onClose={() => {
					this.handleClose('open')
				}} open={this.state.open}
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
								this.handleClose('open')
							}}
						>X</p>

						<div>
							<div class="col-xs-12 col-md-12"
								style={{
									textAlign: 'center',

								}}
							>
								<h4 class="section-title"
									style={{
										marginBottom: 40,
										float: 'left'
									}}
								>Employee Personal Detail</h4>

								<img src={require("./assets/images/logo.png")} alt=""
									style={{
										width: 100,
										float: 'right'
									}}
								/>

								<table class="table table-bordered">
									<tbody>
										<tr>
											<th  >Street 1</th>
											<td >St#4, NY</td>
										</tr>
										<tr>
											<th  >Street 2</th>
											<td ></td>
										</tr>
										<tr>
											<th >City</th>
											<td>New York</td>
										</tr>
										<tr>
											<th >State</th>
											<td>Punjab</td>
										</tr>
										<tr>
											<th >PostCode</th>
											<td>38000</td>
										</tr>
										<tr>
											<th >Country</th>
											<td>Pakistan</td>
										</tr>
										<tr>
											<th  >Nationality</th>
											<td>Pakistan</td>
										</tr>
										<tr>
											<th >Home Phone</th>
											<td>098787867</td>
										</tr>
										<tr>
											<th >Mobile Phone</th>
											<td>098767877</td>
										</tr>
										<tr>
											<th >Location</th>
											<td>Faisalad, Pakistan</td>
										</tr>
										<tr>
											<th >Personal Email</th>
											<td>john@gmail.com</td>
										</tr>
										<tr>
											<th >Gender</th>
											<td>Male</td>
										</tr>
										<tr>
											<th >Marital Status</th>
											<td>Married</td>
										</tr>



										<tr>
										</tr>
									</tbody>
								</table>
								

							</div>
						</div>


					</MuiDialogContent>
				</Dialog >


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
								padding: "30px 100px",
								textAlign: 'center'
							}}
						>
							
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
					this.handleClose('addNew')
				}} open={this.state.addNew}
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
								this.handleClose('addNew')
							}}
						>X</p>
						<AddEmployeeForm />

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
						<p
							style={{
								float: 'right',
								marginTop: '-20',
								cursor: 'pointer'
							}}
							onClick={() => {
								this.handleClose('edit')
							}}
						>X</p>
						<EditEmployeeForm />

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

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddEmployee));

export default AddEmployee