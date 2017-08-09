import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppForm from './AppForm';

const modalInstance = (props) => {
    const { showModal, toggleModal, onNameChange, onDescChange, onUrlChange,
      onImageUrlChange, onSubmit, appCreationError, displayname, description, linkUrl, iconimage } = props;
    return (
        <Modal show={showModal} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AppForm
              onNameChange={onNameChange}
              onDescChange={onDescChange}
              onUrlChange={onUrlChange}
              onImageUrlChange={onImageUrlChange}
              onSubmit={onSubmit}
              displayname={displayname}
              description={description}
              linkUrl={linkUrl}
              iconimage={iconimage}
            />
          </Modal.Body>
          <Modal.Footer>
            {
              (appCreationError)
              ?
              <span className="errorMsg">{appCreationError}</span>
              :
              <div/>
            }
            <Button onClick={onSubmit}>Save</Button>
          </Modal.Footer>
        </Modal>
    );
};

modalInstance.propTypes = {
    showModal: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onDescChange: PropTypes.func.isRequired,
    onUrlChange: PropTypes.func.isRequired,
    onImageUrlChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    appCreationError: PropTypes.bool,
    displayname: PropTypes.string,
    description: PropTypes.string,
    linkUrl: PropTypes.string,
    iconimage: PropTypes.string
};

export default modalInstance;