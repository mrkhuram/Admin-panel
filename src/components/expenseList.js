import React from 'react'
import { Link } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt, faTimesCircle } from '@fortawesome/free-regular-svg-icons';


class ExpenseList extends React.Component {

    state = {
        open: false
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
                    <div id="order_preview" class="wow fadeInUp content_box"
                        style={{ visibility: 'visible', animationName: "fadeInUp" }}>
                        <div class="row table-header">
                            <div class="col-xs-12 col-md-6"
                            style={{
                                display:'flex'
                            }}
                            >
                                <h2 class="section-title">Expense List</h2>

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
										<input type="text" class="form-control" placeholder="Search Expense.." />
									</div>
									<button type="submit" class="btn btn-default">Search</button>
								
								</form>
							</div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th class="active" width="50">S#</th>
                                            <th class="active" width="250">Expense Category</th>
                                            <th class="active">Description</th>
                                            <th class="active">Receipt</th>
                                            <th class="active">Created Date</th>
                                            <th class="active">Status</th>
                                            <th class="active" style={{ width: "200px" }}>Action</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Maintanence</td>
                                            <td>On Bike</td>
                                            <td>none</td>
                                            <td>24/5/2019</td>
                                            <td>
                                               
                                                Paid
                                            </td>
                                            <td>
                                                
                                                <a class="badge red" data-toggle="modal" data-target="#myModal"
                                                    onClick={this.handleClickOpen}
                                                > <FontAwesomeIcon icon={faTrashAlt} className='iconCompany' /></a>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Maintanence</td>
                                            <td>On Bike</td>
                                            <td>none</td>
                                            <td>24/5/2019</td>
                                            <td>
                                            
                                                Paid
                                            </td>
                                            <td>
                                         
                                                <a class="badge red" data-toggle="modal" data-target="#myModal"
                                                    onClick={this.handleClickOpen}
                                                > <FontAwesomeIcon icon={faTrashAlt} className='iconCompany' /></a>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Maintanence</td>
                                            <td>On Bike</td>
                                            <td>none</td>
                                            <td>24/5/2019</td>
                                            <td>
                                            
                                                Paid
                                            </td>
                                            <td>
                                               
                                                <a class="badge red" data-toggle="modal" data-target="#myModal"
                                                    onClick={this.handleClickOpen}
                                                > <FontAwesomeIcon icon={faTrashAlt} className='iconCompany' /></a>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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

                            margin: 0,
                            overFlow: 'hidden'
                        }}>
                            <p
                            style={{
                                float: 'right',
                                marginTop: '-20',
                                cursor: 'pointer'
                            }}
                            onClick={this.handleClose}
                            >X</p>
                            <div
                                style={{
                                    padding: 30,
                                    textAlign: 'center'
                                }}
                            >
                                
                                <h4
                                    style={{
                                        marginTop: 30,
                                        marginBottom: 50
                                    }}
                                >Are you sure you want to delete?</h4>

                                <button type="submit" class="btn btn-default yesBtn"><i class="fa fa-search"></i> Yes</button>
                                <button type="submit" class="btn btn-default noBtn"><i class="fa fa-search"
                                 onClick={this.handleClose}
                                ></i> No</button>
                            </div>

                        </MuiDialogContent>
                </Dialog>

            </>
        )
    }
}
export default ExpenseList;