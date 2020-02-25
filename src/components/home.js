import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faFile, faBullhorn, faDollarSign, faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom'



class HomePanel extends React.Component {
    render() {
        return (
            <>

                <div class="welcome_section">
                    <div class="row first_row">
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
                                        <h2 class="section-title" >Create Company</h2>

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
                                            <FontAwesomeIcon icon={faUsers}
                                            />

                                        </p>
                                    </div>
                                    <div class="col-xs-8 col">
                                        <h2 class="section-title" >Companies</h2>

                                    </div>

                            </div>
                                </Link>
                        </div>

                    </div>
                </div>



            </>
        )
    }
}

export default HomePanel;