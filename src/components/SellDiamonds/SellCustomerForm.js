import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useHistory } from "react-router-dom";

function SellForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const history = useHistory();

    function handleName(e){
        setName(e.target.value)
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePhone(e){
        setPhone(e.target.value)
    }

    function handleAdress1(e){
        setAddress1(e.target.value)
    }

    function handleAddress2(e){
        setAddress2(e.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        const formData = {
            name: name,
            email: email,
            phone: phone,
            address1: address1,
            address2: address2
        
    
        }
    
        const configObj = {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }
    
        fetch('http://localhost:3000/customersSold', configObj)
        .then(res => res.json())
        .then(data => console.log(data))
        alert("Congratulations on your Sale")
        history.push("/stockdashboard")
    
      }




  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control value={name} onChange={handleName} type="text" placeholder="John Smith" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control value={email} onChange={handleEmail} type="text"  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control value={phone} onChange={handlePhone} type="number"  />
        </Form.Group>
       
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address 1</Form.Label>
        <Form.Control value={address1} onChange={handleAdress1} type="text" placeholder="Street Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control value={address2} onChange={handleAddress2} type="text" placeholder="City, State, Zip Code" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Sell To Customer
      </Button>
    </Form>
  );
}

export default SellForm;