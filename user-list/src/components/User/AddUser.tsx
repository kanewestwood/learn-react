import React, { ChangeEvent, FormEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import CardBasic from "../Ui/CardBasic";
import ModalBasic from "../Ui/ModalBasic";

/**
 * Add User Component
 *
 * @param {object} props props for component
 * @param {Function} props.onAddUser onAddUser function
 * @class
 */
const AddUser = (props: { onAddUser: (name: string, age: string) => void }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState({ error: false, title: "", message: "" });

  /**
   * Close Modal
   *
   * @returns {void} set modal to hide
   */
  const handleClose = () => setError({ error: false, title: "", message: "" });

  /**
   * Show modal
   *
   * @param {string} title title for modal
   * @param {string} message message for modal
   * @returns {void} show modal
   */
  const handleShow = (title: string, message: string) =>
    setError({ error: true, title: title, message: message });

  /**
   * Form Handler for when a user is added
   *
   * @param {FormEvent} event event from form
   */
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      handleShow(
        "Please enter name and age",
        "Name and age are required fields"
      );
      return;
    }
    if (+enteredAge < 1) {
      handleShow("Please enter a valid age", "Age has to be greater than 0");
      return;
    }
    props.onAddUser(enteredName, enteredAge);
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
    <div>
      {error.error && (
        <ModalBasic
          title={error.title}
          message={error.message}
          showModal={error.error}
          onClose={handleClose}
        />
      )}
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
    </div>
  );
};

export default AddUser;
