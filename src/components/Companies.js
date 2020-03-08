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
                        companies: res.data.companies
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

    // editCompany =(id)=>{

    //     // this.props.editInd(id)
    // }



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
                                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i> Search</button>

                                </form>
                            </Col>
                        </Row>

                        {/* Companies Header and Search Bar End */}



                        {/* Companies Table Sart */}

                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <div class="table-responsive">
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
                                            {company ?



                                                company.map((item, ind) => {
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
                                                                    pathname: '/admin/edit_company',
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

                                                :
                                                null
                                            }

                                        </tbody>
                                    </table>



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
                                                    to='/expenseList'
                                                    className='link'
                                                >
                                                    <button type="submit" class="btn btn-default noBtn"
                                                        style={{
                                                            marginLeft: 30
                                                        }}

                                                    ><i class="fa fa-search"></i> Expense List</button>
                                                </Link>
                                                <Link
                                                    to='/addEmployee'
                                                    className='link'
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