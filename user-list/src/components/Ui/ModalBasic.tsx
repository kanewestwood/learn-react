import React from "react";
import { Modal, Button } from "react-bootstrap";

/**
 * Modal Basic Component
 *
 * @param {Object} props props for component
 * @param {string} props.title title for component
 * @param {string} props.message message for component
 * @param {boolean} props.showModal boolean if modal should be open
 * @param {Function} props.onClose When to call close modal
 * @class
 */
const ModalBasic = (props: {
  title: string;
  message: string;
  showModal: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal show={props.showModal} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.onClose()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBasic;
