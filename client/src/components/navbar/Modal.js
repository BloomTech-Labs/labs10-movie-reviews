import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import GoogleLogin from '../../assets/svg/btn_google_1.png';
import TwitterLogin from '../../assets/svg/btn_twitter_1.svg';
import { googleLogin, twitterLogin } from '../../services/authURLs';

import RenderLogin from './RenderLogin';




const ModalExample = props => {
    return (
      <div>
        <Button color="light" onClick={props.toggle}>{props.buttonLabel}</Button>
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
          <ModalHeader toggle={props.toggle}>Log In To Start Writing Reviews!</ModalHeader>
          <ModalBody>
              <RenderLogin>
                <a href={googleLogin}><img src={GoogleLogin} alt="Log In to Google"/></a>
              </RenderLogin>
              <RenderLogin>
                <a href={twitterLogin}><img src={TwitterLogin} alt="Log In to Twitter"/></a>
              </RenderLogin>
          </ModalBody>
        </Modal>
      </div>
    );
  }

export default ModalExample;