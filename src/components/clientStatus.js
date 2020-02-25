import React from 'react'
import {
    Row,
    Col,
    Container
  } from 'reactstrap'

import { Link } from 'react-router-dom'
class ClientStatus extends React.Component {
    render() {
        return (
            <div style={{ margin: "50px 0px" }}>
                <div class="content-wrapper">
                    <div id="order_preview" class="wow fadeInUp content_box"
                        style={{ visibility: " visible", animationName: "fadeInUp" }}>
                        
                        <Row className="table-header">
                            <div class="col-xs-12 col-md-6">
                                <h2 class="section-title">Set Company Status</h2>
                            </div>

                            <Col xs='12' md='6'>
                                <h2 class="section-title"> <Link to='/'
                                    class="btn btn-default pull-right"><i class="fa fa-chevron-left"></i> Back</Link></h2>
                            </Col>
                        </Row>
                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <form action="http://test.hiddenlogics.com/action_page.php">
                                    <div class="form-group">
                                        <label for="email">Select Status</label>
                                        <select class="form-control">
                                            <option value="all">Close</option>
                                            <option value="name">Ban</option>
                                            <option value="email">Active</option>
                                        </select>
                                    </div>
                                    {/* <div class="form-group">
                                        <label for="pwd">Reason:</label>
                                        <textarea rows="5" class="form-control"></textarea>
                                    </div> */}
                                    <button type="submit" class="btn btn-default">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ClientStatus