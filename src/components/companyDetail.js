import React from 'react'
import { Link } from 'react-router-dom'


class CompanyDetail extends React.Component {
    render() {
        return (
            <div style={{ margin: "50px 0px" }}>
                <div class="content-wrapper">
                    <div id="order_preview" class="wow fadeInUp content_box"
                        style={{visibility:" visible", animationName: "fadeInUp"}}>
                        <div class="row table-header">
                            <div class="col-xs-12 col-md-12">
                                <h2 class="section-title">Reader Profile <Link to='/admin/client'
                                    class="btn btn-default pull-right"><i class="fa fa-chevron-left"></i> Back</Link></h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th class="active" width="200">Company Name</th>
                                            <td>John</td>
                                        </tr>
                                        <tr>
                                            <th class="active">Work Email</th>
                                            <td>john@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th class="active">Employee</th>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <th class="active">Status</th>
                                            <td>Active</td>
                                        </tr>
                                        <tr>
                                            <th class="active">Created Date</th>
                                            <td>23/02/2019</td>
                                        </tr>
                                        
                                        <tr>
                                            <th class="active">Employee Detail</th>
                                            <td>
                                                <ul class="check">
                                                    <li><a href="#">John</a></li>
                                                    <li><a href="#">Doe</a></li>
                                                    <li><a href="#">Demo</a></li>
                                                    <li><a href="#">Test</a></li>
                                                    <li><a href="#">Demo</a></li>
                                                    <li><a href="#">Test</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        {/* <tr>
                                            <th class="active">Ban</th>
                                            <td>
                                                <p><strong>By Admin: </strong>Smith Jen </p>
                                                <p><strong>Reason: </strong>Non professional behave</p>
                                            </td>
                                        </tr> */}
                                        <tr>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CompanyDetail