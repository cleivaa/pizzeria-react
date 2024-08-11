import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Register = ({handleOnChange, handleOnSubmit}) => {
    
  return (
    <div className="login">
        <h2>Register</h2>
    <Form onChange={handleOnChange} onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formViteUsername">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter your email"
        name='email' />
      </Form.Group>

      <Form.Group 
      className="mb-3" 
      controlId="formBasicPassword">

        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Enter your password" 
        name='password'/>
      </Form.Group>

      <Form.Group 
      className="mb-3" 
      controlId="formBasicPassword">

        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Confirm your password" 
        name='passwordconfirm'/>
      </Form.Group>

      <Button 
      variant="primary" 
      type="submit">
        Login
      </Button>
    </Form>
    </div>
  );
}

Register.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,

}
