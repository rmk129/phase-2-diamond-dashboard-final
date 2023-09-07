import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function SellForm() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="John Smith" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="number"  />
        </Form.Group>
       
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address 1</Form.Label>
        <Form.Control type="text" placeholder="Street Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control type="text" placeholder="City, State, Zip Code" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Sell To Customer
      </Button>
    </Form>
  );
}

export default SellForm;