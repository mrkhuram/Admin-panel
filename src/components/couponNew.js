import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { addNewCoupon } from '../../redux/action/adminAction'
class NewCoupon extends React.Component {

    state = {
        coupon_name: '',
        coupon_detail: '',
        discount_price: '',
    }

    onChangeHandler = (e)=>{
    
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e)=>{
        e.preventDefault()
        // this.props.addCoupon(this.state)
    }
    render() {
        return (
            <>
                <div className="content-wrapper">
                    <div id="order_preview" className="wow fadeInUp content_box"
                        style={{visibility: "visible", animationName: "fadeInUp"}}>
                        <div className="row table-header">
                            <div className="col-xs-12 col-md-12">
                                <h2 className="section-title">New Coupon <Link to='/admin/couponAdmin'
                                    className="btn btn-default pull-right"><i className="fa fa-chevron-left"></i> Back</Link></h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <form>
                                    <div className="form-group">
                                        <label for="pwd">Coupon Name:</label>
                                        <input type="text" className="form-control"  name='coupon_name' onChange={this.onChangeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Coupon Discount Price:</label>
                                        <input type="text" className="form-control" name="discount_price" onChange={this.onChangeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Coupon Detail:</label>
                                        <textarea type="text" className="form-control" name="coupon_detail" onChange={this.onChangeHandler}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Publish:</label>
                                        <label className="switch">
                                            <input type="checkbox" checked="checked" />
                                            <span className="checkbox_slider round"></span>
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-default" onClick={this.onSubmit}>Create</button>
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
        // addCoupon: (data) => {
        //     dispatch(addNewCoupon(data))
        // },
    })
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCoupon));

export default NewCoupon