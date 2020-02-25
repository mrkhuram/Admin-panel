import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor, faBars, faHome, faUsers, faBullhorn, faFileAlt, faInfoCircle, faDollarSign, faTag, faUserSecret, faShoppingCart, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faBell, faEnvelope, faUser, faGem, faCommentAlt, faComment, } from '@fortawesome/free-regular-svg-icons'
import { fa } from '@fortawesome/fontawesome-svg-core'
import { withRouter, Route } from 'react-router-dom'
import '../assets/css/style.css'
// Components
import EditCoupon from '../couponEdit';
import NewCoupon from '../couponNew';
import NewAnnouncement from '../announcementAddNew';
import priceAddNew from '../priceAddNew';
import AdminSignup from '../adminSignup';
import ClientStatus from '../clientStatus'
import ReaderDetail from '../readerDetail'
import ReaderStatus from '../readerStatus'
import HomePanel from '../home'
import ChatSection from '../chatHistory'
import Companies from '../client';
import ReaderAdmin from '../reader';
import ReaderTestimony from '../readerTestimony';
import Announcement from '../announcement';
import Invoices from '../invoices';
import ReportCenterAdmin from '../reportCenter';
import PricingAdmin from '../pricingAdmin';
import CouponAdmin from '../couponAdmin';
import Admins from '../admins';
import BlogsAndArticalsAdmin from '../blogsAndArticalAdmin';
import ClientMessages from '../clientMessages';
import ReaderMessages from '../readersMessages'
import NewCompany from '../addCompany';

import $ from 'jquery'
import CompanyDetail from '../companyDetail';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    changeColor: {
        backgroundColor: 'white',
        height: 61

    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "rgb(235, 37, 102)"

    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
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

}));

export default function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [admin, setAdmin] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleAdmin = ()=>{
        setAdmin(!admin)
    }
    
    // const handleCompany = ()=>{
        
    //     setAdmin({admin: false})
    // }
 
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
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
                                    <li>

                                        <a href="#" class="btnLeftBarToggle"
                                            onClick={handleDrawerOpen}
                                        >


                                            <FontAwesomeIcon icon={faBars}
                                                className='icon'
                                            />


                                        </a>
                                    </li>
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
                                    <li class="dropdown">
                                        <a class="dropdown-toggle btnAlert" data-toggle="dropdown" href="#"

                                        >


                                            <FontAwesomeIcon icon={faEnvelope}
                                                className='icon'
                                            />
                                            <span class="badge bedge2">2</span></a>
                                        <ul class="dropdown-menu messages">
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

                                        {/* <label for="email">Select Status</label>     */}

                                        <a class="dropdown-toggle btnAlert " data-toggle="dropdown" href="#"
                                            onClick={() => {
                                                $(".meu-liust").slideToggle(400);
                                            }}
                                        >Hi,
                                        {/* {props.auth.userDetail.first_name} */}
                                            <span class="caret"></span></a>
                                        <ul class="dropdown-menu meu-liust signoutoptions">
                                            <li><a href="#"
                                            onClick={handleAdmin}
                                            ><i class="fa fa-user-o"></i> Admin</a></li>
                                            <li><a href="#"

                                            onClick={handleAdmin}

                                            ><i class="fa fa-sign-out" ></i> Company</a></li>
                                        </ul>
                                    </li>
                                    {/* <li class="hide"><a href="#contactus" class="scroll"><i class="fa fa-user-o"></i>Hi, User</a></li>
                                    <li class='hidden-md hidden-lg'><a href="#" class="btnLeftBarToggle "><i class="fa fa-navicon"></i></a></li> */}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>



            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
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
                            <h4 class="media-heading">John Doe</h4>
                        </div>
                    </div>
                    <ul>
                        <li className='drawerLi'>
                            <Link to="/" class="">
                                <FontAwesomeIcon icon={faHome}
                                    className='iconDrawer'
                                />

                                Home</Link></li>
                        <li>
                            <Link to='/admin/client' class="">
                                <FontAwesomeIcon icon={faUsers}
                                    className='iconDrawer'
                                />

                                Companies</Link></li>

                        <li><Link to='/admin/reportCenter' class="">
                            <FontAwesomeIcon icon={faInfoCircle}
                                className='iconDrawer'
                            />
                            Report Center</Link></li>

                        <li><Link to='/admin/readerTestimony' class="">
                            <FontAwesomeIcon icon={faBoxOpen}
                                className='iconDrawer'
                            />
                            All Expenditure</Link></li>
                        {/* <li><Link to='/admin/reader' class="">
                            <FontAwesomeIcon icon={faUser}
                                className='iconDrawer'
                            />

                            Readers</Link></li>
                      
                        <li>
                            <Link to='/admin/announcement' class="">
                                <FontAwesomeIcon icon={faBullhorn}
                                    className='iconDrawer'
                                />
                                Announcement</Link>
                        </li>
                        <li><Link to="/admin/chat" class="">
                            <FontAwesomeIcon icon={faComment}
                                className='iconDrawer'
                            />
                            Chat History</Link></li>
                        <li><Link to='/admin/invoices' class="">
                            <FontAwesomeIcon icon={faFileAlt}
                                className='iconDrawer'
                            />
                            Invoices</Link></li>
                        
                        <li><Link to='/admin/pricingAdmin' class="">
                            <FontAwesomeIcon icon={faDollarSign}
                                className='iconDrawer'
                            />

                            Pricing</Link></li>
                        <li><Link to='/admin/couponAdmin' class="" style={{

                            borderBottom: '1px solid #f0f0f0'
                        }}>
                            <FontAwesomeIcon icon={faTag}
                                className='iconDrawer'
                            />

                            Coupon</Link></li>

                        <li><Link to='/admin/admins-page' class="">
                            <FontAwesomeIcon icon={faUserSecret}
                                className='iconDrawer'
                            />
                            Admins</Link></li>
                        <li><Link to='/admin/blogs-and-articals' class="">
                            <FontAwesomeIcon icon={faShoppingCart}
                                className='iconDrawer'
                            />
                            Blogs And Article</Link></li>
                        <li><Link to='/admin/client-messages' class="">
                            <FontAwesomeIcon icon={faComment}
                                className='iconDrawer'
                            />
                            Client Messages</Link></li>
                        <li><Link to='/admin/reader-messages' class="">
                            <FontAwesomeIcon icon={faComment}
                                className='iconDrawer'
                            />
                            Reader Messages</Link></li> */}

                    </ul>
                    <ul class='foot hide'>
                        <li><i class="fa fa-user"></i></li>
                    </ul>
                </div>


            </Drawer>





            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

                <Route exact path='/' component={()=>{
                    return <HomePanel  admin={admin}/>
                }} />
                <Route exact path='/admin/chat' component={ChatSection} />
                <Route exact path='/admin/client' component={Companies} />
                <Route exact path='/admin/clientDetail' component={CompanyDetail} />
                <Route exact path='/admin/clientStatus' component={ClientStatus} />
                <Route exact path='/admin/reader' component={ReaderAdmin} />
                <Route exact path='/admin/readerDetail' component={ReaderDetail} />
                <Route exact path='/admin/readerStatus' component={ReaderStatus} />
                <Route exact path='/admin/readerTestimony' component={ReaderTestimony} />
                <Route exact path='/admin/announcement' component={Announcement} />
                <Route exact path='/admin/invoices' component={Invoices} />
                <Route exact path='/admin/reportCenter' component={ReportCenterAdmin} />
                <Route exact path='/admin/pricingAdmin' component={PricingAdmin} />
                <Route exact path='/admin/couponAdmin' component={CouponAdmin} />
                <Route exact path='/admin/admins-page' component={Admins} />
                <Route exact path='/admin/blogs-and-articals' component={BlogsAndArticalsAdmin} />
                <Route exact path='/admin/client-messages' component={ClientMessages} />
                <Route exact path='/admin/reader-messages' component={ReaderMessages} />
                <Route exact path='/edit_coupon' component={EditCoupon} />
                <Route exact path='/new_coupon' component={NewCoupon} />
                <Route exact path='/new_announcement' component={NewAnnouncement} />
                <Route exact path='/new_company' component={NewCompany} />

                <Route exact path='/new_package' component={priceAddNew} />
                <Route exact path='/new_admin' component={AdminSignup} />





            </main>


        </div>
    );
}