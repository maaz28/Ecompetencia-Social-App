import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import { auth } from "../../../../config/firebase-configuration";
import { LoginConsumer } from "../../../../config/ContextConfig";
import history from "../../../../config/history";
// import {LoginConsumer} from './config/ContextConfig';

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleLogout = (isLogin) => {
    auth.signOut().then(function() {
      // Sign-out successful.
      // history.push('/') 
      isLogin();
    }, function(error) {
      // An error happened.
    });
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>

        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/0.jpg")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">FaceKitaab</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          {/* <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
            </DropdownItem>
            <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
            </DropdownItem>
            <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> Files
            </DropdownItem>
            <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
            </DropdownItem>
          <DropdownItem divider /> */}
        <LoginConsumer>{({isLogin, login}) => { 
        return (
          <DropdownItem tag={Link} to="/" className="text-danger" onClick = {() => this.handleLogout(isLogin) }>
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        //   <button
        //   onClick={isLogin}>
        //   {(login) ? "true" : "false"}
        // </button>
        )
        }}</LoginConsumer>
        </Collapse>
      </NavItem>
    );
  }
}
