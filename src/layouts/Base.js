import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const BaseLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      <Col
        className="main-content p-0"
        lg={{ size: 12, offset: 0 }}
        md={{ size: 12, offset: 0 }}
        sm="12"
        tag="main"
      >
        {/* {!noNavbar && <MainNavbar />} */}
        {children}
        {/* {!noFooter && <MainFooter />} */}
      </Col>
    </Row>
  </Container>
);

// const BaseLayout = ({children}) => (
//   <div>
//     {children}
//   </div>
// );

BaseLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

BaseLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default BaseLayout;
