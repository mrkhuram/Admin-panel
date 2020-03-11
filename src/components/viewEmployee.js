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

class ViewEmployee extends React.Component {
	constructor(props) {
		super(props)
		console.log(props.employees);
		

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

	id = 2



	render() {
	
		let { employees } = this.props
		return (
			<>

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
											<td >{employees ? employees.title : null}
											</td>
										</tr>
										<tr>
											<th  >Employee Name</th>
											<td >{employees ? employees.first_name + ' ' + employees.last_name: null}
											</td>
										</tr>
										<tr>
											<th >Work Email</th>
											<td >{employees ? employees.email : null}
											</td>									</tr>
										<tr>
											<th >Phone</th>
											<td >{employees ? employees.ph_no : null}
											</td>
										</tr>
										<tr>
											<th >Position</th>
											<td >{employees ? employees.position : null}
											</td>
										</tr>
										<tr>
											<th >Starting Date</th>
											<td >{employees ? employees.starting_date : null}
											</td>
										</tr>
										<tr>
											<th  >Employee Status</th>
											<td >{employees ? employees.employee_status : null}
											</td>
										</tr>
										<tr>
											<th >Direct Manager</th>
											<td >{employees ? employees.direct_manager : null}
											</td>
										</tr>
										<tr>
											<th >Team</th><td >{employees ? employees.team : null}
											</td>
										</tr>
										<tr>
											<th >Location</th>
											<td >{employees ? employees.location : null}
											</td>
										</tr>
										<tr>
											<th >Public Holiday Group</th><td >{employees ? employees.public_holiday_group : null}
											</td>
										</tr>
										<tr>
											<th >Access Level</th>
											<td >{employees ? employees.access_level : null}
											</td>
										</tr>
										<tr>
											<th >Driving License #</th>
											<td >{employees ? employees.driving_license : null}
											</td>
										</tr>
										<tr>
											<th >Employee No.</th>
											<td >{employees ? employees.employee_number : null}
											</td>
										</tr>
										<tr>
											<th >LinkedIn</th>
											<td >{employees ? employees.linkedIn : null}
											</td>
										</tr>
										<tr>
											<th >Skype</th>
											<td >{employees ? employees.skype : null}
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
											this.props.handleClose('openPop')

											this.props.handleClickOpen('open')
										}}
									><i class="fa fa-search"></i> Next</button>
								</Link>

							</div>
						</div >


		


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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewEmployee));
export let employeeList