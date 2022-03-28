import React from "react";
import { Button, Form } from "react-bootstrap";

const From = () => {
  return (
    <Form className="mt-3 container w-25 bg-info">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Please Your Email" />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
        
      >
        <Form.Label>Comment textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button>Submit</Button>
    </Form>
  );
};

export default From;
