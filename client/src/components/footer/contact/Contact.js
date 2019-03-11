import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Contact.css';

const Contact = props => {
  return (
    <div className="contact-wrapper">
      <Form
        className="contact-form"
        action={`https://formspree.io/kopecky12112@gmail.com`}
        method="POST"
      >
        <p className="contact-header">Feedback? Suggestions?</p>
        <div className="input-wrapper">
          <FormGroup className="contact-form-input">
            <Label>Name:</Label>
            <Input
              type="text"
              name="name"
              className="form-blank-name-email"
              placeholder="Enter your name - required"
              required
            />
          </FormGroup>
          <FormGroup className="contact-form-input">
            <Label for="email">Email:</Label>
            <Input
              type="email"
              name="_replyto"
              className="form-blank-name-email"
              placeholder="Enter your email - required"
              required
            />
          </FormGroup>

          <FormGroup className="contact-form-input">
            <Label for="message">Message:</Label>
            <Input
              type="textarea"
              name="message"
              className="message"
              required
              placeholder="required"
            />
          </FormGroup>

          <Button className="submit-button" type="submit" value="Send Message">
            "Contact" Us
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
