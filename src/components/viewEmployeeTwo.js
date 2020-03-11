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

class ViewEmployeeTwo extends React.Component {
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


								{/* {
									employees.personal_information.map((item, ind) => {
										return <tr>
											<th 
												style={{textTransform: 'capitalize'}}
											> {item.name}</th>
											<td 
												style={{textTransform: 'capitalize'}}
											
											>{item.value}</td>
										</tr>
									})

								} */}
								<tr>
									<th  >Street 1</th>
									<td >{employees ? employees.street1 : null}</td>
								</tr>
								<tr>
									<th  >Street 2</th>
									<td >{employees ? employees.street2 : null}</td>
								</tr>
								<tr>
									<th >City</th>
									<td>{employees ? employees.city : null}</td>
								</tr>
								<tr>
									<th >State</th>
									<td>{employees ? employees.state : null}</td>
								</tr>
								<tr>
									<th >PostCode</th>
									<td>{employees ? employees.postal_code : null}</td>
								</tr>
								<tr>
									<th >Country</th>
									<td>{employees ? employees.country : null}</td>
								</tr>
								<tr>
									<th  >Nationality</th>
									<td>{employees ? employees.nationality : null}</td>
								</tr>
								<tr>
									<th >Home Phone</th>
									<td>{employees ? employees.home_phone : null}</td>
								</tr>
								<tr>
									<th >Mobile Phone</th>
									<td>{employees ? employees.mobile_phone : null}</td>
								</tr>
								<tr>
									<th >Location</th>
									<td>{employees ? employees.location : null}</td>
								</tr>
								<tr>
									<th >Personal Email</th>
									<td>{employees ? employees.personal_email : null}</td>
								</tr>
								<tr>
									<th >Gender</th>
									<td>{employees ? employees.gender : null}</td>
								</tr>
								<tr>
									<th >Marital Status</th>
									<td>{employees ? employees.meterial_status : null}</td>
								</tr>



								<tr>
								</tr>
							</tbody>
						</table>


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
		deleteEmp: (id) => {
			dispatch(deleteEmployee(id))
		}
	})
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewEmployeeTwo));
export let employeeList