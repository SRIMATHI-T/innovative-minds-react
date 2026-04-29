import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const WorkshopModal = ({ show, handleClose, title, content }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Innovatives</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WorkshopModal;
