import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {userAuth} from '../redux/actions/authAction'

const useStyles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    inputFieldx: {
        fontSize: "30px"
    }


})
class SignIn extends React.Component {

    state = {
        email: null,
        password: null
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state)
    }

    

    
    render() {
        return (
            <Container component="main" maxWidth="xs" style={{
                marginTop: 180
            }}>
                <CssBaseline />
                <div className={this.props.paper}>
                    {/* <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar> */}
                    <Typography component="h1" variant="h2" >
                        Sign in
                </Typography>

                    <form style={{
                        marginTop: 30
                    }}>
                        <div class="form-group">
                            <label for="pwd">User Name or Email</label>
                            <input
                                type="text"
                                class="form-control"
                                name="email"
                                style={{ width: 400 }}
                                onChange={this.onChangeHandler}
                            />
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password</label>
                            <input
                                type="text"
                                class="form-control"
                                name="password"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                        {/* <div class="form-group">
                            <label for="pwd">
                            {this.props.userdetail.message}
                          
                            </label>
                            
                        </div> */}

                        <button
                            type="submit"
                            class="btn btn-default yesBtn"
                            style={{ marginTop: 10, float: 'right', padding: '8px 16px', fontSize: 16 }}
                            onClick={this.submitHandler}
                        >Sign In</button>

                    </form>
                </div>

            </Container>
        );
    }
}

let mapStateToProps = (store)=>{
    console.log(store);
    
    
    return {
        userdetail: store.auth
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        loginUser: body =>{
            dispatch(userAuth(body))
        } 
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withStyles(useStyles)(SignIn)))