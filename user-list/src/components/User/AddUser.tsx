import React, { ChangeEvent, FormEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import CardBasic from "../Ui/CardBasic";

/**
 * Add User Component
 *
 * @class
 */
const AddUser = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  /**
   * Form Handler for when a user is added
   *
   * @param {FormEvent} event event from form
   */
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  /**
   * Input Handler for when name changes
   *
   * @param {ChangeEvent<HTMLInputElement>} event event from input
   */
  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  /**
   * Input Handler for when age changes
   *
   * @param {ChangeEvent<HTMLInputElement>} event event from input
   */
  const ageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(event.target.value);
  };

  return (
    <CardBasic className="mt-4">
      <Form onSubmit={formSubmitHandler}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={nameChangeHandler}
            value={enteredName}
          />
        </Form.Group>
        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </CardBasic>
  );
};

export default AddUser;
