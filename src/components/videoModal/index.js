import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function VideoModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      id="videoModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <Modal.Dialog>
        <Modal.Content className="rounded-0">
          <Modal.Header closeButton>
            <Modal.Title id="exampleModalLabel">Youtube Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="ratio ratio-16x9">
              <iframe className="embed-responsive-item" src={props.videoSrc} id="video" allowFullScreen allowScriptAccess="always" allow="autoplay"></iframe>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Dialog>
    </Modal>
  );
}

export default VideoModal;
