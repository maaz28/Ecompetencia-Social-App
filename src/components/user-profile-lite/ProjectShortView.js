import React, { Component } from 'react'
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";
import { db } from '../../config/firebase-configuration';



export default class ProjectShortView extends Component {

  state = {
    posts : []
  }

  componentDidMount() {
    db.ref('/posts').on('child_added', (snapshot) => {
      let array = this.state.posts
      array.push(snapshot.val())
      // console.log(snapshot.val())
      this.setState({
        posts : array
      })
    })
  }

  render() {
    return (
      <div>       
  <Card small className="mb-4 pt-3">
      {
        this.state.posts.map((item, ind) => (
          
    <ListGroup flush>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {item.description}
        </strong>
      </ListGroupItem>
    </ListGroup>
        ))
      }
  </Card>
      </div>
    )
  }
}


// const ProjectShortView = ({ ProjectShortView }) => (
// );

// ProjectShortView.propTypes = {
//   /**
//    * The user details object.
//    */
//   ProjectShortView: PropTypes.object
// };

// ProjectShortView.defaultProps = {
//   ProjectShortView: {
//     name: "Sierra Brooks",
//     avatar: require("./../../images/avatars/0.jpg"),
//     jobTitle: "Project Manager",
//     performanceReportTitle: "Workload",
//     performanceReportValue: 74,
//     metaTitle: "Description",
//     metaValue:
//       "Add your project information here"
//   }
// };
