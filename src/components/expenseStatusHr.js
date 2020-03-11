
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { act } from 'react-dom/test-utils';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';
import axios from 'axios'
import {approveByAdmin,rejectByAdmin} from '../redux/actions/employeeAction'



import Toast from 'light-toast';



class ExpenseHr extends React.Component {

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


		addExpenseGroupSuccess = () => {
			// this.notifySuccess()
			// this.handleClose('openPop')

		}
		expenseGroupErr = () => {
			// this.notifyErr()
			// this.handleClose('openPop')

		}
		expenseGroupErr()
		addExpenseGroupSuccess()
		getExpenseList()
	}

	state = {
		activeTab: '1',
		expenses: [],
		approved: [],
		rejected: [],
		pending: [],

	}

	toggle = tab => {
		if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
	}


	// notifyErr = () => toast.error("Sorry your request didn't complete , Try Again.", { autoClose: 2000 })
	// notifySuccess = () => toast.success("Successfully Added", { autoClose: 2000 })




	notification=(e) => {
		e.preventDefault()
		Toast.success('Successfully Added', 2000, () => {
		
		});
	  }

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

		let {pending,rejected,approved,expenses} = this.state
		return (
			<div>

				<TabContent activeTab={this.state.activeTab}>
					{/* Tab 1 Starthis.t */}
					<TabPane tabId="1">
						<Row>
							<Col sm="12" md='12'>
								<div class="content-wrapper">
									<div id="order_preview" class="wow fadeInUp content_box "
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
														<input type="text" class="form-control" onChange={this.pendingSearch} placeholder="Search Pending.." />
													</div>
													<button type="submit" class="btn btn-default"
													onClick={this.notification}
													>Search</button>

												</form>
											</div>
										</div>



										{/* Tabs Section Start */}

										<Row>
											<>
												<Nav tabs
													style={{

														fontSize: 18,
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

										{/* Tabs Section End */}




										<div class="row tableStatusHr">
											<div class="col-xs-12 col-md-12">
												<table class="table table-bordered">
													<tbody>
														<tr>
														<th class="active" width="50">S#</th>
															<th class="active" width="140">Expense Name</th>
															<th class="active" width="100">Added By</th>
															<th class="active" width="80">Added on</th>
															<th class="active" width="120">Comapny Approval </th>
															<th class="active" width="100">Approval date</th>
															<th class="active" width="80">HR Name</th>
															<th class="active" width="100">Status Changed On</th>

															<th class="active" width="80">Status</th>
															<th class="active" width="80">Action</th>

														</tr>
														{pending ?
															pending.map((item, index) => {
																return <tr>
																	<td>{index + 1}</td>
																	<td>{item.title}</td>

																	<td>{item.user.employee_name}</td>
																	<td>{item.submit_date}</td>
																	<td>{item.company_admin_name}</td>
																	<td>{item.company_approve_date}</td>
																	<td>{item.company_hr_name}</td>
																	<td>{item.hrapprove_date}</td>

																	<td>{item.status}</td>	

																	<td>
																		<Link

																			to='#'
																			title="Approve"
																			class="badge blue" > <FontAwesomeIcon icon={faCheck} className='iconCompany' /> </Link>


																		<Link to='#'

																			title="Reject"

																			class="badge red" > <FontAwesomeIcon icon={faTimes} className='iconCompany' /></Link>

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

							</Col>

						</Row>
					</TabPane>


					{/* Tab 1 End */}




					{/* Tab 2 Start */}
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
												<form class="form-inline form-searchbar" onSubmit={(e)=>{
													e.preventDefault()
												}}>
													<div class="form-group">
														<input type="text" class="form-control" onChange={this.approvedSearch} placeholder="Search Approved.." />
													</div>
													<button type="submit" class="btn btn-default">Search</button>

												</form>
											</div>
										</div>


																					{/* Tabs Section Start */}

										<Row>
											<>
												<Nav tabs
													style={{

														fontSize: 18,
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

										{/* Tabs Section End */}




										<div class="row">
											<div class="col-xs-12 col-md-12">
												<table class="table table-bordered">
													<tbody>
														<tr>
															<th class="active" width="50">S#</th>
															<th class="active" width="140">Expense Name</th>
															<th class="active" width="100">Added By</th>
															<th class="active" width="80">Added on</th>
															<th class="active" width="120">Comapny Approval </th>
															<th class="active" width="100">Approval date</th>
															<th class="active" width="80">HR Name</th>
															<th class="active" width="100">Status Changed On</th>

															<th class="active" width="80">Status</th>
															<th class="active" width="80">Action</th>

														</tr>
														{approved ?
															approved.map((item, index) => {
																return <tr>
																<td>{index + 1}</td>
																	<td>{item.title}</td>

																	<td>{item.user.employee_name}</td>
																	<td>{item.submit_date}</td>
																	<td>{item.company_admin_name}</td>
																	<td>{item.company_approve_date}</td>
																	<td>{item.company_hr_name}</td>
																	<td>{item.hrapprove_date}</td>

																	<td>{item.status}</td>

																	<td>
																		<Link

																			to='#'
																			title="Approve"
																			class="badge blue" > <FontAwesomeIcon icon={faCheck} className='iconCompany' /> </Link>


																		<Link to='#'

																			title="Reject"

																			class="badge red" > <FontAwesomeIcon icon={faTimes} className='iconCompany' /></Link>

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
							</Col>
						</Row>
					</TabPane>
					{/* Tab 2 End */}



					{/* Tab 3 Start */}
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
												<form class="form-inline form-searchbar" onSubmit={(e)=>{
													e.preventDefault()
												}}>
													<div class="form-group">
														<input type="text" class="form-control" onChange={this.rejectedSearch} placeholder="Search Rejected.." />
													</div>
													<button type="submit" class="btn btn-default">Search</button>

												</form>
											</div>
										</div>
																					{/* Tabs Section Start */}

										<Row>
											<>
												<Nav tabs
													style={{

														fontSize: 18,
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

										{/* Tabs Section End */}





										<div class="row">
											<div class="col-xs-12 col-md-12">
												<table class="table table-bordered">
													<tbody>
														<tr>
														<th class="active" width="50">S#</th>
															<th class="active" width="140">Expense Name</th>
															<th class="active" width="100">Added By</th>
															<th class="active" width="80">Added on</th>
															<th class="active" width="120">Comapny Approval </th>
															<th class="active" width="100">Approval date</th>
															<th class="active" width="80">HR Name</th>
															<th class="active" width="100">Status Changed On</th>

															<th class="active" width="80">Status</th>
															<th class="active" width="80">Action</th>

														</tr>
														{rejected ?
															rejected.map((item, index) => {
																return <tr>
																	<td>{index + 1}</td>
																	<td>{item.title}</td>

																	<td>{item.user.employee_name}</td>
																	<td>{item.submit_date}</td>
																	<td>{item.company_admin_name}</td>
																	<td>{item.company_approve_date}</td>
																	<td>{item.company_hr_name}</td>
																	<td>{item.hrapprove_date}</td>

																	<td>{item.status}</td>

																	<td>
																		<Link

																			to='#'
																			title="Approve"
																			class="badge blue" > <FontAwesomeIcon icon={faCheck} className='iconCompany' /> </Link>


																		<Link to='#'

																			title="Reject"

																			class="badge red" > <FontAwesomeIcon icon={faTimes} className='iconCompany' /></Link>

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

							</Col>
						</Row>
					</TabPane>


					{/* Tab 3 End */}




					{/* Tab 4 Start */}
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
												<form class="form-inline form-searchbar" onSubmit={(e)=>{
													e.preventDefault()
												}}>
													<div class="form-group">
														<input type="text" class="form-control" onChange={this.searchItem} placeholder="Search Expense.." />
													</div>
													<button type="submit" class="btn btn-default">Search</button>

												</form>
											</div>
										</div>
																					{/* Tabs Section Start */}

										<Row>
											<>
												<Nav tabs
													style={{

														fontSize: 18,
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

										{/* Tabs Section End */}





										<div class="row">
											<div class="col-xs-12 col-md-12">
												<table class="table table-bordered">
													<tbody>
														<tr>
														<th class="active" width="50">S#</th>
															<th class="active" width="140">Expense Name</th>
															<th class="active" width="100">Added By</th>
															<th class="active" width="80">Added on</th>
															<th class="active" width="120">Comapny Approval </th>
															<th class="active" width="100">Approval date</th>
															<th class="active" width="80">HR Name</th>
															<th class="active" width="100">Status Changed On</th>

															<th class="active" width="80">Status</th>
															<th class="active" width="80">Action</th>

														</tr>
														{expenses ?
															expenses.map((item, index) => {
																return <tr>
																	<td>{index + 1}</td>
																	<td>{item.title}</td>

																	<td>{item.user.employee_name}</td>
																	<td>{item.submit_date}</td>
																	<td>{item.company_admin_name}</td>
																	<td>{item.company_approve_date}</td>
																	<td>{item.company_hr_name}</td>
																	<td>{item.hrapprove_date}</td>

																	<td>{item.status}</td>

																	<td>
																		<Link

																			to='#'
																			title="Approve"
																			class="badge blue" > <FontAwesomeIcon icon={faCheck} className='iconCompany' /> </Link>


																		<Link to='#'

																			title="Reject"

																			class="badge red" > <FontAwesomeIcon icon={faTimes} className='iconCompany' /></Link>

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

							</Col>
						</Row>
					</TabPane>
					{/* Tab 1 End */}
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
		// approved: id =>{
		//     dispatch(approveByAdmin(id))
		// },
		// reject: id =>{
		//     dispatch(rejectByAdmin(id))
		// }
	})
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExpenseHr));
export let expenseGroupErr, addExpenseGroupSuccess, getExpenseList