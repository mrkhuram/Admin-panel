import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { AddNewAnnouncement } from '../../redux/action/adminAction'
class NewAnnouncement extends React.Component {

    state = {
        title: '',
        to_client: null,
        to_adviser: null,
        description: '',
    }

    onChangeHandler = (e)=>{
    
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onTo = (e)=>{
        if(e.target.value === 'client'){
            this.setState({
                to_client: true,
                to_adviser: false
            })
        }else{
            this.setState({
                to_client: false,
                to_adviser: true
            })
        }
    }
    onSubmit = (e)=>{
        e.preventDefault()
        // this.props.AddAnnouncement(this.state)
        
    }
    render() {
        return (
            <>
                <div class="content-wrapper">
				<div id="order_preview" class="wow fadeInUp content_box"
					style={{ visibility: 'visible', animationName: "fadeInUp" }}>
					<div class="row table-header">
						<div class="col-xs-12 col-md-12">
							<h2 class="section-title">New Announcement <Link to='/admin/announcement'
									class="btn btn-default pull-right"><i class="fa fa-chevron-left"></i> Back</Link></h2>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-md-6">
							<form>
								<div class="form-group">
									<label for="pwd">Title:</label>
									<input type="text" class="form-control"  name="title" onChange={this.onChangeHandler}/>
								</div>
								<div class="form-group">
									<label for="pwd">To:</label>
									<select class="form-control" name='to_client' onChange={this.onTo}>
										<option value="client">Client</option>
										<option value="reader">Reader</option>
									</select>
								</div>
								<div class="form-group">
									<label for="email" >Description</label>
									<textarea rows="5" class="form-control" name="description" onChange={this.onChangeHandler} ></textarea>
								</div>
								<div class="form-group">
									<label for="pwd">Publish:</label>
									<label class="switch">
										<input type="checkbox" checked="checked"/>
										<span class="checkbox_slider round"></span>
									</label>
								</div>
								<button type="submit" class="btn btn-default" onClick={this.onSubmit}>Post Now</button>
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
        // AddAnnouncement: (data) => {
        //     dispatch(AddNewAnnouncement(data))
        // },
    })
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewAnnouncement));

export default NewAnnouncement