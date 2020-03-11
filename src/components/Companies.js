import React from 'react'
import './assets/css/animate.css'
import './assets/css/style.css'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';

import AddEmployee from './tabsAddEmployee'
import {
    Row,
    Col
} from 'reactstrap';
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'


import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios';
import { deleteCompany } from '../redux/actions/companyAction'
import CircularProgress from '@material-ui/core/CircularProgress';

class Companies extends React.Component {

    constructor(props) {
        super(props)

        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'x-sh-auth': token
            }
        }
        getCompanieslist = () => {
            axios.get("https://mr-expense-backend.herokuapp.com/admin/list_all_company", header)
                .then(res => {
                    console.log(res);
                    this.setState({
                        companies: res.data.companies,
                        allCompany: res.data.companies
                    })
                })
                .catch(err => console.log(err))
        }


        getCompanieslist()

    }






    state = {
        open: false,
        activeTab: 1,
        openPop: false,
        delete: false,
        companies: "",
        index: 1
    }

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

    toggle = tab => {
        if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
    }

    delete = (index) => {
        this.props.delete_company(index)
    }

    searchingItem = []
    searchItem = (e) => {
        let searchVal = e.target.value
        if (searchVal == '') {
            this.setState({
                companies: this.state.allCompany
            })
        }

        this.searchingItem = this.state.companies.filter((item) => {
            if (searchVal == item.company_name) {
                return item

            }
        }
        )



    }
    searchBtn = (e) => {
        e.preventDefault()
        console.log(this.searchingItem);
        if (this.searchingItem.length !== 0) {

            this.setState({
                companies: this.searchingItem
            })
        }
    }



    render() {
        let company = this.state.companies
        return (
            <>
                <div class="content-wrapper">

                    <div id="order_preview" class="wow fadeInUp content_box" style={{ visibility: "visible", animationName: "fadeInUp" }}>

                        {/* Companies Header and Search Bar Start */}

                        <Row className='table-header'>

                            <Col xs='12' md='4'>
                                <h2 class="section-title">Our Companies</h2>
                            </Col>
                            <Col xs='12' md='8'>
                                <form class="form-inline form-searchbar" action="http://test.hiddenlogics.com/action_page.php">


                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Search Company.."
                                            onChange={this.searchItem}
                                        />
                                    </div>
                                    <button type="submit" class="btn btn-default"
                                        onClick={this.searchBtn}
                                    >Search</button>

                                </form>
                            </Col>
                        </Row>

                        {/* Companies Header and Search Bar End */}



                        {/* Companies Table Sart */}

                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <div class="table-responsive">
                                    {company ?

                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th class="active">S#</th>
                                                    <th class="active">Company Name</th>
                                                    <th class="active">Email</th>
                                                    <th class="active">Employee</th>
                                                    <th class="active">Phone</th>
                                                    <th class="active" width="120px">Account Status</th>
                                                    <th class="active" style={{ width: "300px" }}>Action</th>
                                                </tr>







                                                {company.map((item, ind) => {
                                                    return <tr>
                                                        <td>{ind + 1}</td>
                                                        <td>{item.company_name}</td>
                                                        <td>{item.work_email}</td>
                                                        <td>{item.employee_limit}</td>
                                                        <td>{item.ph_no}</td>
                                                        <td>
                                                            <span class="badge">{item.status}</span>
                                                        </td>
                                                        <td>
                                                            <Link
                                                                onClick={() => {
                                                                    this.setState({
                                                                        index: ind,
                                                                        id: item._id
                                                                    })
                                                                    this.handleClickOpen('open')
                                                                }}
                                                                to='#'
                                                                class="badge blue" ><FontAwesomeIcon icon={faEye} className='iconCompany' /> </Link>
                                                            <Link
                                                                onClick={() => {
                                                                    this.setState({
                                                                        index: ind,
                                                                        id: item._id
                                                                    })
                                                                }}
                                                                to={{
                                                                    pathname: '/edit_company',
                                                                    companyInd: { company: item }
                                                                }}
                                                                class="badge del link" data-toggle="modal" data-target="#myModal"

                                                            >
                                                                <FontAwesomeIcon icon={faUserEdit} className='iconCompany' />

                                                            </Link>
                                                            <Link to='#'
                                                                onClick={() => {
                                                                    this.setState({
                                                                        index: ind,
                                                                        id: item._id
                                                                    })
                                                                    this.handleClickOpen('delete')
                                                                }}
                                                                class="badge del" > <FontAwesomeIcon icon={faTrashAlt} className='iconCompany' /></Link>
                                                        </td>
                                                    </tr>
                                                })
                                                }






                                            </tbody>
                                        </table>

                                        :
                                        <CircularProgress color="secondary"
                                            style={{
                                                marginLeft: "45%",
                                                marginTop: 30,
                                                marginBottom: 30
                                            }}
                                        />

                                    }



                                </div>
                            </div>
                        </div>

                        {/* Companies Table End */}

                    </div>





                    {/* Popup of View Start */}




                    <Dialog onClose={() => {
                        this.handleClose('open')
                    }} open={this.state.open}
                        style={{
                            margin: 0
                        }}
                    >
                        <MuiDialogContent style={{

                            overFlow: 'hidden',
                            width: 600
                        }}>
                            <div
                                style={{
                                    padding: 30,

                                }}
                            >

                                <div class="row">
                                    <p
                                        style={{
                                            float: 'right',
                                            marginTop: -20,
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => {
                                            this.handleClose('open')
                                        }}
                                    >X</p>
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
                                        >Company Details</h4>
                                        {/* {
                                        company ?

                                        company.map((item) => {
                                            return <> */}
                                        {company ?
                                            <>
                                                <img src={require("./assets/images/logo.png")} alt=""
                                                    style={{
                                                        width: 100,
                                                        float: 'right'
                                                    }}
                                                />

                                                <table class="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th >Company Name</th>
                                                            <td>{company[this.state.index].company_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th >Work Email</th>
                                                            <td>{company[this.state.index].work_email}</td>
                                                        </tr>
                                                        <tr>
                                                            <th >Phone</th>
                                                            <td>{company[this.state.index].ph_no}</td>
                                                        </tr>
                                                        <tr>
                                                            <th >Employee Limit</th>
                                                            <td>{company[this.state.index].employee_limit}</td>
                                                        </tr>
                                                        <tr>
                                                            <th >Payment Type</th>
                                                            <td>{company[this.state.index].payment_type}</td>
                                                        </tr>
                                                        <tr>
                                                            <th  >Expense Group</th>
                                                            <td>{company[this.state.index].company_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th >Expense Image</th>
                                                            <td>{company[this.state.index].expense_image}</td>
                                                        </tr>
                                                        <tr>
                                                            <th >Email Templates</th>
                                                            <td>{company[this.state.index].email_template}</td>
                                                        </tr>
                                                        <tr>
                                                            <th >Logo</th>
                                                            <td>{company[this.state.index].image_file}</td>
                                                        </tr>



                                                        <tr>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <Link
                                                    to='/company_expense'
                                                    className='link'
                                                >
                                                    <button type="submit" class="btn btn-default noBtn"
                                                        style={{
                                                            marginLeft: 30
                                                        }}

                                                    ><i class="fa fa-search"></i> Expense List</button>
                                                </Link>
                                                <Link
                                                    // to="/admin_company_empoyees"
                                                    className='link'
                                                    to={{
                                                        pathname: '/admin_company_empoyees',
                                                        companyID: { id: this.state.id }
                                                    }}
                                                >
                                                    <button type="submit" class="btn btn-default noBtn"
                                                        style={{
                                                            marginLeft: 30
                                                        }}

                                                    ><i class="fa fa-search"></i> Employee</button>
                                                </Link>
                                            </> : ''
                                        }
                                        {/* </>
                                                
                                        })
                                    : ''
                                    } */}
                                    </div>
                                </div>
                            </div>
                        </MuiDialogContent>
                    </Dialog>


                    {/* Popup of View End */}




                    {/* Popup of Delete Start */}


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

                                <button type="submit" class="btn btn-default yesBtn"
                                    onClick={() => {
                                        if (company) {
                                            this.delete(company[this.state.index]._id)
                                        }
                                        this.handleClose('delete')
                                    }

                                    }

                                ><i class="fa fa-search"></i> Yes</button>
                                <button type="submit" class="btn btn-default noBtn"
                                    onClick={() => {
                                        this.handleClose('delete')
                                    }}
                                ><i class="fa fa-search"></i> No</button>
                            </div>

                        </MuiDialogContent>
                    </Dialog>

                    {/* Popup of Delete End */}


                </div>

            </>
        )
    }
}


let mapStateToProps = (store) => {
    return {
        companies: store.companyReducer
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        delete_company: (data) => {
            dispatch(deleteCompany(data))
        },
        // editInd : (id)=>{
        //     dispatch(indexOfEdit())
        // }
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Companies));
export let getCompanieslist