import React, { FormEvent } from "react";
import { Form, Button } from "react-bootstrap";
import CardBasic from "../Ui/CardBasic";

/**
 * Add User Component
 *
 * @class
 */
const AddUser = () => {
  /**
   * Form Handler for when a user is added
   *
   * @param {FormEvent} event event from form
   */
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <CardBasic className="mt-4">
      <Form onSubmit={formSubmitHandler}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter age" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </CardBasic>
  );
};

export default AddUser;
