import React from 'react'
import { Link } from 'react-router-dom'

class EditSetting extends React.Component {
    render() {
        return (
            <>
                <div className="content-wrapper"
                style={{marginTop: 60}}
                >
                    <div id="order_preview" className="wow fadeInUp content_box"
                        style={{visibility: "visible", animationName: "fadeInUp",margin: 'auto',width: 600}}>
                        <div className="row table-header">
                            <div className="col-xs-12 col-md-12">
                                <h2 className="section-title">Edit Settings 
                                {/* <Link to='/admin/couponAdmin'
                                    className="btn btn-default pull-right"><i className="fa fa-chevron-left"></i> Back</Link> */}
                                    </h2>
                            </div>
                        </div>
                        <div className="row"
                        style={{
                            margin: 'auto'
                        }}
                        >
                            <div className="col-xs-12 col-md-12">
                                <form>
                                    <div className="form-group">
                                        <label for="pwd">User Name:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Password:</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    {/* <div className="form-group">
                                        <label for="pwd">Coupon Detail:</label>
                                        <textarea type="text" className="form-control"></textarea>
                                    </div> */}
                                    {/* <div className="form-group">
                                        <label for="pwd">Publish:</label>
                                        <label className="switch">
                                            <input type="checkbox" checked="checked" />
                                            <span className="checkbox_slider round"></span>
                                        </label>
                                    </div> */}
                                    <button type="submit" className="btn btn-default"
                                    style={{float: 'right'}}
                                    >Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default EditSetting;