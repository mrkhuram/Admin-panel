import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { adminSignUp  } from '../../redux/action/adminAction'

class AdminSignup extends React.Component {

    // constructor(props) {
    //     super(props)
    //     props.couponsList()
    // }
    state = {
        
    }
    onChangeHandler = (e)=>{
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e)=>{
        e.preventDefault()
        // console.log(this.state);
        // this.props.signUp(this.state)
        
    }
    render() {
        return (
            <>
                <div className="content-wrapper">
                    <div id="order_preview" className="wow fadeInUp content_box"
                        style={{visibility: "visible", animationName: "fadeInUp"}}>
                        <div className="row table-header">
                            <div className="col-xs-12 col-md-12">
                                <h2 className="section-title">Add New Admin <Link to='/admin/admins-page'
                                    className="btn btn-default pull-right"><i className="fa fa-chevron-left"></i> Back</Link></h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <form>
                                    <div className="form-group">
                                        <label for="pwd">Admin Name:</label>
                                        <input type="text" name='first_name' onChange={this.onChangeHandler} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Admin Email:</label>
                                        <input type="text" name='email' onChange={this.onChangeHandler} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Admin Password:</label>
                                        <input type="text" name='password' onChange={this.onChangeHandler} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Publish:</label>
                                        <label className="switch">
                                            <input type="checkbox" checked="checked" />
                                            <span className="checkbox_slider round"></span>
                                        </label>
                                    </div>
                                    <button type="submit" onClick={this.onSubmit} className="btn btn-default">Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

let mapStateToProps = (store) => {  

    return {
        admin: store.AdminReducer
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        // signUp: (data) => {
        //     dispatch(adminSignUp(data))
        // },
        
    })
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminSignup));

export default AdminSignup