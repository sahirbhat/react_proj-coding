import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



function Example() {
 

const [student, setStudent] = useState({
  
  title: "",
  desc : "",
  col:" "
 },[]);
 function onTextFieldChange(e) {
  setStudent({
   ...student,
   [e.target.name]: e.target.value
  },)
 }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  async function onFormSubmit(e) {
    e.preventDefault()
    
     await axios.post(`http://localhost:3333/posts`, student)
      setStudent('')

    
   }
   
   

  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Card
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
              
              name="title"
                type="text"
                placeholder=""
                autoFocus
                required
                minLength={4}
                maxLength={15}
                contentEditable
                
                
             onChange={e=>onTextFieldChange(e)} />
            </Form.Group>
            
          </Form></Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
        <Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
              
              name="desc"
                type="text"
                placeholder=""
                autoFocus
                required
                minLength={25}
                maxLength={100}
                onChange={e=>onTextFieldChange(e)} />
            </Form.Group>
      <Form.Select aria-label="Default select example"   name="col" onChange={e=>onTextFieldChange(e)} >
      <option value="1">select yr coloum</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </Form.Select>
            
          </Form>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"   onClick={e=>onFormSubmit(e)}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
       
   
      
    </>
  );
}
;
export default Example;