import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import * as SC from './styled';

const BWContent = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <SC.PlayButton onClick={() => setShow(true)}>
        <img src="assets/images/play-icon.png" alt="Play Button" />
      </SC.PlayButton>
      <Modal size="lg" centered show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <SC.VideoContainer>
            <iframe
              title="play-dapp"
              src="https://www.youtube.com/embed/sfKYyvUaCXU?controls=0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </SC.VideoContainer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BWContent;
