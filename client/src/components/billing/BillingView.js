import React from 'react';
import { Container, Row, Col, Nav, NavLink, NavItem, Card, CardTitle, CardText, CardHeader, CardBody } from 'reactstrap';
import './billing.css';
import BillingButton from "./BillingButton";

const BillingView = () => {

  const subInfo = {
    oneYear: {
      header: "Year Subscription",
      priceTitle: "$9.99",
      totalCents: 999,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Buy Now",
    },
    oneMonth: {
      header: "Month Subscription",
      priceTitle: "$0.99",
      totalCents: 99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Buy Now",
    },
  }
    
  return (
    <Container className="mt-5">
      <Row>
        <Col sm="2">
          <Nav vertical>
            <NavItem>
              <NavLink href="#">Documents</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Billing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Settings</NavLink>
            </NavItem>
          </Nav>
        </Col>
        
        <Col sm="10">
          <h1 className="display-4 main-title">Subscriptions</h1>
          <div className="card-container">
            <Row>
              <Col sm="6">
                <Card className="card">
                  <CardHeader tag="h3">{subInfo.oneYear.header}</CardHeader>
                  <CardBody>
                    <CardTitle className="">{subInfo.oneYear.priceTitle}</CardTitle>
                    <CardText className="card-text">{subInfo.oneYear.description}</CardText>
                    <BillingButton 
                      header = {subInfo.oneYear.header}
                      priceTitle = {subInfo.oneYear.priceTitle}
                      totalCents = {subInfo.oneYear.totalCents}
                      buttonText = {subInfo.oneYear.buttonText}
                    />
                  </CardBody>
                </Card>
              </Col>

              <Col sm="6">
                <Card className="sub-card">
                  <CardHeader tag="h3">{subInfo.oneMonth.header}</CardHeader>
                  <CardBody>
                    <CardTitle>{subInfo.oneMonth.priceTitle}</CardTitle>
                    <CardText>{subInfo.oneMonth.description}</CardText>
                    <BillingButton 
                      header = {subInfo.oneMonth.header}
                      priceTitle = {subInfo.oneMonth.priceTitle}
                      totalCents = {subInfo.oneMonth.totalCents}
                      buttonText = {subInfo.oneMonth.buttonText}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BillingView;