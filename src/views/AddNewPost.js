import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import ProjectShortView from "../components/user-profile-lite/ProjectShortView";

const AddNewPost = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Project" subtitle="Interior Project" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      {/* <Col lg="9" md="12">
        <Editor />
      </Col> */}
 <Col lg="4">
        <ProjectShortView />
      </Col>
      <Col lg="8">
        <UserAccountDetails />
      </Col>
      {/* Sidebar Widgets */}
      {/* <Col lg="3" md="12">
        <SidebarActions />
        <SidebarCategories />
      </Col> */}
    </Row>  
  </Container>
);

export default AddNewPost;
