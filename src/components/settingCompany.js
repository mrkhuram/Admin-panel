import React from 'react'
import { Link } from 'react-router-dom'
import history from './history/history'

class SettingCompany extends React.Component {


    state={
        password: ''
    }


    onChangeHandler =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    confirmSetting = (e)=>{
        if(this.state.password == ''){
            e.preventDefault()

            this.setState({
                msg: "Password doesn't match"
            })
            return true

        }
        if(this.state.password !== ''){
            this.setState({
                msg: ""
            })
            history.push('/edit_company_setting')
        }
    }


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
                                <h2 className="section-title">Confirm Password to Access 
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
                                <form onSubmit={this.confirmSetting}>
                                    <div className="form-group">
                                        <label for="pwd">User Name:</label>
                                        <input type="text" className="form-control"  value="company@gmail.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="pwd">Password:</label>
                                        <input type="password" className="form-control" onChange={this.onChangeHandler} name='password'/>
                                    </div>
                                    <div className="form-group"
                                    style={{
                                        textAlign: 'right',
                                        color:'red'
                                    }}
                                    >
                                        <label for="pwd">{this.state.msg}</label>
                                    </div>
                                    {/* <div className="form-group">
                                        <label for="pwd">Publish:</label>
                                        <label className="switch">
                                            <input type="checkbox" checked="checked" />
                                            <span className="checkbox_slider round"></span>
                                        </label>
                                    </div> */}
                                    <button type="submit" className="btn btn-default"
                                    style={{float: 'right'}}
                                    
                                    >Confirm</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default SettingCompany;