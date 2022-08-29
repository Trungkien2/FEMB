import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { connect } from "react-redux";
import { createUser, userLogin } from "../../redux/actions/authAction";
import { Redirect,useHistory } from "react-router-dom";

const FormLogin = () => {
  // ** init state
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [formLogin, setformLogin] = useState({ userName: "", passWord: "" });
  const [formSignup, setformSignup] = useState({ userName: "", passWord: "" });
 
  const dispatch = useDispatch();

  // ** handle functionm
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formLogin.userName) setValidated(true);
    else dispatch(userLogin(formLogin));
  };

  const handleShow = () => setShow(!show);

  const onchangeLoginForm = (e) => {
    setformLogin({ ...formLogin, [e.target.name]: e.target.value });
  };
  const onchangeSignupForm = (e) => {
    setformSignup({ ...formSignup, [e.target.name]: e.target.value });
  };
  const handleSignup = () => {
    dispatch(createUser(formSignup));
  };



 
    return ( <div
      style={{
        background: "white",
        width: "300px",
        height: "300px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <Form
        className="p-3"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            type="text"
            placeholder="Enter email or userName"
            required
            name="userName"
            value={formLogin.userName}
            onChange={onchangeLoginForm}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a correct email or username
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="passWord"
            value={formLogin.passWord}
            onChange={onchangeLoginForm}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a passWord
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Button variant="primary" style={{ width: "100%" }} type="submit">
            Login
          </Button>
        </Form.Group>
        <Form.Group className="mb-3">
          <hr />
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
          <Button variant="success" onClick={handleShow}>
            Create new account
          </Button>
        </Form.Group>
      </Form>

      {/* {Modal sigup} */}

      <Modal show={show} onHide={handleShow} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create new account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-3">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control
                type="text"
                placeholder="Enter email or userName"
                required
                name="userName"
                value={formSignup.userName}
                onChange={onchangeSignupForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="passWord"
                value={formSignup.passWord}
                onChange={onchangeSignupForm}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSignup}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>)
   
};

export default FormLogin;
