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
import { deleteEmployee } from '../redux/actions/employeeAction'
import ViewEmployee from './viewEmployee';
import ViewEmployeeTwo from './viewEmployeeTwo';
import CircularProgress from '@material-ui/core/CircularProgress';



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
						employees: res.data.employees,
						allEmployees: res.data.employees
					})
				})
				.catch(err => {
					console.log(err)
					this.setState({
						employees: []
					})
				}
				)
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


	searchItem = (e) => {

		let searchVal = e.target.value
		if (searchVal !== '') {
			let searchedItems = this.state.employees.filter((item) => {
				return item.first_name.toLowerCase().includes(searchVal.toLowerCase())

			})
			console.log(searchedItems);

			this.setState({
				employees: searchedItems
			})
		} else {
			this.setState({
				employees: this.state.allEmployees
			})
		}

	}
	searchBtn = (e) => {
		e.preventDefault()
		console.log(this.searchingItem);


		if (this.searchingItem.length !== 0) {

			this.setState({
				employees: this.searchingItem
			})

		}


	}


	render() {

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
										<input type="text" class="form-control" placeholder="Search Group.."
											onChange={this.searchItem}
										/>
									</div>
									<button type="submit" class="btn btn-default"
										onClick={this.searchBtn}
									>Search</button>
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
								{
									this.state.employees ?
										<table class="table table-bordered">
											<tbody>
												<tr>
													<th class="active" width="50">S#</th>
													<th class="active" width="200">Employee Name</th>
													<th class="active" width="100">Added By</th>
													<th class="active" width="100">Added on</th>

													<th class="active" width="200">Action</th>
												</tr>
												{
													this.state.employees.length !== 0 ?
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
																			this.setState({
																				item: item
																			})
																			this.handleClickOpen('openPop')


																		}}
																		to='#'
																		class="badge blue" > <FontAwesomeIcon icon={faEye} className='iconCompany' /> </Link>

																	<Link
																		to='#'
																		class="badge del link" data-toggle="modal" data-target="#myModal"
																		onClick={() => {
																			this.setState({
																				item: item
																			})
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
														})
														:
														<tr>
															<td
																colSpan="6"
																style={{
																	textAlign: 'center',
																	fontSize: 16
																}}
															>No item </td>
														</tr>
												}

											</tbody>
										</table>
										: <CircularProgress color="secondary"
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

						<ViewEmployee 
							employees={this.state.item}
							handleClose={this.handleClose}
							handleClickOpen={this.handleClickOpen}

						/>

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

						<ViewEmployeeTwo
   
							employees={this.state.item}
							handleClose={this.handleClose}
							handleClickOpen={this.handleClickOpen}
						/>


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
								onClick={() => {
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
						<EditEmployeeForm
							employees={this.state.item}
							handleClose={this.handleClose}
						// handleClickOpen={this.handleClickOpen}

						/>

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
		deleteEmp: (id) => {
			dispatch(deleteEmployee(id))
		}
	})
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddEmployee));
export let employeeList   