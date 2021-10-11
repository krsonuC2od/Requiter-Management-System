import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {col, Container, Row , Form, Button} from "react-bootstrap";
function LoginCard () {
    return(
        <>
        <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded"> Admin Login</h1>
        <Row>
        <col lg={5} md={6} sm={12}>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </col>
        </Row>
        </Container>
        </>
    );
};
export default LoginCard;