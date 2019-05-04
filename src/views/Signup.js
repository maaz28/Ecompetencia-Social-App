import React, { Component } from "react";
import {validEmail, validPassword} from '../utils/helper.js'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import FormHelperText from '@material-ui/core/FormHelperText';
// import 'date-fns';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import history from "../config/history.js";
// import DateFnsUtils from '@date-io/date-fns';
// import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import { Link } from "react-router-dom";
import { auth, db } from "../config/firebase-configuration.js";
 
const styles = theme => ({
  main: {
    width: 'auto', 
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
        backgroundColor : "rgba(256,256,256,0.7)",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#F50057',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    backgroundColor : 'black',
    marginTop: theme.spacing.unit * 3,
  },
});


class SignUp extends Component {
   
  state = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    errorMessage : '',
    // dob : '1996-05-24',
    loading : false,
    errorPassword : false,
    errorEmail : false,
    error : false,
    selectedDate : new Date('2019-02-21T21:11:54')
  }

  componentWillReceiveProps(next){
    this.setState({
      error : true,
      errorMessage : next.errorMessage
    })
  }

  emailHandler = (ev) =>{
    this.setState({
      email : ev.target.value
    })
  }

  passwordHandler = (ev) => {
    this.setState({
      password : ev.target.value
    })
  }

  firstNameHandler = (ev) => {
    this.setState({
      firstName : ev.target.value
    }) 
  }
  lastNameHandler = (ev) => {
    this.setState({
      lastName : ev.target.value
    }) 
  }

  emailBlurHandler = (ev) => {
    if(!validEmail(ev.target.value)){
      this.setState({
    errorEmail : true
      })
    }
    else{
      this.setState({
        errorEmail : false
          })
    }
  }
  
  passwordBlurHandler = (ev) => {
    if(!validPassword(ev.target.value)){
      this.setState({
      errorPassword : true
      })
    }
    else{
      this.setState({
        errorPassword : false,
        error : false
          })
    }
  }

  submitBtnHandler = (ev) => {
    ev.preventDefault();
    let obj = {
      email : this.state.email,
      password : this.state.password,
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      time : Date.now(),
      // dob : this.state.selectedDate
    }
    if((obj.email === "" || obj.password === "" || obj.name === "" || obj.dob === "" || this.state.errorEmail || this.state.errorPassword)){
      this.setState({
        error : true,
        errorMessage : 'All the fields are required!'
      })
    }
    else {
      this.setState({
        error : false
      })
      console.log(obj)
      auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
          // this.submitTrasaction();
          let uid = auth.currentUser.uid;
          // console.log('work');
          db.ref('/users/'+uid).set(obj)
          .then((res) => {
            alert('user created successfully');
            window.location.href = window.location.href+'/';
          })
          .catch(err => alert(err.message))
      })
      .catch(err => {
          alert(err.message)
      })
      // this.props.submitHandler(obj);
    }
  }


   Handler(){
     history.push('/')
    // this.props.SigninHandler();
  }

  // handleBirthdayChange = (ev) => {
  //   console.log(ev.target.value)
  //   this.setState({
  //     dob : ev.target.value
  //   })
  // }

  handleBirthdayChange = date => {
    this.setState({ selectedDate: date });
  };
  
  render(){
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar} style = {{backgroundColor : "#00D8EF"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input 
              id="email" 
              name="email" 
              autoComplete="email" 
              autoFocus
              onChange = {this.emailHandler}
              onBlur = {this.emailBlurHandler}
              />
            </FormControl>
            <FormHelperText style = {{color : 'red'}}>{(this.state.errorEmail) ? "Email is not valid" : ""}</FormHelperText>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input 
              name="password" 
              type="password" 
              id="password" 
              autoComplete="current-password" 
              onChange = {this.passwordHandler}
              onBlur = {this.passwordBlurHandler}
              />
            </FormControl>
            <FormHelperText style = {{color : 'red'}}>{(this.state.errorPassword) ? "Password length should be atleast 6 charaters long" : ""}</FormHelperText>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">First Name</InputLabel>
              <Input 
              name="name" 
              type="name" 
              id="name" 
              autoComplete="name" 
              onChange = {this.firstNameHandler}
              onBlur = {this.nameBlurHandler}
              />
              
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Last Name</InputLabel>
              <Input 
              name="name" 
              type="name" 
              id="name2" 
              autoComplete="name" 
              onChange = {this.lastNameHandler}
              onBlur = {this.nameBlurHandler}
              />
              
            </FormControl>
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>            
            <DatePicker
            margin="normal"
            label="Date Of Birth"
            value={this.state.selectedDate}
            // onChange={this.handleDateChange}
            onChange = {this.handleBirthdayChange}
          />
            </MuiPickersUtilsProvider> */}
            {
              (this.state.error) ? (
          <div style = {{margin :'0px', marginTop : '8px', color : 'red'}}>
          <p>{this.state.errorMessage}</p>
          </div>
              ) : null
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {this.submitBtnHandler}
            >
              Sign up
            </Button>
          </form>
          <div style = {{margin :'0px', marginTop : '8px'}}>
          <p>Don't have an account? <Link to = "/">SignIn </Link> here </p>
          </div>
        </Paper>
      </main>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);