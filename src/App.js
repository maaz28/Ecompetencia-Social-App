import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {LoginProvider} from './config/ContextConfig';
import routes from "./routes";
import withTracker from "./withTracker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Login from './views/Login';
import history from './config/history';
import Signup from './views/Signup';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.isLogin = () => {
      this.setState(state => ({
        login : !state.login
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      login: false,
      isLogin: this.isLogin,
    };
  }

  render() {
    return (
      <LoginProvider value={this.state}> 
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <div>
          {
            (this.state.login) ? (
              routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={withTracker(props => {
                      return (
                        <route.layout {...props}>
                          <route.component {...props} />
                        </route.layout>
                      );
                    })}
                  /> 
                );
              })
            ) : (
              <React.Fragment>
                  <Route exact path="/" component={Login}/>   
                  <Route exact path="/signin" component={Login}/>   
                  <Route exact path="/signup" component={Signup}/>                
                {/* <Redirect to="/login" />  */}
              </React.Fragment>
            )
          }
         
        </div> 
      </Router>
      </LoginProvider>
    )
  }
}

