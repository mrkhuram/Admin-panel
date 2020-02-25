import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { announcementList, deleteAnnouncement } from '../../redux/action/adminAction'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';



class Announcement extends React.Component {

	constructor(props) {
		super(props)
		// props.announcements()
	}
	state = {
		announcementList: '',
		open: false 
	}
	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.setState({
	// 			announcementList: this.props.admin.announcementList
	// 		})
	// 		// console.log(this.state);
	// 	}, 1500);


	// }
	shouldComponentUpdate(newProps, newState) {
        return true;
	 }
	 
	 deleteItem = (index, id)=>{
        // console.log(id);
        this.state.announcementList.splice(index,1)
        this.setState({
            announcementList: this.state.announcementList
        })
        
        // this.props.deleteAnnouncements(id)
    }
	handleClickOpen = () => {
		this.setState({
			open: true
		})
	};
	handleClose = () => {
		this.setState({
			open: false
		})
	};

	render() {
		return (
			<>
				<div class="content-wrapper">
					<div id="order_preview" class="wow fadeInUp content_box"
						style={{ visibility: 'visible', animationName: "fadeInUp" }}>
						<div class="row table-header">
							<div class="col-xs-12 col-md-6">
								<h2 class="section-title">Our Announcement</h2>
							</div>
							<div class="col-xs-12 col-md-6">
								<form class="form-inline form-searchbar"
									action="http://test.hiddenlogics.com/action_page.php">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Search Announcement.." />
									</div>
									<button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
									<Link to="/new_announcement" class="btn btn-default"><i
										class="fa fa-plus"></i> New</Link>
								</form>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 col-md-12">
								<table class="table table-bordered">
									<tbody>
										<tr>
											<th class="active" width="50">S#</th>
											<th class="active" width="250">Title</th>
											<th class="active">Description</th>
											<th class="active" width="120px">Publish</th>
											<th class="active" width="120px">To</th>
											<th class="active" style={{ width: "200px" }}>Action</th>
										</tr>
										{this.state.announcementList ? this.state.announcementList.map((item, index) => {
											return <tr>
												<td>{index + 1}</td>
												<td>{item.title}</td>
												<td>{item.description}</td>
												<td>
													<label class="switch">
														<input type="checkbox" checked={item.published} />
														<span class="checkbox_slider round"></span>
													</label>
												</td>
												<td>Client</td>
												<td>
													<a class="badge blue" href="indexd5a8.html?p=announcement_new"> <i
														class="fa fa-external-link"></i> View Detail</a>
													<a class="badge del hide" data-toggle="modal" data-target="#myModal"> <i
														class="fa fa-trash"></i> Delete</a>
													<a class="badge del"
														onClick={() => {
                                                            this.deleteItem(index,item._id)
                                                        }}
													// onClick={() => {
													// 	this.props.deleteAnnouncements(item._id)

													// }}
													> <i class="fa fa-trash"></i> Delete</a>
													<div class="dropdown hide">
														<button class="btn btn-primary dropdown-toggle" type="button"
															data-toggle="dropdown">More
													<span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#">Edit</a></li>
															<li><a href="#">View Detail</a></li>
														</ul>
													</div>
												</td>
											</tr>

										}) : <></>}

									</tbody>
								</table>
							</div>
						</div>
					</div>
					{/* <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open}>
						<div id="myModal" class="modal fade delPopup" >
							<div class="modal-dialog modal-sm">
								<!-- Modal content-->
								<div class="modal-content">
									<div class="modal-body">
										<p><i class="fa fa-trash"></i><br />Are you sure you want to delete</p>
										<p>
											<button type="button" class="btn btn-default yes" data-dismiss="modal">Yes</button>
											<button type="button" class="btn btn-default no" data-dismiss="modal">No</button>
										</p>
									</div>
								</div>
							</div>
						</div>
					</Dialog> */}
					
				</div>
			</>
		)
	}
}

let mapStateToProps = (store) => {
	// console.log(store);

	return {
		admin: store.AdminReducer
	}
}

let mapDispatchToProps = (dispatch) => {

	return ({
		
	})
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Announcement));
export default Announcement;