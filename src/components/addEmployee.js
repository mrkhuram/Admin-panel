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

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


// class Hello extends React.Component{
// 	render(){


// 				 React.createElement(React.Fragment, null, React.createElement("div", {
// 					className: "form-group"
// 				}, " ", React.createElement("label", {
// 					for: "pwd"
// 				}, "Employee Name:"), React.createElement("input", {
// 					type: "text",
// 					className: "form-control"
// 				})), React.createElement("div", {
// 					className: "form-group"
// 				}, React.createElement("label", {
// 					for: "pwd"
// 				}, "Added By:"), React.createElement("input", {
// 					type: "text",
// 					className: "form-control"
// 				})));


// 	}
// }



class AddEmployee extends React.Component {
	constructor(props) {
		super(props)
		// props.blogs()
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



	// state = {
	//     open: false,
	//     activeTab: 1,
	// }

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
	// componentDidMount() {
	//     setTimeout(() => {
	//         this.setState({
	// 			articlesList: this.props.admin.articles
	//         })
	//     },1500);


	// }
	// shouldComponentUpdate(newProps, newState) {
	// 	return true;
	// }
	onChangeHandler = (e) => {
		this.setState({
			checked: !this.state.checked
		})

	}
	deleteItem = (index, id) => {
		// console.log(id);
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

				{/* <Nav tabs
					style={{
						marginBottom: 20
					}}
				>

					<NavItem>
						<NavLink
							className={classnames({ active: activeTab === '1' })}
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

							>Employee Detail</span>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: activeTab === '2' })}
							onClick={() => { this.toggle('2'); }}
							style={{
								margin: 0,
								marginTop: 10,
								color: "#5a5a5a",
								fontWeight: "normal",
								cursor: 'pointer'

							}}
						>
							Personal Detail
                        </NavLink>
					</NavItem>
				</Nav> */}
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
						{/* {this.props.admin.msg} */}
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
													{/* <td>{item.description}</td> */}
													{/* <td>James Hod</td> */}
													<td>{item.addedBy}</td>

													<td>{item.addedOn}</td>

													<td>
														{/* <a class="badge blue"> <i class="fa fa-external-link"></i> View Detail</a> */}
														<Link
															//  to='/admin/clientDetail' 
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
									// to='/addEmployee'
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
										// marginTop: -30,
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
								{/* 
								<Link
									to='/addEmployee'
									className='link'
								>
									<button type="submit" class="btn btn-default "
										style={{
											marginLeft: 30
										}}
										onClick={() => {
											this.handleClose('open')
										}}
									><i class="fa fa-search"></i> Close </button>
								</Link> */}

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
							{/* <FontAwesomeIcon icon={faTimesCircle}
                                    style={{
                                        fontSize: 35,
                                        color: 'red',

                                    }}
                                /> */}
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






// import React, { useState } from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom';
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// import IntlTelInput from 'react-intl-tel-input';
// import 'react-intl-tel-input/dist/main.css';




// const AddEmployee

// 	= (props) => {
// 		const [activeTab, setActiveTab] = useState('1');

// 		const toggle = tab => {
// 			if (activeTab !== tab) setActiveTab(tab);
// 		}

// 		const onChangeHandler = () => {

// 		}

// 		const [startDate, setStartDate] = useState(new Date())


// 		const handleChange = date => {
// 			setStartDate(date)
// 		};

// 		const nextMove = e => {
// 			e.preventDefault()
// 			toggle('2')

// 		}

// 		const articlesList = [
// 			{
// 				name: 'john',
// 				addedBy: 'Admin',
// 				addedOn: '20/1/2019'
// 			},
// 			{
// 				name: 'john',
// 				addedBy: 'Admin',
// 				addedOn: '20/1/2019'
// 			},
// 			{
// 				name: 'john',
// 				addedBy: 'Admin',
// 				addedOn: '20/1/2019'
// 			},
// 			{
// 				name: 'john',
// 				addedBy: 'Admin',
// 				addedOn: '20/1/2019'
// 			},


// 		]


// 		return (
// 			<div>
// 				<Nav tabs
// 					style={{
// 						marginBottom: 20,
// 						// backgroundColor: 'white',
// 						// height: 70,
// 						fontSize: 18
// 					}}
// 				>

// 					<NavItem>
// 						<NavLink
// 							className={classnames({ active: activeTab === '1' })}
// 							onClick={() => { toggle('1'); }}
// 							style={{
// 								margin: 0,
// 								marginTop: 10,
// 								color: "#5a5a5a",
// 								fontWeight: "normal",
// 								cursor: 'pointer'
// 							}}
// 						>
// 							<span

// 							>All Employee</span>
// 						</NavLink>
// 					</NavItem>
// 					<NavItem>
// 						<NavLink
// 							className={classnames({ active: activeTab === '2' })}
// 							onClick={() => { toggle('2'); }}
// 							style={{
// 								margin: 0,
// 								marginTop: 10,
// 								color: "#5a5a5a",
// 								fontWeight: "normal",
// 								cursor: 'pointer'

// 							}}
// 						>
// 							Approved Employee
//                         </NavLink>
// 					</NavItem>
// 					<NavItem>
// 						<NavLink
// 							className={classnames({ active: activeTab === '3' })}
// 							onClick={() => { toggle('3'); }}
// 							style={{
// 								margin: 0,
// 								marginTop: 10,
// 								color: "#5a5a5a",
// 								fontWeight: "normal",
// 								cursor: 'pointer'

// 							}}
// 						>
// 							Rejected Employee
//                         </NavLink>
// 					</NavItem>
// 				</Nav>
// 				<TabContent activeTab={activeTab}>
// 					<TabPane tabId="1">
// 						<Row>
// 							<Col sm="12" md='12'>
// 								<div class="content-wrapper">
// 									<div id="order_preview" class="wow fadeInUp content_box"
// 										style={{ visibility: 'visible', animationName: "fadeInUp" }}>
// 										<div class="row table-header">
// 											<div class="col-xs-12 col-md-6"
// 												style={{ display: 'flex' }}
// 											>
// 												<h2 class="section-title">Employee List</h2>

// 											</div>
// 											<div class="col-xs-12 col-md-6">
// 												<form class="form-inline form-searchbar">
// 													<div class="form-group">
// 														<input type="text" class="form-control" placeholder="Search Employee.." />
// 													</div>
// 													<button type="submit" class="btn btn-default">Search</button>
// 													<Link to="#" className="btn btn-default link"
// 														onClick={() => {
// 															this.handleClickOpen('addNew')
// 														}}
// 														style={{
// 															marginLeft: 20
// 														}}
// 													><i class="fa fa-plus"></i>
// 														Add Employee</Link>
// 												</form>
// 											</div>
// 										</div>
// 										{/* {this.props.admin.msg} */}
// 										<div class="row">
// 											<div class="col-xs-12 col-md-12">
// 												<table class="table table-bordered">
// 													<tbody>
// 														<tr>
// 															<th class="active" width="50">S#</th>
// 															<th class="active" width="200">Employee Name</th>
// 															<th class="active" width="100">Added By</th>
// 															<th class="active" width="100">Added on</th>

// 															<th class="active" width="200">Action</th>
// 														</tr>
// 														{articlesList ?
// 															articlesList.map((item, index) => {
// 																return <tr>
// 																	<td>{index + 1}</td>
// 																	<td>{item.name}</td>
// 																	{/* <td>{item.description}</td> */}
// 																	{/* <td>James Hod</td> */}
// 																	<td>{item.addedBy}</td>

// 																	<td>{item.addedOn}</td>

// 																	<td>
// 																		{/* <a class="badge blue"> <i class="fa fa-external-link"></i> View Detail</a> */}
// 																		<Link
// 																			//  to='/admin/clientDetail' 
// 																			onClick={() => {
// 																				this.handleClickOpen('openPop')
// 																			}}
// 																			to='#'
// 																			class="badge blue" > <FontAwesomeIcon icon={faEye} className='iconCompany' /> </Link>

// 																		<Link
// 																			to='#'
// 																			class="badge del link" data-toggle="modal" data-target="#myModal"
// 																			onClick={() => {
// 																				this.handleClickOpen('edit')
// 																			}}
// 																		>
// 																			<FontAwesomeIcon icon={faUserEdit} className='iconCompany' />
// 																		</Link>
// 																		<Link to='#'
// 																			onClick={() => {
// 																				this.handleClickOpen('delete')
// 																			}}
// 																			class="badge red" > <FontAwesomeIcon icon={faTrashAlt} className='iconCompany' /></Link>

// 																	</td>
// 																</tr>
// 															}) : <></>
// 														}

// 													</tbody>
// 												</table>
// 											</div>
// 										</div>
// 									</div>
// 								</div>

// 							</Col>

// 						</Row>
// 					</TabPane>
// 					<TabPane tabId="2">
// 						<Row>
// 							<Col sm="12" md='12'>
// 								<div class="content-wrapper">
// 									<div id="order_preview" class="wow fadeInUp content_box"
// 										style={{ visibility: 'visible', animationName: "fadeInUp" }}>
// 										<div class="row table-header">
// 											<div class="col-xs-12 col-md-6"
// 												style={{ display: 'flex' }}
// 											>
// 												<h2 class="section-title">Approved Employee List</h2>

// 											</div>
// 											<div class="col-xs-12 col-md-6">
// 												<form class="form-inline form-searchbar">
// 													<div class="form-group">
// 														<input type="text" class="form-control" placeholder="Search Employee.." />
// 													</div>
// 													<button type="submit" class="btn btn-default">Search</button>
// 													{/* <Link to="#" className="btn btn-default link"
// 														onClick={() => {
// 															this.handleClickOpen('addNew')
// 														}}
// 														style={{
// 															marginLeft: 20
// 														}}
// 													><i class="fa fa-plus"></i>
// 														Add Employee</Link> */}
// 												</form>
// 											</div>
// 										</div>
// 										{/* {this.props.admin.msg} */}
// 										<div class="row">
// 											<div class="col-xs-12 col-md-12">
// 												<table class="table table-bordered">
// 													<tbody>
// 														<tr>
// 															<th class="active" width="50">S#</th>
// 															<th class="active" width="200">Employee Name</th>
// 															<th class="active" width="100">Approved By</th>
// 															<th class="active" width="100">Approved on</th>

// 															<th class="active" width="200">Action</th>
// 														</tr>
// 														{articlesList ?
// 															articlesList.map((item, index) => {
// 																return <tr>
// 																	<td>{index + 1}</td>
// 																	<td>{item.name}</td>
// 																	{/* <td>{item.description}</td> */}
// 																	{/* <td>James Hod</td> */}
// 																	<td>{item.addedBy}</td>

// 																	<td>{item.addedOn}</td>

// 																	<td>
// 																		{/* <a class="badge blue"> <i class="fa fa-external-link"></i> View Detail</a> */}
// 																		<Link
// 																			//  to='/admin/clientDetail' 
// 																			onClick={() => {
// 																				this.handleClickOpen('openPop')
// 																			}}
// 																			to='#'
// 																			class="badge blue" > <FontAwesomeIcon icon={faEye} className='iconCompany' /> </Link>

// 																		<Link
// 																			to='#'
// 																			class="badge del link" data-toggle="modal" data-target="#myModal"
// 																			onClick={() => {
// 																				this.handleClickOpen('edit')
// 																			}}
// 																		>
// 																			<FontAwesomeIcon icon={faUserEdit} className='iconCompany' />
// 																		</Link>
// 																		<Link to='#'
// 																			onClick={() => {
// 																				this.handleClickOpen('delete')
// 																			}}
// 																			class="badge red" > <FontAwesomeIcon icon={faTrashAlt} className='iconCompany' /></Link>

// 																	</td>
// 																</tr>
// 															}) : <></>
// 														}

// 													</tbody>
// 												</table>
// 											</div>
// 										</div>
// 									</div>
// 								</div>

// 							</Col>
// 						</Row>
// 					</TabPane>
// 					<TabPane tabId="3">
// 						<Row>
// 							<Col sm="12" md='12'>
// 								<div class="content-wrapper">
// 									<div id="order_preview" class="wow fadeInUp content_box"
// 										style={{ visibility: 'visible', animationName: "fadeInUp" }}>
// 										<div class="row table-header">
// 											<div class="col-xs-12 col-md-6"
// 												style={{ display: 'flex' }}
// 											>
// 												<h2 class="section-title">Rejected Employee List</h2>

// 											</div>
// 											<div class="col-xs-12 col-md-6">
// 												<form class="form-inline form-searchbar">
// 													<div class="form-group">
// 														<input type="text" class="form-control" placeholder="Search Employee.." />
// 													</div>
// 													<button type="submit" class="btn btn-default">Search</button>
// 													{/* <Link to="#" className="btn btn-default link"
// 														onClick={() => {
// 															this.handleClickOpen('addNew')
// 														}}
// 														style={{
// 															marginLeft: 20
// 														}}
// 													><i class="fa fa-plus"></i>
// 														Add Employee</Link> */}
// 												</form>
// 											</div>
// 										</div>
// 										{/* {this.props.admin.msg} */}
// 										<div class="row">
// 											<div class="col-xs-12 col-md-12">
// 												<table class="table table-bordered">
// 													<tbody>
// 														<tr>
// 															<th class="active" width="50">S#</th>
// 															<th class="active" width="200">Employee Name</th>
// 															<th class="active" width="100">Rejected By</th>
// 															<th class="active" width="100">Rejected on</th>

// 															<th class="active" width="200">Action</th>
// 														</tr>
// 														{articlesList ?
// 															articlesList.map((item, index) => {
// 																return <tr>
// 																	<td>{index + 1}</td>
// 																	<td>{item.name}</td>
// 																	{/* <td>{item.description}</td> */}
// 																	{/* <td>James Hod</td> */}
// 																	<td>{item.addedBy}</td>

// 																	<td>{item.addedOn}</td>

// 																	<td>
// 																		{/* <a class="badge blue"> <i class="fa fa-external-link"></i> View Detail</a> */}
// 																		<Link
// 																			//  to='/admin/clientDetail' 
// 																			onClick={() => {
// 																				this.handleClickOpen('openPop')
// 																			}}
// 																			to='#'
// 																			class="badge blue" > <FontAwesomeIcon icon={faEye} className='iconCompany' /> </Link>

// 																		<Link
// 																			to='#'
// 																			class="badge del link" data-toggle="modal" data-target="#myModal"
// 																			onClick={() => {
// 																				this.handleClickOpen('edit')
// 																			}}
// 																		>
// 																			<FontAwesomeIcon icon={faUserEdit} className='iconCompany' />
// 																		</Link>
// 																		<Link to='#'
// 																			onClick={() => {
// 																				this.handleClickOpen('delete')
// 																			}}
// 																			class="badge red" > <FontAwesomeIcon icon={faTrashAlt} className='iconCompany' /></Link>

// 																	</td>
// 																</tr>
// 															}) : <></>
// 														}

// 													</tbody>
// 												</table>
// 											</div>
// 										</div>
// 									</div>
// 								</div>

// 							</Col>
// 						</Row>
// 					</TabPane>
// 				</TabContent>
// 			</div>
// 		);
// 	}

// export default AddEmployee