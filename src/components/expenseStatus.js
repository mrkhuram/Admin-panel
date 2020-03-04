
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';




const ExpenseList

	= (props) => {
		const [activeTab, setActiveTab] = useState('1');

		const toggle = tab => {
			if (activeTab !== tab) setActiveTab(tab);
		}

		const onChangeHandler = () => {

		}

		const [startDate, setStartDate] = useState(new Date())


		const handleChange = date => {
			setStartDate(date)
		};

		const nextMove = e => {
			e.preventDefault()
			toggle('2')

		}

		const articlesList = [
			{
				name: 'john',
				addedBy: 'Admin',
				addedOn: '20/1/2019',
				status: 'pending',
				fStatus: 'pending'
			},
			{
				name: 'john',
				addedBy: 'Admin',
				addedOn: '20/1/2019',
				status: 'pending',
				fStatus: 'Approved'
			},
			{
				name: 'john',
				addedBy: 'Admin',
				addedOn: '20/1/2019',
				status: 'pending',
				fStatus: 'pending'
			},
			{
				name: 'john',
				addedBy: 'Admin',
				addedOn: '20/1/2019',
				status: 'pending',
				fStatus: 'Rejected'
			},


		]


		return (
			<div>


				{/* Tab 1 Start*/}

				<TabContent activeTab={activeTab}>
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
												<form class="form-inline form-searchbar">
													<div class="form-group">
														<input type="text" class="form-control" placeholder="Search Expense.." />
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

														fontSize: 18,
														border: 'none',
														marginLeft: 15
													}}
												>
													<NavItem>
														<NavLink
															className={activeTab == '1' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('1'); }}
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
															className={activeTab == '2' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('2'); }}
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
															className={activeTab == '3' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('3'); }}
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
															className={activeTab == '4' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('4'); }}
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
														{articlesList ?
															articlesList.map((item, index) => {
																return <tr>
																	<td>{index + 1}</td>
																	<td>{item.name}</td>
																	<td>{item.addedBy}</td>

																	<td>{item.addedOn}</td>
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
												<form class="form-inline form-searchbar">
													<div class="form-group">
														<input type="text" class="form-control" placeholder="Search Expense.." />
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
														fontSize: 18,
														border: 'none',
														marginLeft: 15
													}}
												>
													<NavItem>
														<NavLink
															className={activeTab == '1' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('1'); }}
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
															className={activeTab == '2' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('2'); }}
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
															className={activeTab == '3' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('3'); }}
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
															className={activeTab == '4' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('4'); }}
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
												<table class="table table-bordered">
													<tbody>
														<tr>
															<th class="active" width="50">S#</th>
															<th class="active" width="200">Expense Name</th>
															<th class="active" width="100">Approved By</th>
															<th class="active" width="100">Approved on</th>

														</tr>
														{articlesList ?
															articlesList.map((item, index) => {
																return <tr>
																	<td>{index + 1}</td>
																	<td>{item.name}</td>

																	<td>{item.addedBy}</td>

																	<td>{item.addedOn}</td>


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
												<form class="form-inline form-searchbar">
													<div class="form-group">
														<input type="text" class="form-control" placeholder="Search Expense.." />
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

														fontSize: 18,
														border: 'none',
														marginLeft: 15
													}}
												>
													<NavItem>
														<NavLink
															className={activeTab == '1' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('1'); }}
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
															className={activeTab == '2' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('2'); }}
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
															className={activeTab == '3' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('3'); }}
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
															className={activeTab == '4' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('4'); }}
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
												<table class="table table-bordered">
													<tbody>
														<tr>
															<th class="active" width="50">S#</th>
															<th class="active" width="200">Expense Name</th>
															<th class="active" width="100">Rejected By</th>
															<th class="active" width="100">Rejected on</th>

														</tr>
														{articlesList ?
															articlesList.map((item, index) => {
																return <tr>
																	<td>{index + 1}</td>
																	<td>{item.name}</td>

																	<td>{item.addedBy}</td>

																	<td>{item.addedOn}</td>


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
												<form class="form-inline form-searchbar">
													<div class="form-group">
														<input type="text" class="form-control" placeholder="Search Expense.." />
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
														fontSize: 18,
														border: 'none',
														marginLeft: 15
													}}
												>
													<NavItem>
														<NavLink
															className={activeTab == '1' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('1'); }}
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
															className={activeTab == '2' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('2'); }}
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
															className={activeTab == '3' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('3'); }}
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
															className={activeTab == '4' ? 'activeTab' : 'noneActiveTab'}
															onClick={() => { toggle('4'); }}
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
														{articlesList ?
															articlesList.map((item, index) => {
																return <tr>
																	<td>{index + 1}</td>
																	<td>{item.name}</td>
																	<td>{item.addedBy}</td>


																	<td>{item.addedOn}</td>
																	<td>{item.fStatus}</td>

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

				{/* Tab 4 End*/}

				</TabContent>
			</div>
		);
	}

export default ExpenseList