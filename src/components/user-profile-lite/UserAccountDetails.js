import React, {Component} from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import ImageUploader from "../image-uploader";
import { db } from "../../config/firebase-configuration";
import { Alert } from "shards-react";


class UserAccountDetails extends React.Component {
  
  state = {
    description : '',
    success : false
  }
  
  img_url_item2_handler = (url) => {
    console.log(url);
    this.setState({
      img_url_item2 : url
    })
  }

  img_url_item1_handler = (url) => {
    console.log(url);
    this.setState({
      img_url_item1 : url
    })
  }

  banner_image_url_handler = (url) => {
    this.setState({
      banner_image_url : url
    })
  }
  
  submitHandler = () => {
    let that = this;
    let user_info = localStorage.getItem("user")
    console.log(user_info);
    let obj = {
      user_info,
      description : this.state.description
    }
    db.ref('/posts').push(obj)
  .then(function(res) {
      console.log("Document written with ID: ", res);
      alert('post successfully added !')
      // window.location.reload()
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
  const {title, sub_title} = this.props;
  return(
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                {/* <Row form> */}
                  {/* First Name */}
                  {/* <Col md="6" className="form-group">
                    <label htmlFor="feFirstName">First Name</label>
                    <FormInput
                      id="feFirstName"
                      placeholder="First Name"
                      value="Sierra"
                      onChange={() => {}}
                    />
                  </Col> */}
                  {/* Last Name */}
                  {/* <Col md="6" className="form-group">
                    <label htmlFor="feLastName">Last Name</label>
                    <FormInput
                      id="feLastName"
                      placeholder="Last Name"
                      value="Brooks"
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
                <Row form> */}
                  {/* Email */}
                  {/* <Col md="6" className="form-group">
                    <label htmlFor="feEmail">Email</label>
                    <FormInput
                      type="email"
                      id="feEmail"
                      placeholder="Email Address"
                      value="sierra@example.com"
                      onChange={() => {}}
                      autoComplete="email"
                    />
                  </Col> */}
                  {/* Password */}
                  {/* <Col md="6" className="form-group">
                    <label htmlFor="fePassword">Password</label>
                    <FormInput
                      type="password"
                      id="fePassword"
                      placeholder="Password"
                      value="EX@MPL#P@$$w0RD"
                      onChange={() => {}}
                      autoComplete="current-password"
                    />
                  </Col>
                </Row> */}
                <Row form>
                <Col md="12" className="form-group">
                {/* <FormGroup>
                  <label htmlFor="feAddress">Title</label>
                  <FormInput
                    placeholder="Title"
                    onChange={this.handleChange('title')}
                  />
                </FormGroup> */}
                </Col>
                  {/* Description */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">Description</label>
                    <FormTextarea id="feDescription" rows="5" onChange={this.handleChange('description')}/>
                  </Col>
                </Row>
                <br/>
                <Button theme="accent" onClick = {this.submitHandler}>Add Post</Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
      {
        (this.state.success) ? (
              <Alert theme="success">
        Alert - Success Theme -{" "}
        <a className="alert-link" href="#">
          Example Link
        </a>
      </Alert>
        ) : null
      }
    </Card>
  );
}
}

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details",
  sub_title : "Add Project Items"
};

export default UserAccountDetails;
