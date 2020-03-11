import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faInfoCircle, faCogs, faMoneyBillWaveAlt, faPlusCircle, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faBell, faListAlt, } from '@fortawesome/free-regular-svg-icons'
import '../assets/css/style.css'
import $ from 'jquery'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'






import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

// import AdminSignup from '../adminSignup';

// Components
import CompanyDeshboard from './companyDeshboard';
import NewCompany from '../editCompany';
import AddEmployee from '../addEmployee';
import Companies from '../Companies';
import EditExpenseGroup from '../editExpenseGroup';
import EditSettingCompany from '../editSettingCompany';
import ExpenseCategory from '../expenseCategory';
import Admins from '../expenseList';
import ExpenseStatus from '../companyExpenses';
import ExpenseListHr from '../expenseStatusHr';
import HomePanel from '../home'
import CreateNewCompany from '../createNewCompany';
import PaymentType from '../paymentType';
import EditPaymentType from '../paymentTypeEdit';
import ConfirmPasswordToMoveSetting from '../pwSetting';
import SettingCompany from '../settingCompany'
import EditSetting from '../settingEdit';
import AddEmployeeForm from '../tabsAddEmployee';



// Redux

import { logoutuser } from '../../redux/actions/authAction'
import companyExpenses from '../companyExpenses';
import adminEmployeesList from '../adminEmployeesList';



const drawerWidth = 241;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },

    changeColor: {
        backgroundColor: 'white',
        height: 61

    },
    appBarShift: {
        // width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    hide: {
        display: 'none',
    },
    // drawer: {
    //     width: drawerWidth,
    //     flexShrink: 0,
    // },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,

    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        color: "#f33676"
    },

}));


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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Header(props) {


    const classes = useStyles();
    const theme = useTheme();
    const { container } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [open, setOpen] = React.useState(true);
    const [admin, setAdmin] = React.useState(false);
    const [company, setCompany] = React.useState(false);
    const [hr, setHr] = React.useState(false);



    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleAdmin = () => {
        console.log('working admin');

        setAdmin(true)
        setCompany(false)
        setHr(false)
    }
    const handleCompany = () => {
        console.log('working company');

        setCompany(true)
        setAdmin(false)
        setHr(false)
    }

    const handleHr = () => {
        console.log('working hr');

        setHr(true)
        setAdmin(false)
        setCompany(false)
    }

    const logout = () => {
        props.logOut()
        // localStorage.removeItem('token')
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                }, classes.changeColor
                )}
            >



                <div class="header">



                    <div class="">
                        <nav class="navbar custom_nav">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>

                            <div class="collapse navbar-collapse" id="myNavbar">
                                <ul class="nav navbar-nav navbar-left">
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        onClick={handleDrawerToggle}
                                        className={classes.menuButton}
                                    >
                                        <MenuIcon
                                        // style={{

                                        // }}
                                        />
                                    </IconButton>
                                </ul>
                                <ul class="nav navbar-nav navbar-right">

                                    <li class="hide"><a href="index8d2f.html?p=messages"><i class="fa fa-comments-o"></i><span class="hidden-xs">Live</span> Chat</a></li>
                                    <li class="dropdown">
                                        <a class="dropdown-toggle btnAlert" data-toggle="dropdown" href="#"

                                        >

                                            <FontAwesomeIcon icon={faBell}
                                                className='icon'
                                            />
                                            <span class="badge bedge1">4</span></a>
                                        <ul class="dropdown-menu bell">
                                            <li><span class="title">Software development</span> <span class='date'>09/12/2018</span>
                                                <p>Hi, Babar your order is in process kindly wait a while</p>
                                            </li>
                                            <li><span class="title">Software development</span> <span class='date'>09/12/2018</span>
                                                <p>Hi, Babar your order is in process kindly wait a while</p>
                                            </li>
                                            <li><span class="title">Software development</span> <span class='date'>09/12/2018</span>
                                                <p>Hi, Babar your order is in process kindly wait a while</p>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="dropdown ">


                                        <a class="dropdown-toggle btnAlert " data-toggle="dropdown" href="#"
                                            onClick={() => {
                                                $(".meu-liust").slideToggle(400);
                                            }}
                                        >Hi, {props.authState.auth.userDetail.display_name}
                                            <span class="caret"></span></a>
                                        <ul class="dropdown-menu meu-liust signoutoptions">
                                            <li><Link href="#" to='/authentication_required'
                                            // onClick={handleAdmin}

                                            ><i class="fa fa-user-o"></i> Settings</Link></li>
                                            <li><a href="#"
                                                onClick={logout}
                                            ><i class="fa fa-sign-out" ></i> Log Out</a></li>

                                        </ul>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>


            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >

                        <div class="leftbar"
                            style={{
                                width: '100%'
                            }}
                        >
                            <div class="logo_header"
                                style={{
                                    width: 240,
                                    borderBottom: '1px solid #f0f0f0'
                                }}
                            >
                                <Link to="/">
                                    <img src={require("../assets/images/logo.png")} class="logo" />
                                </Link>
                            </div>



                            <span class="heading"></span>
                            <div class="media hide">

                                <div class="media-body">
                                    <p>Admin</p>
                                    <h4 class="media-heading">{props.authState.auth.userDetail.display_name}</h4>
                                </div>
                            </div>
                            <ul>


                                {
                                    props.authState.auth.userDetail.admin_access ?

                                        <>
                                            <li className='drawerLi'>
                                                <Link to="/" class="">
                                                    <FontAwesomeIcon icon={faHome}
                                                        className='iconDrawer'
                                                    />

                                                    Home</Link></li>

                                            <li>
                                                <Link to='/admin/create_new_company' class="">
                                                    <FontAwesomeIcon icon={faUsers}
                                                        className='iconDrawer'
                                                    />

                                                    New Companies</Link></li>
                                            <li>
                                                <Link to='/admin/companies' class="">
                                                    <FontAwesomeIcon icon={faListAlt}
                                                        className='iconDrawer'
                                                    />

                                                    All Companies</Link></li>

                                            <li><Link to='/expenseCategory' class="">
                                                <FontAwesomeIcon icon={faInfoCircle}
                                                    className='iconDrawer'
                                                />
                                                Expense Group</Link></li>

                                            <li>
                                                <Link to='/payment-type' class="">
                                                    <FontAwesomeIcon icon={faMoneyBillWaveAlt}
                                                        className='iconDrawer'
                                                    />
                                                    Payment Type</Link>
                                            </li>
                                            <li>
                                                <Link to="/company_setting" class="">
                                                    <FontAwesomeIcon icon={faCogs}
                                                        className='iconDrawer'
                                                    />
                                                    Setting</Link>
                                            </li>

                                        </>

                                        :

                                        <>
                                            {
                                                 props.authState.auth.userDetail.mentor ?
                                                    <>
                                                        <li className='drawerLi'>
                                                            <Link to="/" class="">
                                                                <FontAwesomeIcon icon={faHome}
                                                                    className='iconDrawer'
                                                                />

                                                                Home</Link></li>
                                                        <li>
                                                            <Link to="/add_employee" class="">
                                                                <FontAwesomeIcon icon={faPlusCircle}
                                                                    className='iconDrawer'
                                                                />
                                                                Employees</Link>
                                                        </li>

                                                        <li>
                                                            <Link to='/expense_status' class="">
                                                                <FontAwesomeIcon icon={faChartLine}
                                                                    className='iconDrawer'
                                                                />
                                                                Reports</Link>
                                                        </li>

                                                        <li>
                                                            <Link to='/authentication_required' class="">
                                                                <FontAwesomeIcon icon={faCogs}
                                                                    className='iconDrawer'
                                                                />
                                                                Setting</Link>
                                                        </li>
                                                    </>
                                                    :

                                                    <>
                                                        {
                                                            props.authState.auth.userDetail.companyhr1 ?
                                                                <>







                                                                    <li className='drawerLi'>
                                                                        <Link to="/" class="">
                                                                            <FontAwesomeIcon icon={faHome}
                                                                                className='iconDrawer'
                                                                            />

                                                                            Home</Link></li>


                                                                    <li>
                                                                        <Link to='/expense_status_hr' class="">
                                                                            <FontAwesomeIcon icon={faChartLine}
                                                                                className='iconDrawer'
                                                                            />
                                                                            Reports</Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link to='/authentication_required' class="">
                                                                            <FontAwesomeIcon icon={faCogs}
                                                                                className='iconDrawer'
                                                                            />
                                                                            Setting</Link>
                                                                    </li>
                                                                </>
                                                                :

                                                                ""
                                                        }
                                                    </>

                                            }
                                        </>

                                }





                            </ul>

                        </div>





                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <div class="leftbar"
                            style={{
                                width: '100%'
                            }}
                        >
                            <div class="logo_header"
                                style={{
                                    width: 240,
                                    borderBottom: '1px solid #f0f0f0'
                                }}
                            >
                                <Link to="/">
                                    <img src={require("../assets/images/logo.png")} class="logo" />
                                </Link>
                            </div>



                            <span class="heading"></span>
                            <div class="media hide">

                                <div class="media-body">
                                    <p>Admin</p>
                                    <h4 class="media-heading">John Doe</h4>
                                </div>
                            </div>
                            <ul>

                                {
                                    props.authState.auth.userDetail.admin_access ?

                                        <>
                                            <li className='drawerLi'>
                                                <Link to="/" class="">
                                                    <FontAwesomeIcon icon={faHome}
                                                        className='iconDrawer'
                                                    />

                                                    Home</Link></li>

                                            <li>
                                                <Link to='/admin/create_new_company' class="">
                                                    <FontAwesomeIcon icon={faUsers}
                                                        className='iconDrawer'
                                                    />

                                                    New Companies</Link></li>
                                            <li>
                                                <Link to='/admin/companies' class="">
                                                    <FontAwesomeIcon icon={faListAlt}
                                                        className='iconDrawer'
                                                    />

                                                    All Companies</Link></li>

                                            <li><Link to='/expenseCategory' class="">
                                                <FontAwesomeIcon icon={faInfoCircle}
                                                    className='iconDrawer'
                                                />
                                                Expense Group</Link></li>

                                            <li>
                                                <Link to='/payment-type' class="">
                                                    <FontAwesomeIcon icon={faMoneyBillWaveAlt}
                                                        className='iconDrawer'
                                                    />
                                                    Payment Type</Link>
                                            </li>
                                            <li>
                                                <Link to="/company_setting" class="">
                                                    <FontAwesomeIcon icon={faCogs}
                                                        className='iconDrawer'
                                                    />
                                                    Setting</Link>
                                            </li>

                                        </>

                                        :

                                        <>
                                            {
                                                props.authState.auth.userDetail.mentor ?
                                                    <>
                                                        <li className='drawerLi'>
                                                            <Link to="/" class="">
                                                                <FontAwesomeIcon icon={faHome}
                                                                    className='iconDrawer'
                                                                />

                                                                Home</Link></li>
                                                        <li>
                                                            <Link to="/add_employee" class="">
                                                                <FontAwesomeIcon icon={faPlusCircle}
                                                                    className='iconDrawer'
                                                                />
                                                                Employees</Link>
                                                        </li>

                                                        <li>
                                                            <Link to='/expense_status' class="">
                                                                <FontAwesomeIcon icon={faChartLine}
                                                                    className='iconDrawer'
                                                                />
                                                                Reports</Link>
                                                        </li>

                                                        <li>
                                                            <Link to='/authentication_required' class="">
                                                                <FontAwesomeIcon icon={faCogs}
                                                                    className='iconDrawer'
                                                                />
                                                                Setting</Link>
                                                        </li>
                                                    </>
                                                    :

                                                    <>
                                                        {
                                                            props.authState.auth.userDetail.companyhr1 ?
                                                                <>







                                                                    <li className='drawerLi'>
                                                                        <Link to="/" class="">
                                                                            <FontAwesomeIcon icon={faHome}
                                                                                className='iconDrawer'
                                                                            />

                                                                            Home</Link></li>


                                                                    <li>
                                                                        <Link to='/expense_status_hr' class="">
                                                                            <FontAwesomeIcon icon={faChartLine}
                                                                                className='iconDrawer'
                                                                            />
                                                                            Reports</Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link to='/authentication_required' class="">
                                                                            <FontAwesomeIcon icon={faCogs}
                                                                                className='iconDrawer'
                                                                            />
                                                                            Setting</Link>
                                                                    </li>
                                                                </>
                                                                :

                                                                ""
                                                        }
                                                    </>

                                            }
                                        </>

                                }





                            </ul>

                        </div>

                    </Drawer>
                </Hidden>
            </nav>

           




            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />



                <Route exact path='/' component={() => {
                    return <HomePanel admin={admin} hr={hr} company={company} />
                }} />
                <Route exact path='/admin/companies' component={Companies} />
                <Route exact path='/admin/create_new_company' component={CreateNewCompany} />
                <Route exact path='/expenseCategory' component={ExpenseCategory} />
                <Route exact path='/expenseList' component={Admins} />
                <Route exact path='/edit_company' component={NewCompany} />
                {/* <Route exact path='/confirmPassword-first' component={ConfirmPasswordToMoveSetting} /> */}
                <Route exact path='/editSettings' component={EditSetting} />
                <Route exact path='/editexpenseGroup' component={EditExpenseGroup} />
                <Route exact path='/payment-type' component={PaymentType} />
                <Route exact path='/editPaymentType' component={EditPaymentType} />
                <Route exact path='/companyDeshboard' component={CompanyDeshboard} />
                <Route exact path='/add_employee' component={AddEmployee} />
                <Route exact path='/add_new_employee' component={AddEmployeeForm} />
                <Route exact path='/authentication_required' component={SettingCompany} />
                <Route exact path='/edit_company_setting' component={EditSettingCompany} />
                <Route exact path='/expense_status' component={ExpenseStatus} />
                <Route exact path='/expense_status_hr' component={ExpenseListHr} />
                <Route exacct path='/company_expense' component={companyExpenses} />
                <Route exact path = '/admin_company_empoyees' component={adminEmployeesList}/>




            </main>


        </div>


    );
}))