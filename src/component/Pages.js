import React from 'react'
import { Button, Form, Col,Row,Container } from 'react-bootstrap';

export default function Pages() {
    return (
        <div className ="pages">
            <div className="container">
          <Form> 
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="3" className='text-left'>
                Enterz IDCS
              </Form.Label>
              <Col sm="6">
                <Form.Control type="password" placeholder="000000" />
              </Col>
            </Form.Group>  
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                  Enter NUmber de Telephone
                </Form.Label>
                <Col sm="6">
                  <Form.Control type="password" placeholder="06-4456-000" />
                </Col>
              </Form.Group> 
              <Form.Group as={Row} controlId="formPlaintextPassword">               
                <Col sm="12" className='text-center'>
                <Button type="submit" variant="primary" >
                   Envoyer OTP
                </Button>
                </Col>
              </Form.Group> 
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                Renserignnez OTP
                </Form.Label>
                <Col sm="6">
                  <Form.Control type="type" placeholder="06-4456-000" />
                </Col>
              </Form.Group>
              <Row>
                <Col md='3'></Col>
                <Col md='3'>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                <Button type="submit" variant="primary" >
                   Generate VID
                </Button>
              </Form.Group>
                </Col>
                <Col md='3'>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                <Button type="submit" variant="primary" >
                   Annuler
                </Button>
              </Form.Group>
                </Col>
                <Col md='3'></Col>
              </Row>
            </Form>

     








<Form>
  <Row>
    <Col>
      <Form.Control placeholder=" Generrer VID" />
    </Col>
    <Col>
      <Form.Control placeholder="Annuler" />
    </Col>
  </Row>
</Form>



  






  
<Form>
  <Row>
    <Col>
      <Form.Control placeholder=" Identite virtuelle  generee   GH542157524" />
    </Col>

  </Row>
</Form>








</div>
        </div>
    )
}
