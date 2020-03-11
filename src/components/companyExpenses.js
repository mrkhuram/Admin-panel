
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';
import axios from 'axios'
import { approveByAdmin, rejectByAdmin } from '../redux/actions/employeeAction'
import CircularProgress from '@material-ui/core/CircularProgress';



class CompanyExpenses extends React.Component {

	constructor(props) {
		super(props)

		getExpenseList = () => {

			let header = {
				headers: {
					'Content-Type': 'application/json',
					"x-sh-auth": localStorage.getItem('token')
				}
			}
			axios.get('https://mr-expense-backend.herokuapp.com/expenses/get_all_Expenses', header)
				.then(res => {
					console.log(res.data);
					this.setState({
						expenses: null
					})
					let expesnes = res.data.expenses
					expesnes.forEach((item) => {
						if (item.approved) {
							this.setState({ approved: [...this.state.approved, item],
								approvedAll: [...this.state.approved, item] })
							return true
						}
						if (item.rejected) {
							this.setState({ rejected: [...this.state.rejected, item],
								rejectedAll: [...this.state.rejected, item] })

							return true

						}
						if (!item.approved) {
							this.setState({ pending: [...this.state.pending, item],
								pendingAll: [...this.state.pending, item] })

							return true

						}
						console.log(item);


					})

					this.setState({
						expenses: res.data.expenses,
						allExpenses: res.data.expenses
					})
				})
		}

		// expenseGroupErr()
		// addExpenseGroupSuccess()
		getExpenseList()
	}

	state = {
		activeTab: '1',
		expenses: null,
		approved: [],
		rejected: [],
		pending: []

	}

	toggle = tab => {
		if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
	}


	// notifyErr = () => toast.error("Sorry your request didn't complete , Try Again.", { autoClose: 2000 })
	// notifySuccess = () => toast.success("Successfully Added", { autoClose: 2000 })



	searchedItems = []

	searchItem = (e) => {

		let searchVal = e.target.value
		if (searchVal !== '') {
			this.searchedItems = this.state.expenses.filter((item) => {
				return item.title.toLowerCase().includes(searchVal.toLowerCase())

			})
			console.log(this.searchedItems);

			this.setState({
				expenses: this.searchedItems
			})
		} else {
			this.setState({
				expenses: this.state.allExpenses
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


	pendingSearch = (e)=>{
		let searchVal = e.target.value
		if (searchVal !== '') {
			this.searchedItems = this.state.pending.filter((item) => {
				return item.title.toLowerCase().includes(searchVal.toLowerCase())

			})
			console.log(this.searchedItems);

			this.setState({
				pending: this.searchedItems
			})
		} else {
			this.setState({
				pending: this.state.pendingAll
			})
		}
	}

	approvedSearch = (e)=>{
		let searchVal = e.target.value
		if (searchVal !== '') {
			this.searchedItems = this.state.approved.filter((item) => {
				return item.title.toLowerCase().includes(searchVal.toLowerCase())

			})
			console.log(this.searchedItems);

			this.setState({
				approved: this.searchedItems
			})
		} else {
			this.setState({
				approved: this.state.approvedAll
			})
		}
	}

	rejectedSearch = (e)=>{
		let searchVal = e.target.value
		if (searchVal !== '') {
			this.searchedItems = this.state.rejected.filter((item) => {
				return item.title.toLowerCase().includes(searchVal.toLowerCase())

			})
			console.log(this.searchedItems);

			this.setState({
				rejected: this.searchedItems
			})
		} else {
			this.setState({
				rejected: this.state.rejectedAll
			})
		}
	}

	render() {
		
		
		return (
			<div>

				{/* Tab 1 Start*/}

				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<Row>
							<Col sm="12" md='12'>
								<div class="content-wrapper">
									<div id="order_preview" class="wow fadeInUp content_box"
										style={{ visibility: 'visible', animationName: "fadeInUp" }}>
										<div class="row table-header">
											<div class="col-xs-12 col-md-6"
												style={{ display: 'flex' }}
											>
												<h2 class="section-title">Pending Expense</h2>

											</div>

											<div class="col-xs-12 col-md-6">
												<form class="form-inline form-searchbar" onSubmit={(e)=>{
													e.preventDefault()
												}}>
													<div class="form-group">
														<input type="text" class="form-control"
															placeholder="Search Expense.."
															onChange={this.pendingSearch}

														/>
													</div>
													<button type="submit" class="btn btn-default">Search</button>

												</form>
											</div>
										</div>



										{/* Tabs Section */}

										<Row>
											<>
												<Nav tabs
													style={{

														fontSize: 16,
														border: 'none',
														marginLeft: 15
													}}
												>
													<NavItem>
														<NavLink
															className={this.state.activeTab == '1' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('1'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'
															}}
														>
															<span

															>Pending</span>
														</NavLink>
													</NavItem>
													<NavItem>
														<NavLink
															className={this.state.activeTab == '2' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('2'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'

															}}
														>
															Approved Expense
                        								</NavLink>
													</NavItem>
													<NavItem>
														<NavLink
															className={this.state.activeTab == '3' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('3'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'
															}}
														>
															<span

															>Rejected Expenses</span>
														</NavLink>
													</NavItem>

													<NavItem>
														<NavLink
															className={this.state.activeTab == '4' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('4'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'

															}}
														>
															All Expense
                        								</NavLink>
													</NavItem>
												</Nav>
											</>
										</Row>

										{/* Tabs End */}




										<div class="row">
											<div class="col-xs-12 col-md-12">
												{
													this.state.pending ?
														<table class="table table-bordered">
															<tbody>
																<tr>
																	<th class="active" width="50">S#</th>
																	<th class="active" width="200">Expense Name</th>
																	<th class="active" width="100">Added By</th>
																	<th class="active" width="100">Added on</th>
																	<th class="active" width="100">Status</th>
																	<th class="active" width="100">Action</th>

																</tr>
																{this.state.pending.length !== 0 ?
																	this.state.pending.map((item, index) => {
																		return <tr>
																			<td>{index + 1}</td>
																			<td>{item.title}</td>
																			<td>{item.user.employee_name}</td>

																			<td>{item.submit_date}</td>
																			<td>{item.status}</td>

																			<td>
																				<Link
																					to='#'
																					title="Approve"
																					class="badge blue"

																					onClick={() => {
																						this.props.approved(item._id)
																					}}

																				> <FontAwesomeIcon icon={faCheck} className='iconCompany' /> </Link>


																				<Link to='#'
																					title="Reject"

																					onClick={() => {
																						this.props.reject(item._id)
																					}}
																					class="badge red"
																				> <FontAwesomeIcon icon={faTimes} className='iconCompany' /></Link>

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
														:

														<CircularProgress color="secondary"
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

							</Col>

						</Row>
					</TabPane>

					{/* Tab 1 End*/}



					{/* Tab 2 Start*/}

					<TabPane tabId="2">
						<Row>
							<Col sm="12" md='12'>
								<div class="content-wrapper">
									<div id="order_preview" class="wow fadeInUp content_box"
										style={{ visibility: 'visible', animationName: "fadeInUp" }}>
										<div class="row table-header">
											<div class="col-xs-12 col-md-6"
												style={{ display: 'flex' }}
											>
												<h2 class="section-title">Approved Expense </h2>

											</div>
											<div class="col-xs-12 col-md-6">
												<form class="form-inline form-searchbar" 
												onSubmit={(e)=>{
													e.preventDefault()
												}}>
													<div class="form-group">
														<input type="text" 
														class="form-control" placeholder="Search Expense.." 
														onChange={this.approvedSearch}
														/>
													</div>
													<button type="submit" class="btn btn-default">Search</button>
												</form>
											</div>
										</div>



										{/* Tabs Section */}

										<Row>
											<>
												<Nav tabs
													style={{
														fontSize: 16,
														border: 'none',
														marginLeft: 15
													}}
												>
													<NavItem>
														<NavLink
															className={this.state.activeTab == '1' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('1'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'
															}}
														>
															<span

															>Pending</span>
														</NavLink>
													</NavItem>
													<NavItem>
														<NavLink
															className={this.state.activeTab == '2' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('2'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'

															}}
														>
															Approved Expense
                        								</NavLink>
													</NavItem>
													<NavItem>
														<NavLink
															className={this.state.activeTab == '3' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('3'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'
															}}
														>
															<span

															>Rejected Expenses</span>
														</NavLink>
													</NavItem>

													<NavItem>
														<NavLink
															className={this.state.activeTab == '4' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('4'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'

															}}
														>
															All Expense
                        								</NavLink>
													</NavItem>
												</Nav>
											</>
										</Row>

										{/* Tabs End */}



										<div class="row">
											<div class="col-xs-12 col-md-12">
												{this.state.approved ?
													<table class="table table-bordered">
														<tbody>
															<tr>
																<th class="active" width="50">S#</th>
																<th class="active" width="200">Expense Name</th>
																<th class="active" width="100">Approved By</th>
																<th class="active" width="100">Approved on</th>

															</tr>
															{this.state.approved.length !== 0 ?

																this.state.approved.map((item, index) => {
																	return <tr>
																		<td>{index + 1}</td>
																		<td>{item.title}</td>

																		<td>{item.user.employee_name}</td>

																		<td>{item.submit_date}</td>


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

							</Col>
						</Row>
					</TabPane>

					{/* Tab 2 End*/}




					{/* Tab 3 Start*/}


					<TabPane tabId="3">
						<Row>
							<Col sm="12" md='12'>
								<div class="content-wrapper">
									<div id="order_preview" class="wow fadeInUp content_box"
										style={{ visibility: 'visible', animationName: "fadeInUp" }}>
										<div class="row table-header">
											<div class="col-xs-12 col-md-6"
												style={{ display: 'flex' }}
											>
												<h2 class="section-title">Rejected Expense </h2>

											</div>
											<div class="col-xs-12 col-md-6">
												<form class="form-inline form-searchbar" 
												onSubmit={(e)=>{
													e.preventDefault()
												}}>
													<div class="form-group">
														<input type="text" class="form-control" 
														onChange={this.rejectedSearch}
														
														placeholder="Search Expense.." />
													</div>
													<button type="submit" class="btn btn-default">Search</button>

												</form>
											</div>
										</div>

										{/* Tabs Section */}

										<Row>
											<>
												<Nav tabs
													style={{

														fontSize: 16,
														border: 'none',
														marginLeft: 15
													}}
												>
													<NavItem>
														<NavLink
															className={this.state.activeTab == '1' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('1'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'
															}}
														>
															<span

															>Pending</span>
														</NavLink>
													</NavItem>
													<NavItem>
														<NavLink
															className={this.state.activeTab == '2' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('2'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'

															}}
														>
															Approved Expense
                        								</NavLink>
													</NavItem>
													<NavItem>
														<NavLink
															className={this.state.activeTab == '3' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('3'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'
															}}
														>
															<span

															>Rejected Expenses</span>
														</NavLink>
													</NavItem>

													<NavItem>
														<NavLink
															className={this.state.activeTab == '4' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('4'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'

															}}
														>
															All Expense
                        								</NavLink>
													</NavItem>
												</Nav>
											</>
										</Row>

										{/* Tabs End */}




										<div class="row">
											<div class="col-xs-12 col-md-12">
												{this.state.rejected ?
													<table class="table table-bordered">
														<tbody>
															<tr>
																<th class="active" width="50">S#</th>
																<th class="active" width="200">Expense Name</th>
																<th class="active" width="100">Rejected By</th>
																<th class="active" width="100">Rejected on</th>

															</tr>
															{
																this.state.rejected.length !== 0 ?
																	this.state.rejected.map((item, index) => {
																		return <tr>
																			<td>{index + 1}</td>
																			<td>{item.title}</td>

																			<td>{item.user.employee_name}</td>

																			<td>{item.submit_date}</td>


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

							</Col>
						</Row>
					</TabPane>
					{/* Tab 3 End*/}



					{/* Tab 4 Start*/}



					<TabPane tabId="4">
						<Row>
							<Col sm="12" md='12'>
								<div class="content-wrapper">
									<div id="order_preview" class="wow fadeInUp content_box"
										style={{ visibility: 'visible', animationName: "fadeInUp" }}>
										<div class="row table-header">
											<div class="col-xs-12 col-md-6"
												style={{ display: 'flex' }}
											>
												<h2 class="section-title">All Expense </h2>

											</div>
											<div class="col-xs-12 col-md-6">
												<form class="form-inline form-searchbar" 
												onSubmit={(e)=>{
													e.preventDefault()
												}}>
													<div class="form-group">
														<input type="text" class="form-control"
															placeholder="Search Expense.."
															onChange={this.searchItem}
														/>
													</div>
													<button type="submit" class="btn btn-default">Search</button>

												</form>
											</div>
										</div>

										{/* Tabs Section */}

										<Row>
											<>
												<Nav tabs
													style={{
														fontSize: 16,
														border: 'none',
														marginLeft: 15
													}}
												>
													<NavItem>
														<NavLink
															className={this.state.activeTab == '1' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('1'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'
															}}
														>
															<span

															>Pending</span>
														</NavLink>
													</NavItem>
													<NavItem>
														<NavLink
															className={this.state.activeTab == '2' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('2'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'

															}}
														>
															Approved Expense
                        								</NavLink>
													</NavItem>
													<NavItem>
														<NavLink
															className={this.state.activeTab == '3' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('3'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'
															}}
														>
															<span

															>Rejected Expenses</span>
														</NavLink>
													</NavItem>

													<NavItem>
														<NavLink
															className={this.state.activeTab == '4' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { this.toggle('4'); }}
															style={{
																margin: 0,
																marginTop: 10,
																color: "#5a5a5a",
																fontWeight: "normal",
																cursor: 'pointer'

															}}
														>
															All Expense
                        								</NavLink>
													</NavItem>
												</Nav>
											</>
										</Row>

										{/* Tabs End */}




										<div class="row">
											<div class="col-xs-12 col-md-12">
												{this.state.expenses ?
													<table class="table table-bordered">
														<tbody>
															<tr>
																<th class="active" width="50">S#</th>
																<th class="active" width="200">Expense Name</th>
																<th class="active" width="100">Added By</th>
																<th class="active" width="100">Added on</th>
																<th class="active" width="100">Status</th>
																{/* <th class="active" width="100">Action</th> */}

															</tr>
															{
																this.state.expenses.length !== 0 ?
																	this.state.expenses.map((item, index) => {
																		return <tr>
																			<td>{index + 1}</td>
																			<td>{item.title}</td>
																			<td>{item.user.employee_name}</td>


																			<td>{item.submit_date}</td>
																			<td>{item.status}</td>

																			{/* <td>
																		<Link
																			to='#'
																			title="Approve"
																			class="badge blue"

																			onClick={() => {
																				this.props.approved(item._id)
																			}}

																		> <FontAwesomeIcon icon={faCheck} className='iconCompany' /> </Link>


																		<Link to='#'
																			title="Reject"

																			onClick={() => {
																				this.props.reject(item._id)
																			}}
																			class="badge red"
																		> <FontAwesomeIcon icon={faTimes} className='iconCompany' /></Link>

																	</td> */}
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

							</Col>
						</Row>
					</TabPane>

					{/* Tab 4 End*/}

				</TabContent>
			</div>
		);
	}
}

let mapStateToProps = (store) => {

	return {
		admin: store.AdminReducer
	}
}

let mapDispatchToProps = (dispatch) => {

	return ({
		approved: id => {
			dispatch(approveByAdmin(id))
		},
		reject: id => {
			dispatch(rejectByAdmin(id))
		}
	})
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyExpenses));
export let expenseGroupErr, addExpenseGroupSuccess, getExpenseList  