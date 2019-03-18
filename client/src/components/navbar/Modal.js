import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import GoogleLogin from '../../assets/svg/btn_google_1.png';
import { googleLogin } from '../../services/authURLs';
import "./Navbar.css";

import RenderLogin from './RenderLogin';




const LoginModal = props => {
    return (
      <>
        <div className="bg-light login" onClick={props.toggle}>{props.buttonLabel}</div>
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
          <ModalHeader toggle={props.toggle}>Log In To Start Writing Reviews!</ModalHeader>
          <ModalBody>
              <RenderLogin>
                <a href={googleLogin}><img src={GoogleLogin} alt="Log In to Google"/></a>
              </RenderLogin>
          </ModalBody>
        </Modal>
      </>
    );
  }

export default LoginModal;