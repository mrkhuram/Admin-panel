import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { allInvoices, deleteInvoice } from '../../redux/action/adminAction'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent'; 


class Invoices extends React.Component {
	constructor(props) {
		super(props)
		// props.invoicesList()
	}
	state = {
		invoices: '',
		msg: '',
		open: false
	}
	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.setState({
	// 			invoices: this.props.invoices.invoicesList
	// 		})
	// 		this.setState({
	// 			msg: this.props.invoices.msg
	// 		})

	// 		console.log(this.state);
	// 	}, 1500);


	// }
	shouldComponentUpdate(newProps, newState) {
		return true;
	}

	deleteItem = (index, id) => {
		console.log(id);
		this.state.invoices.splice(index, 1)
		this.setState({
			invoices: this.state.invoices
		})

		this.props.delete(id)
	}

	handleClickOpen = () => {
        this.setState({
            open: true
        })
    };
    handleClose = () => {
        this.setState({
            open: false
        })
    };
	render() {
		return (
			<>
				<div class="content-wrapper">
					<div class="wow fadeInUp content_box">
						<div class="row table-header">
							<div class="col-xs-12 col-md-6">
								<h2 class="section-title">Invoice List</h2>
							</div>
							<div class="col-xs-12 col-md-6">
								<form class="form-inline form-searchbar"
									action="http://test.hiddenlogics.com/action_page.php">
									<div class="form-group">
										<label for="email">Year</label>
										<select class="form-control">
											<option value="2020">2020</option>
											<option value="2019">2019</option>
											<option value="2018">2018</option>
											<option value="2017">2017</option>
											<option value="2016">2016</option>
											<option value="2015">2015</option>
											<option value="2014">2014</option>
											<option value="2013">2013</option>
											<option value="2012">2012</option>
											<option value="2011">2011</option>
											<option value="2010">2010</option>
											<option value="2009">2009</option>
											<option value="2008">2008</option>
											<option value="2007">2007</option>
											<option value="2006">2006</option>
											<option value="2005">2005</option>
											<option value="2004">2004</option>
											<option value="2003">2003</option>
											<option value="2002">2002</option>
											<option value="2001">2001</option>
											<option value="2000">2000</option>
											<option value="1999">1999</option>
											<option value="1998">1998</option>
											<option value="1997">1997</option>
											<option value="1996">1996</option>
											<option value="1995">1995</option>
											<option value="1994">1994</option>
											<option value="1993">1993</option>
											<option value="1992">1992</option>
											<option value="1991">1991</option>
											<option value="1990">1990</option>
											<option value="1989">1989</option>
											<option value="1988">1988</option>
											<option value="1987">1987</option>
											<option value="1986">1986</option>
											<option value="1985">1985</option>
											<option value="1984">1984</option>
											<option value="1983">1983</option>
											<option value="1982">1982</option>
											<option value="1981">1981</option>
											<option value="1980">1980</option>
											<option value="1979">1979</option>
											<option value="1978">1978</option>
											<option value="1977">1977</option>
											<option value="1976">1976</option>
											<option value="1975">1975</option>
											<option value="1974">1974</option>
											<option value="1973">1973</option>
											<option value="1972">1972</option>
											<option value="1971">1971</option>
											<option value="1970">1970</option>
											<option value="1969">1969</option>
											<option value="1968">1968</option>
											<option value="1967">1967</option>
											<option value="1966">1966</option>
											<option value="1965">1965</option>
											<option value="1964">1964</option>
											<option value="1963">1963</option>
											<option value="1962">1962</option>
											<option value="1961">1961</option>
											<option value="1960">1960</option>
											<option value="1959">1959</option>
											<option value="1958">1958</option>
											<option value="1957">1957</option>
											<option value="1956">1956</option>
											<option value="1955">1955</option>
											<option value="1954">1954</option>
											<option value="1953">1953</option>
											<option value="1952">1952</option>
											<option value="1951">1951</option>
											<option value="1950">1950</option>
											<option value="1949">1949</option>
											<option value="1948">1948</option>
											<option value="1947">1947</option>
											<option value="1946">1946</option>
											<option value="1945">1945</option>
											<option value="1944">1944</option>
											<option value="1943">1943</option>
											<option value="1942">1942</option>
											<option value="1941">1941</option>
											<option value="1940">1940</option>
											<option value="1939">1939</option>
											<option value="1938">1938</option>
											<option value="1937">1937</option>
											<option value="1936">1936</option>
											<option value="1935">1935</option>
											<option value="1934">1934</option>
											<option value="1933">1933</option>
											<option value="1932">1932</option>
											<option value="1931">1931</option>
											<option value="1930">1930</option>
										</select>
									</div>
									<div class="form-group">
										<label for="pwd">Month </label>
										<select class="form-control">
											<option value="1">All</option>
											<option value="January">January</option>
											<option value="Febuary">Febuary</option>
											<option value="March">March</option>
											<option value="April">April</option>
											<option value="May">May</option>
											<option value="June">June</option>
											<option value="July">July</option>
											<option value="August">August</option>
											<option value="September">September</option>
											<option value="October">October</option>
											<option value="November">November</option>
											<option value="December">December</option>
										</select>
									</div>
									<div class="form-group">
										<label for="pwd">Day </label>
										<select class="form-control">
											<option value="1">All</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
											<option value="8">8</option>
											<option value="9">9</option>
											<option value="10">10</option>
											<option value="11">11</option>
											<option value="12">12</option>
											<option value="13">13</option>
											<option value="14">14</option>
											<option value="15">15</option>
											<option value="16">16</option>
											<option value="17">17</option>
											<option value="18">18</option>
											<option value="19">19</option>
											<option value="20">20</option>
											<option value="21">21</option>
											<option value="22">22</option>
											<option value="23">23</option>
											<option value="24">24</option>
											<option value="25">25</option>
											<option value="26">26</option>
											<option value="27">27</option>
											<option value="28">28</option>
											<option value="29">29</option>
											<option value="30">30</option>
											<option value="31">31</option>
										</select>
									</div>
									<button type="submit" class="btn btn-default"><i class="fa fa-search"></i>
										Search</button>
								</form>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 col-md-12">
								<div class="table-responsive">
									<table class="table table-bordered">
										<tbody>
											<tr>
												<th class="active">S#</th>
												<th class="active">Invoice</th>
												<th class="active">Client Name</th>
												<th class="active">Date</th>
												<th class="active">Amount </th>
												<th class="active">Currency</th>
												<th class="active">Transection</th>
												<th class="active">Payment Method</th>
												<th class="active">Action</th>
											</tr>
											{this.state.invoices ?
												this.state.invoices.map((item, index) => {

													return <tr>
														<td>{index + 1}</td>
														<td>{item.invoice_name}</td>
														<td>Izabel</td>
														<td>{item.date}</td>
														<td>$50</td>
														<td>{item.currency}</td>
														<td>Completed</td>
														<td>{item.payment_method}</td>
														<td>
															<a class='badge del' data-toggle="modal" data-target="#myModal" 
															
															onClick={() => {
																
																this.deleteItem(index, item._id)
															}} 
															> <i
																class="fa fa-trash" ></i> Delete</a>
															<div class="dropdown">
																<button class="btn btn-primary dropdown-toggle" type="button"
																	data-toggle="dropdown">More
														<span class="caret"></span></button>
																<ul class="dropdown-menu">
																	<li><a href="#">Edit</a></li>
																	<li><a href="#">View Detail</a></li>
																</ul>
															</div>
														</td>
													</tr>
												})
												: <></>}

										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div id="myModal" class="modal fade delPopup" role="dialog">
						<div class="modal-dialog modal-sm">
							{/* <!-- Modal content--> */}
							<div class="modal-content">
								<div class="modal-body">
									<p><i class="fa fa-trash"></i><br />Are you sure you want to delete</p>
									<p>
										<button type="button" class="btn btn-default yes" data-dismiss="modal">Yes</button>
										<button type="button" class="btn btn-default no" data-dismiss="modal">No</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Dialog onClose={this.handleClose} open={this.state.open}
                        style={{
                            margin: 0
                        }}
                    >
                        <MuiDialogContent style={{
                            padding: 0,
                            margin: 0
                        }}>
                            <div class=" customPopup">
                                <div class="modal-dialog modal-sm" style={{
                                    margin: 0
                                }}>
                                    {/* <!-- Modal content--> */}
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <p><i class="fa fa-trash"></i><br />Are you sure you want to delete</p>
                                            <p>
                                                <button type="button" class="btn btn-default yes" data-dismiss="modal"
                                                    onClick={this.props.deleteAccount}
                                                >Yes</button>
                                                <button type="button" class="btn btn-default no" data-dismiss="modal"
                                                    onClick={this.handleClose}
                                                >No</button></p>
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
	console.log(store);

	return {
		invoices: store.AdminReducer
	}
}

let mapDispatchToProps = (dispatch) => {

	return ({
		
	})
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Invoices));
export default Invoices;