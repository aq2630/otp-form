import React from 'react'
import { Button,Form, Col,Row,Container } from 'react-bootstrap';

export default function Pages() {
    return (
        <div className ="pages">
            <div className="container">
          <Form> 
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Enterz IDCS
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="000000" />
              </Col>
            </Form.Group>  
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Enter NUmber de Telephone
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password" placeholder="06-4456-000" />
                </Col>
              </Form.Group>  
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Renserignnez OTP
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="type" placeholder="06-4456-000" />
                </Col>
              </Form.Group>
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
