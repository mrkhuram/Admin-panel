import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faFile, faBullhorn, faDollarSign, faChartBar, faCogs, faMoneyBillWaveAlt, faPlusCircle, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt, faListAlt } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';


class HomePanel extends React.Component {

    constructor() {
        super();
        this.roleChanger()
    }
    state = {
        open: false,
        admin: false,
        company: false
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

    roleChanger = () => {
        this.setState({
            admin: !this.state.admin
        })
    }

    render() {
        return (
            <>

                <div class="welcome_section">
                    <div class="row first_row">



                        {
                            this.props.admin

                                ?
                                <>
                                    <Link className='link'
                                        to='/new_company'
                                    >
                                        <div class="col-md-4 wow flipInY" data-wow-delay="0.1s">
                                            <div class="box">
                                                <div class="col-xs-4 col">
                                                    <p class="icon color1">

                                                        <i class="fa fa-users"></i>
                                                        <FontAwesomeIcon icon={faUsers}
                                                        />

                                                    </p>
                                                </div>
                                                <div class="col-xs-8 col">
                                                    <h2 class="section-title" >New Company</h2>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <div class="col-md-4 wow flipInY" data-wow-delay="0.1s">
                                        <Link to='/admin/client' class="link ">
                                            <div class="box">


                                                <div class="col-xs-4 col">
                                                    <p class="icon color1">

                                                        <i class="fa fa-users"></i>
                                                        <FontAwesomeIcon icon={faListAlt}
                                                        />

                                                    </p>
                                                </div>
                                                <div class="col-xs-8 col">
                                                    <h2 class="section-title" >All Companies</h2>

                                                </div>

                                            </div>
                                        </Link>
                                    </div>

                                    <div class="col-md-4 wow flipInY" data-wow-delay="0.1s">
                                        <Link to='/expenseCategory' class="link " onClick={this.handleClickOpen}>
                                            <div class="box">


                                                <div class="col-xs-4 col">
                                                    <p class="icon color1">

                                                        <i class="fa fa-users"></i>
                                                        <FontAwesomeIcon icon={faCogs}
                                                        />

                                                    </p>
                                                </div>
                                                <div class="col-xs-8 col">
                                                    <h2 class="section-title" >Expense Group</h2>

                                                </div>

                                            </div>
                                        </Link>
                                    </div>

                                    <div class="col-md-4 wow flipInY" data-wow-delay="0.1s">
                                        <Link to='/payment-type' class="link " onClick={this.handleClickOpen}>
                                            <div class="box">


                                                <div class="col-xs-4 col">
                                                    <p class="icon color1">

                                                        {/* <i class="fa fa-users"></i> */}
                                                        <FontAwesomeIcon icon={faMoneyBillWaveAlt}
                                                        />

                                                    </p>
                                                </div>
                                                <div class="col-xs-8 col">
                                                    <h2 class="section-title" >Payment Type</h2>

                                                </div>

                                            </div>
                                        </Link>
                                    </div>

                                    <div class="col-md-4 wow flipInY" data-wow-delay="0.1s">
                                        <Link to='/company_setting' class="link " onClick={this.handleClickOpen}>
                                            <div class="box">


                                                <div class="col-xs-4 col">
                                                    <p class="icon color1">

                                                        <i class="fa fa-users"></i>
                                                        <FontAwesomeIcon icon={faCogs}
                                                        />

                                                    </p>
                                                </div>
                                                <div class="col-xs-8 col">
                                                    <h2 class="section-title" >Setting</h2>

                                                </div>

                                            </div>
                                        </Link>
                                    </div>
                                </>


                                :




                                <>
                                    {
                                        this.props.company ?
                                            <>


                                                < div class="col-md-4 wow flipInY" data-wow-delay="0.1s">
                                                    <Link to='/add_employee' class="link " >
                                                        <div class="box">


                                                            <div class="col-xs-4 col">
                                                                <p class="icon color1">

                                                                    <i class="fa fa-users"></i>
                                                                    <FontAwesomeIcon icon={faPlusCircle}
                                                                    />

                                                                </p>
                                                            </div>
                                                            <div class="col-xs-8 col">
                                                                <h2 class="section-title" >Add/Reset Employee</h2>

                                                            </div>

                                                        </div>
                                                    </Link>
                                                </div>


                                                <div class="col-md-4 wow flipInY" data-wow-delay="0.1s">
                                                    <Link to='/expense_status' class="link " onClick={this.handleClickOpen}>
                                                        <div class="box">


                                                            <div class="col-xs-4 col">
                                                                <p class="icon color1">

                                                                    <i class="fa fa-users"></i>
                                                                    <FontAwesomeIcon icon={faChartLine}
                                                                    />

                                                                </p>
                                                            </div>
                                                            <div class="col-xs-8 col">
                                                                <h2 class="section-title" >Reports</h2>

                                                            </div>

                                                        </div>
                                                    </Link>
                                                </div>

                                                <div class="col-md-4 wow flipInY" data-wow-delay="0.1s">
                                                    <Link to="/confirmPassword-first" class="link " onClick={this.handleClickOpen}>
                                                        <div class="box">


                                                            <div class="col-xs-4 col">
                                                                <p class="icon color1">

                                                                    <i class="fa fa-users"></i>
                                                                    <FontAwesomeIcon icon={faCogs}
                                                                    />

                                                                </p>
                                                            </div>
                                                            <div class="col-xs-8 col">
                                                                <h2 class="section-title" >Setting</h2>

                                                            </div>

                                                        </div>
                                                    </Link>
                                                </div>
                                            </>
                                            :
                                            <>




                                            <div class="col-md-4 wow flipInY" data-wow-delay="0.1s">
                                                <Link to='/expense_status_hr' class="link " onClick={this.handleClickOpen}>
                                                    <div class="box">


                                                        <div class="col-xs-4 col">
                                                            <p class="icon color1">

                                                                <i class="fa fa-users"></i>
                                                                <FontAwesomeIcon icon={faChartLine}
                                                                />

                                                            </p>
                                                        </div>
                                                        <div class="col-xs-8 col">
                                                            <h2 class="section-title" >Reports</h2>

                                                        </div>

                                                    </div>
                                                </Link>
                                            </div>

                                            <div class="col-md-4 wow flipInY" data-wow-delay="0.1s">
                                                <Link to="/confirmPassword-first" class="link " onClick={this.handleClickOpen}>
                                                    <div class="box">


                                                        <div class="col-xs-4 col">
                                                            <p class="icon color1">

                                                                <i class="fa fa-users"></i>
                                                                <FontAwesomeIcon icon={faCogs}
                                                                />

                                                            </p>
                                                        </div>
                                                        <div class="col-xs-8 col">
                                                            <h2 class="section-title" >Setting</h2>

                                                        </div>

                                                    </div>
                                                </Link>
                                            </div>
                                        </>

                                    }
                                </>

                        }
                    </div>

                    <Dialog onClose={() => {
                        this.handleClose('open')
                    }} open={this.state.open}
                        style={{
                            margin: 0
                        }}
                    >
                        <MuiDialogContent style={{

                            // margin: 0,
                            overFlow: 'hidden'
                        }}>
                            <div
                                style={{
                                    padding: 30
                                }}
                            >

                                <div class="form-group">
                                    <label for="pwd">Expense Category</label>
                                    <select class="form-control" name='to_client'
                                    // onChange={onChangeHandler}
                                    >
                                        <option value="client">Select Expense Category</option>

                                        <option value="client">Manufacture</option>
                                        <option value="reader">Maintenance</option>
                                        {/* <option value="reader">Contract</option>
                                        <option value="reader">Intern</option> */}


                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="pwd">Payment Type</label>
                                    <select class="form-control" name='to_client'
                                    // onChange={this.onTo}
                                    >
                                        <option value="client">Select Payment Type</option>

                                        <option value="client">Cheque</option>
                                        <option value="reader">Credit Card</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Deiscription</label>
                                    <textarea type="text" class="form-control" name="limit"
                                    // onChange={onChangeHandler} 

                                    ></textarea>
                                </div>
                                <div style={{
                                    width: '100%',
                                    textAlign: 'center'
                                }}>

                                    <button type="submit" class="btn btn-default btnAdd"


                                        style={{
                                            padding: "8px 30px",
                                            // margin: 'auto'
                                        }}
                                    ><i class="fa fa-search"></i> Add</button>
                                </div>

                            </div>
                        </MuiDialogContent>
                    </Dialog>
                </div>



            </>
        )
    }
}

export default HomePanel;
export let roleChanger