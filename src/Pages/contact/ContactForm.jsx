import React, { useState } from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white shadow p-5 rounded-4">
      <Form id="contact-form" className="row" onSubmit={handleSubmit}>
        <div className="messages"></div>
        <FormGroup className="col-md-6">
          <Label className="font-w-6">First Name</Label>
          <Input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
            data-error="Name is required."
          />
          <div className="help-block with-errors"></div>
        </FormGroup>
        <FormGroup className="form-group col-md-6">
          <Label className="font-w-6">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
            data-error="Name is required."
          />
          <div className="help-block with-errors"></div>
        </FormGroup>
        <FormGroup className="form-group col-md-12">
          <Label className="font-w-6">Email Address</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            data-error="Valid email is required."
          />
          <div className="help-block with-errors"></div>
        </FormGroup>
        <FormGroup className="form-group col-md-12">
          <Label className="font-w-6">Phone Number</Label>
          <Input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            required
            data-error="Phone is required"
          />
          <div className="help-block with-errors"></div>
        </FormGroup>
        <FormGroup className="form-group col-md-12">
          <Label className="font-w-6">Topic</Label>
          <Input
            type="select"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="">- Select Topic</option>
            <option value="1">Consulting</option>
            <option value="2">Finance</option>
            <option value="3">Marketing</option>
            <option value="4">Advanced Analytics</option>
            <option value="5">Planning</option>
          </Input>
        </FormGroup>
        <FormGroup className="form-group col-md-12">
          <Label className="font-w-6">Message</Label>
          <Input
            type="textarea"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control rounded-4 h-auto"
            placeholder="Message"
            rows="4"
            required
            data-error="Please leave us a message."
          />
          <div className="help-block with-errors"></div>
        </FormGroup>
        <Col className="mt-4">
          <Button color="primary" type="submit">
            Send Messages
          </Button>
        </Col>
      </Form>
    </div>
  );
};

export default ContactForm;
