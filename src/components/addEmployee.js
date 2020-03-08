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
import axios from 'axios'
import jwt from 'jsonwebtoken'
import {deleteEmployee} from '../redux/actions/employeeAction'

class AddEmployee extends React.Component {
	constructor(props) {
		super(props)

		let token = localStorage.getItem('token')

		let header = {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				'x-sh-auth': token
			}
		}
		let companyId = localStorage.getItem('company_id')
		console.log(companyId);

		employeeList = () => {
			axios.get(`https://mr-expense-backend.herokuapp.com/user/get_company_employee?_id=${companyId}`, header)
				.then(res => {
					console.log(res);
					this.setState({
						employees: res.data.employees
					})
				})
				.catch(err => console.log(err))
		}


		employeeList()

	}



	state = {
		employees: null,
		// checked: true,
		openPop: false,
		open: false,
		delete: false,
		addNew: false,
		edit: false,

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
			[e.target.name]: e.target.value
		})

	}
	deleteItem = (index, id) => {
		this.state.invoices.splice(index, 1)
		this.setState({
			invoices: this.state.invoices
		})

		this.props.delete(id)
	}
	closeTab = () => {
		this.handleClose('addNew')
	}

	id = 2


	// testing = ()=>{
	// 	if(this.state.employees.length !== 0){
	// 		console.log(this.state.employees[this.id].email);

	// 	}

	// }
	render() {
		// console.log(this.state.ind);
		// console.log(this.state.employees[this.id].email);
		// this.testing()
		let { employees } = this.state
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
										{this.state.employees ?
											this.state.employees.map((item, index) => {
												return <tr>
													<td>{index + 1}</td>
													<td>{item.first_name + " " + item.last_name}</td>

													<td>{item.addedBy}</td>

													<td>{item.addedOn}</td>

													<td>
														<Link
															onClick={() => {
																// this.setState({ ind: index })
																this.id = index
																this.handleClickOpen('openPop')


															}}
															to='#'
															class="badge blue" > <FontAwesomeIcon icon={faEye} className='iconCompany' /> </Link>

														<Link
															to='#'
															class="badge del link" data-toggle="modal" data-target="#myModal"
															onClick={() => {
																this.id = index
																this.handleClickOpen('edit')
															}}
														>
															<FontAwesomeIcon icon={faUserEdit} className='iconCompany' />
														</Link>
														<Link to='#'
															onClick={() => {
																this.id = index
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
											<th>Title</th>
											<td >{employees ? employees[this.id].title : null}
											</td>
										</tr>
										<tr>
											<th  >Employee Name</th>
											<td >{employees ? employees[this.id].first_name + ' ' + employees[this.id].last_name: null}
											</td>
										</tr>
										<tr>
											<th >Work Email</th>
											<td >{employees ? employees[this.id].email : null}
											</td>									</tr>
										<tr>
											<th >Phone</th>
											<td >{employees ? employees[this.id].ph_no : null}
											</td>
										</tr>
										<tr>
											<th >Position</th>
											<td >{employees ? employees[this.id].position : null}
											</td>
										</tr>
										<tr>
											<th >Starting Date</th>
											<td >{employees ? employees[this.id].starting_date : null}
											</td>
										</tr>
										<tr>
											<th  >Employee Status</th>
											<td >{employees ? employees[this.id].status : null}
											</td>
										</tr>
										<tr>
											<th >Direct Manager</th>
											<td >{employees ? employees[this.id].direct_manager : null}
											</td>
										</tr>
										<tr>
											<th >Team</th><td >{employees ? employees[this.id].team : null}
											</td>
										</tr>
										<tr>
											<th >Location</th>
											<td >{employees ? employees[this.id].location : null}
											</td>
										</tr>
										<tr>
											<th >Public Holiday Group</th><td >{employees ? employees[this.id].public_holiday : null}
											</td>
										</tr>
										<tr>
											<th >Access Level</th>
											<td >{employees ? employees[this.id].access_level : null}
											</td>
										</tr>
										<tr>
											<th >Driving License #</th>
											<td >{employees ? employees[this.id].driving_license : null}
											</td>
										</tr>
										<tr>
											<th >Employee No.</th>
											<td >{employees ? employees[this.id].employee_number : null}
											</td>
										</tr>
										<tr>
											<th >LinkedIn</th>
											<td >{employees ? employees[this.id].linkedIn : null}
											</td>
										</tr>
										<tr>
											<th >Skype</th>
											<td >{employees ? employees[this.id].skype : null}
											</td>
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
						</div >


					</MuiDialogContent >
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
											<td >{employees ? employees[this.id].street_1 : null}</td>
										</tr>
										<tr>
											<th  >Street 2</th>
											<td >{employees ? employees[this.id].street_2 : null}</td>
										</tr>
										<tr>
											<th >City</th>
											<td>{employees ? employees[this.id].city : null}</td>
										</tr>
										<tr>
											<th >State</th>
											<td>{employees ? employees[this.id].state : null}</td>
										</tr>
										<tr>
											<th >PostCode</th>
											<td>{employees ? employees[this.id].postal_code : null}</td>
										</tr>
										<tr>
											<th >Country</th>
											<td>{employees ? employees[this.id].country : null}</td>
										</tr>
										<tr>
											<th  >Nationality</th>
											<td>{employees ? employees[this.id].nationality : null}</td>
										</tr>
										<tr>
											<th >Home Phone</th>
											<td>{employees ? employees[this.id].home_no : null}</td>
										</tr>
										<tr>
											<th >Mobile Phone</th>
											<td>{employees ? employees[this.id].mobile_no : null}</td>
										</tr>
										<tr>
											<th >Location</th>
											<td>{employees ? employees[this.id].location : null}</td>
										</tr>
										<tr>
											<th >Personal Email</th>
											<td>{employees ? employees[this.id].personal_email : null}</td>
										</tr>
										<tr>
											<th >Gender</th>
											<td>{employees ? employees[this.id].gender : null}</td>
										</tr>
										<tr>
											<th >Marital Status</th>
											<td>{employees ? employees[this.id].marital_status : null}</td>
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

							<button type="submit" class="btn btn-default yesBtn"
								onClick={()=>{
									this.props.deleteEmp(employees[this.id]._id)
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
						<AddEmployeeForm close={this.closeTab} />

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
		deleteEmp: (id)=>{
			dispatch(deleteEmployee(id))
		}
	})
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddEmployee));
export let employeeList