import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { blogsAndArticles,approveAnArticle,deleteAnArticle } from '../../redux/action/adminAction'

class BlogsAndArticalsAdmin extends React.Component {
	constructor(props) {
        super(props)
        // props.blogs()
    }
    state = {
		articlesList: '',
		checked: true
    }
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
	// 			articlesList: this.props.admin.articles
    //         })
    //     },1500);


	// }
	// shouldComponentUpdate(newProps, newState) {
	// 	return true;
	// }
	onChangeHandler = (e)=>{
		this.setState({
			checked: !this.state.checked
		})
		
	}
	deleteItem = (index, id) => {
		// console.log(id);
		this.state.invoices.splice(index, 1)
		this.setState({
			invoices: this.state.invoices
		})

		this.props.delete(id)
	}
    render() {
        return (
            <>
            <div class="content-wrapper">
				<div id="order_preview" class="wow fadeInUp content_box"
					style={{visibility: 'visible', animationName: "fadeInUp"}}>
					<div class="row table-header">
						<div class="col-xs-12 col-md-6">
							<h2 class="section-title">Blogs And Article</h2>
						</div>
						<div class="col-xs-12 col-md-6">
							<form class="form-inline form-searchbar">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Search Announcement.." />
								</div>
								<button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
								<a href="indexda55.html?p=blogs_new" class="btn btn-default"><i class="fa fa-plus"></i>
									New Blog</a>
							</form>
						</div>
					</div>
					{/* {this.props.admin.msg} */}
					<div class="row">
						<div class="col-xs-12 col-md-12">
							<table class="table table-bordered">
								<tbody>
									<tr>
										<th class="active" width="50">S#</th>
										<th class="active" width="200">Title</th>
										<th class="active">Description</th>
										<th class="active" width="100">Author</th>
										<th class="active" width="100">Publish Date</th>
										<th class="active">Publish</th>
										<th class="active" width="200">Action</th>
									</tr>
									{this.state.articlesList ? 
									this.state.articlesList.map((item,index)=>{
										return	<tr>
										<td>{index+1}</td>
										<td>{item.title}</td>
										<td>{item.description}</td>
										{/* <td>James Hod</td> */}
										<td>{item.user.first_name}</td>

										<td>{item.submit_date}</td>
										<td>
											<label class="switch">
												<input type="checkbox" onClick={()=>{
													this.props.approveArticle(item._id)
												}} checked={item.approved}/>
												<span class="checkbox_slider round"></span>
											</label>
										</td>
										<td>
											<a class="badge blue"> <i class="fa fa-external-link"></i> View Detail</a>
											<a class="badge red" 
											 onClick={() => {
												this.deleteItem(index, item._id)
											}}
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
									})	: <></>
								}

								</tbody>
							</table>
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
        
    })
}    

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogsAndArticalsAdmin));

export default BlogsAndArticalsAdmin
