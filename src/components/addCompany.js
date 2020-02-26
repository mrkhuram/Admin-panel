import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { AddNewAnnouncement } from '../../redux/action/adminAction'
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';





import {
  Row,
  Col,
  Container
} from 'reactstrap'

class NewCompany extends React.Component {

  state = {
    title: '',
    to_client: null,
    to_adviser: null,
    description: '',
  }

  onChangeHandler = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onTo = (e) => {
    if (e.target.value === 'client') {
      this.setState({
        to_client: true,
        to_adviser: false
      })
    } else {
      this.setState({
        to_client: false,
        to_adviser: true
      })
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    // this.props.AddAnnouncement(this.state)

  }
  render() {
    return (
      <>
        <div class="content-wrapper">
          <div id="order_preview" class="wow fadeInUp content_box"
            style={{ visibility: 'visible', animationName: "fadeInUp" }}>
            <Row className="table-header">

              <Col xs='12' md='12'>
                <h2 class="section-title">New Company 
                {/* <Link to='/'
                  class="btn btn-default pull-right"><i class="fa fa-chevron-left"></i> Back</Link> */}
                  </h2>
              </Col>
            </Row>
            <div class="row">
              <Row>


                <Col xs='12' md='5'>
                  <form>
                    <div class="form-group">
                      <label for="pwd">Company Name</label>
                      <input type="text" class="form-control" name="companyName" onChange={this.onChangeHandler} />
                    </div>
                    <div class="form-group">
                      <label for="pwd">Work Email</label>
                      <input type="text" class="form-control" name="workEmail" onChange={this.onChangeHandler} />
                    </div>
                    <div class="form-group">
                      <label for="pwd">Phone</label>
                      {/* <input type="text" class="form-control" name="phone" onChange={this.onChangeHandler} /> */}
                    <IntlTelInput
                      containerClassName="intl-tel-input"
                      inputClassName="form-control"
                      style={{
                        width: "100%"
                      }}
                    />
                    </div>

                    <div class="form-group">
                      <label for="pwd">Employee Limit</label>
                      <input type="number" class="form-control" name="limit" onChange={this.onChangeHandler} />
                    </div>

                    <div class="form-group">
                      <label for="pwd">Payment Type</label>
                      <select class="form-control" name='to_client' onChange={this.onTo}>
                      <option value="client">Select Payment Type</option>

                        <option value="client">Cheque</option>
                        <option value="reader">Credit Card</option>
                      </select>
                    </div>
                   
                  
                  </form>
                </Col>

                <Col xs='12' md='5'>
                  <form>
                  <div class="form-group">
                      <label for="pwd">Expense Group</label>
                      <select class="form-control" name='to_client' onChange={this.onTo}>
                      <option value="client">Select Expense Group</option>

                        <option value="client">1</option>
                        <option value="reader">2</option>
                        <option value="reader">3</option>

                      </select>
                    </div>
                    <div class="form-group">
                      <label for="pwd">Expense Image</label>
                      <select class="form-control" name='to_client' onChange={this.onTo}>
                      <option value="client">Select Expense Image</option>

                        <option value="client">Yes</option>
                        <option value="reader">No</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="pwd">Email Templates</label>
                      <select class="form-control" name='to_client' onChange={this.onTo}>
                      <option value="client">Select Email Templates</option>

                        <option value="client">1</option>
                        <option value="reader">2</option>
                        <option value="reader">3</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="pwd">Upload Logo</label>
                      <input type="file" class="form-control" name="phone" onChange={this.onChangeHandler} />
                    </div>
                    {/* <div class="form-group">
                      <label for="pwd">Publish</label>
                      <input type="file" class="form-control" name="phone" onChange={this.onChangeHandler} />
                    </div> */}
                   
                    <div class="form-group"
                      style={{
                        marginTop: 50
                      }}
                    >
                      <label for="pwd">Services</label>
                      <label class="switch"
                      style={{marginLeft: 10}}
                      >
                        <input type="checkbox"/>
                        <span class="checkbox_slider round"></span>
                      </label>
                    </div>
                    <button type="submit" class="btn btn-default" onClick={this.onSubmit}
                    style={{marginTop: 10, float: 'right',padding: '8px 16px',fontSize: 16}}
                    >Create</button>
                  </form>
                </Col>

              </Row>
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

export default NewCompany




// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignUp() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography 
//         component="h1" variant="h4"
//         >
//           Sign up
//         </Typography>
//         <form className={classes.form} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="lname"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                 label="I want to receive inspiration, marketing promotions and updates via email."
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign Up
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link href="#" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }