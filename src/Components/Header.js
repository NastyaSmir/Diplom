import React, { Component } from 'react';
import { 
    Container, 
    FormControl, 
    Nav, 
    Navbar, 
    Form,
    Button
} from "react-bootstrap";
import logo from "./logo.png"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../Pages/Home'; 
import Login from '../Pages/Login'; 
import About from '../Pages/About'; 
import Service from '../Pages/Service'; 

export default class Header extends Component {
    render() {
        return (
            <>
                <Router>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img 
                                src={logo}
                                height="50"
                                width="80"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand> 
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Главная</Nav.Link>
                                <Nav.Link as={Link} to="/login">Логин</Nav.Link> 
                                <Nav.Link as={Link} to="/service">Услуги</Nav.Link> 
                                <Nav.Link as={Link} to="/about">О компании</Nav.Link>  
                            </Nav> 
                            <Form inline> 
                                <FormControl 
                                    type="text" 
                                    placeholder="Search" 
                                    className="mr-sm-2"
                                /> 
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                   <Routes>
                            <Route path='/' element={<Home/>} />
                            <Route path='/login' element={<Login/>} />
                            <Route path='/service' element={<Service/>} />
                            <Route path='/about' element={<About/>} />
                    </Routes>
                </Router>
            </>
        )
    }
}