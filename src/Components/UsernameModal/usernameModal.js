import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { useDispatch, useSelector } from 'react-redux';
import { editUsernameReq } from '../../redux/actions/authedUserActions';
import { UPDATE_USER } from '../../redux/ActionTypes';

export default function UsernameModal({show, setShow}){
  
  const dispatch = useDispatch();
  const authedUser = useSelector(state => state.authedUser);
  
  const saveUsername = () => {
    let u = document.getElementById('inp-username').value;
    dispatch(editUsernameReq(u, authedUser.authedUser.token))
    .then(res => {
      if (res.type === UPDATE_USER){
        alert('Successfully set!');
        setShow(false);
      }
      else{
        alert(res);
      }
    });
  }

  return(
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Set Username to continue...</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <input placeholder='Enter your username' id='inp-username' />
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" className="btn btn-primary" onClick={saveUsername}>Save Username</Button>
      </Modal.Footer>
    </Modal>
      // {/* <Modal isOpen={true}>
      //   <ModalHeader>Set Username to continue...</ModalHeader>
      //   <ModalBody>
      //     <input placeholder='Enter your username' id='inp-username' />
      //   </ModalBody>
      //   <ModalFooter >
      //       <Button type="button" className="btn btn-primary" onClick={saveUsername}>Save Username</Button>
      //   </ModalFooter>
      // </Modal> */}
  );
}