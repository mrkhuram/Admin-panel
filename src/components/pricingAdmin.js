import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { allPackages,deleteAPackage } from '../../redux/action/adminAction'

class PricingAdmin extends React.Component {
    constructor(props) {
        super(props)
        // props.pricingPackages()
    }
    state = {
        packages: ''
    }
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             packages: this.props.packages.packages
    //         })

    //         console.log(this.state);
    //     }, 1500);
    // }
    shouldComponentUpdate(newProps, newState) {
		return true;
	}

	deleteItem = (index, id) => {
		console.log(id);
		this.state.packages.splice(index, 1)
		this.setState({
			packages: this.state.packages
		})

		this.props.delete(id)
	}
    render() {
        return (
            <>
                <div className="content-wrapper">
                    <div id="order_preview" className="wow fadeInUp content_box"
                        style={{ visibility: 'visible', animationName: "fadeInUp" }}>
                        <div className="row table-header">
                            <div className="col-xs-12 col-md-6">
                                <h2 className="section-title">Pricing Packages</h2>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <form className="form-inline form-searchbar">
                                    <Link to='/new_package' className="btn btn-default"><i
                                        className="fa fa-plus"></i> New</Link>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th className="active" width="50">S#</th>
                                            <th className="active" width="250">Package Name</th>
                                            <th className="active">Actual Price</th>
                                            <th className="active">Offer Price</th>
                                            <th className="active" width="120px">Publish</th>
                                            <th className="active" style={{ width: "200px" }}>Action</th>
                                        </tr>
                                        {this.state.packages ?
                                            this.state.packages.map((item, index) => {
                                                return <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item.package_name}</td>
                                                    <td>{item.actual_price}</td>
                                                    <td>{item.offered_price}</td>
                                                    <td>
                                                        <label className="switch">
                                                            <input type="checkbox" checked={item.status} />
                                                            <span className="checkbox_slider round"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <a className="badge del hide" data-toggle="modal" data-target="#myModal"> <i
                                                            className="fa fa-trash"></i> Delete</a>
                                                        <a className="badge red" onClick={() => {
																this.deleteItem(index, item._id)
															}}> <i className="fa fa-trash"></i> Delete</a>
                                                        <div className="dropdown hide">
                                                            <button className="btn btn-primary dropdown-toggle" type="button"
                                                                data-toggle="dropdown">More
													<span className="caret"></span></button>
                                                            <ul className="dropdown-menu">
                                                                <li><a href="#">Edit</a></li>
                                                                <li><a href="#">View Detail</a></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            })
                                            :
                                            <></>}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="myModal" className="modal fade delPopup" role="dialog">
                        <div className="modal-dialog modal-sm">
                            {/* <!-- Modal content--> */}
                            <div className="modal-content">
                                <div className="modal-body">
                                    <p><i className="fa fa-trash"></i><br />Are you sure you want to delete</p>
                                    <p>
                                        <button type="button" className="btn btn-default yes" data-dismiss="modal">Yes</button>
                                        <button type="button" className="btn btn-default no" data-dismiss="modal">No</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

let mapStateToProps = (store) => {
    console.log(store);

    return {
        packages: store.AdminReducer
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        
    })
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PricingAdmin));
export default PricingAdmin