import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { blogsAndArticles,approveAnArticle,deleteAnArticle } from '../../redux/action/adminAction'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt, faTimesCircle } from '@fortawesome/free-regular-svg-icons';



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



class BlogsAndArticalsAdmin extends React.Component {
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
		openPop: false
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
								<h2 class="section-title"
									style={{
										marginLeft: 10
									}}
									title='Company Name'
								>(John)</h2>
							</div>
							<div class="col-xs-12 col-md-6">
								<form class="form-inline form-searchbar">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Search Employee.." />
									</div>
									<button type="submit" class="btn btn-default">Search</button>
									{/* <a href="#" class="btn btn-default"
								onClick={() => {
									this.handleClickOpen('openPop')
								}}
								><i class="fa fa-plus"></i>
									Add Employee</a> */}
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

														{/* <a class="badge red" 
											 onClick={() => {
												this.deleteItem(index, item._id)
											}}
											> <i class="fa fa-trash"></i> Delete</a> */}
														<Link to='#'
															onClick={() => {
																this.handleClickOpen('openPop')
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
						<div className="content-wrapper"
							style={{
								padding: 30,
								overflowY: 'hidden'
							}}
						>
							<div id="order_preview" className="wow fadeInUp content_box"
								style={{
									visibility: "visible", animationName: "fadeInUp", padding: 40,

								}}>
								<div className="row table-header">
									<div className="col-xs-12 col-md-12"
										style={{
											textAlign: 'center'
										}}
									>
										<h2 className="section-title">Add New Employee

										</h2>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12 col-md-12">
										<form>
											<div className="form-group">
												<label for="pwd">Employee Name:</label>
												<input type="text" className="form-control" />
											</div>
											<div className="form-group">
												<label for="pwd">Added By:</label>
												<input type="text" className="form-control" />
											</div>
											{/* <Hello /> */}
											<button type="submit" className="btn btn-default noBtn"
												style={{ margin: 'auto', float: 'right' }}
											>Add</button>
										</form>
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
let mapStateToProps = (store) => {

	return {
		admin: store.AdminReducer
	}
}

let mapDispatchToProps = (dispatch) => {

	return ({

	})
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogsAndArticalsAdmin));

export default BlogsAndArticalsAdmin
