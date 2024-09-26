import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';


function Login() {
    // Estados para los datos del perfil
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }

        
        if (password.length < 8) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        
        console.log('Datos guardados', { username, password });
    };

    return (
        <Container className="justify-content-center d-flex">
            <div className='formulario'>
            <Row className="">
                <Col md={12}>
                    <div className="perfil-box">
                        <h1>Log in</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group controlId="formFullName">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </Form.Group>
                            <Button 
                                className="w-100 mt-4 d-flex justify-content-start"
                                type="submit"
                            >
                                Log in
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
            </div>
        </Container>
    );
}

export default Login;
