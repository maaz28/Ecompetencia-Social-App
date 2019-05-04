/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component } from 'react'
import { db } from '../config/firebase-configuration';

export default class BlogPosts extends Component {

  state = {
    users : []
  }

  componentDidMount() {
    db.ref('/users').on('child_added', (snapshot) => {
      let arr = this.state.users;
      arr.push(snapshot.val())
      this.setState({
        users : arr
      })
    })
  }

  handlerClick = (i) => {
    document.getElementById(i).disabled = true;
  }

  render() {
    return ( 
      <div>

Users List
{        this.state.users.map((item, i) => (
  <div key = {i}>{item.email} <br/>
  <button id = {i} onClick = {() => {this.handlerClick(i)} } >Send Request</button>
  </div>
        )
)} 
      </div>
    )
  }
}