import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faFile, faBullhorn, faDollarSign, faChartBar, faCogs, faMoneyBillWaveAlt, faPlusCircle, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt, faListAlt } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { logoutuser } from '../redux/actions/authAction'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


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
                            this.props.authState.auth.userDetail.admin_access ?


                                <>

                                    {/* Admin Home Start */}
                                    <Link className='link'
                                        to='/admin/create_new_company'
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
                                        <Link to='/admin/companies' class="link ">
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
                                        <Link to='/expenseCategory' class="link "
                                        >
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
                                        <Link to='/payment-type' class="link ">
                                            <div class="box">


                                                <div class="col-xs-4 col">
                                                    <p class="icon color1">


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
                                        <Link to='/company_setting' class="link ">
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



                                    {/* Admin Home End */}
                                </>


                                :




                                <>
                                    {
                                         this.props.authState.auth.userDetail.mentor ?
                                            <>

                                                {/* Company Home Start */}

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
                                                    <Link to='/expense_status' class="link ">
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
                                                    <Link to="/confirmPassword-first" class="link ">
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



                                                {/* Company Home End */}

                                            </>
                                            :
                                            <>


                                                {/* HR Home Start */}

                                                {this.props.authState.auth.userDetail.companyhr1 ?
                                                    <>

                                                        <div class="col-md-4 wow flipInY" data-wow-delay="0.1s">
                                                            <Link to='/expense_status_hr' class="link ">
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
                                                            <Link to="/confirmPassword-first" class="link ">
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


                                                        {/* HR Home End */}
                                                    </>
                                                    :
                                                    ""
                                                }

                                            </>

                                    }
                                </>

                        }
                    </div>








                </div>



            </>
        )
    }
}


let mapStateToProps = (store) => {
    console.log(store);

    return {
        authState: store
    }
}
let mapDispatchToProps = (disptch) => {
    return {
        logOut: () => {
            disptch(logoutuser())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePanel))
export let roleChanger