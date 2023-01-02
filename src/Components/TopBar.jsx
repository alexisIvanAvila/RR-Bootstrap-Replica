import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'



function TopBar() {
    return (

    <Navbar bg="white" expand="lg" >
      <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
      <img 
          src="https://getvectorlogo.com/wp-content/uploads/2022/08/instacart-vector-logo-2022.png"
          width="190"
          height="120"
          alt="Instacart Logo">
        </img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" style={{margin: "50px"}}>
          <Nav>
              <Nav.Link style={{color: "#343538"}} href="#LogIn">Log In</Nav.Link>
              <Button variant="success" href="#SignUp">Sign Up</Button>
          </Nav>
      </Navbar.Collapse>
  </Navbar>



)
}

export default TopBar