import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useIntl, FormattedMessage } from 'react-intl'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const intl = useIntl(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      alert(intl.formatMessage({ id: 'invalid_email' }));
      return;
    }

    if (password.length < 6) {
      alert(intl.formatMessage({ id: 'short_password' })); 
      return;
    }

    console.log('Datos guardados', { username, password });
    navigate('/home');
  };

  return (
    <Container className="justify-content-center d-flex login">
      <div className="formulario">
        <Row>
          <Col md={12}>
            <div className="perfil-box">
              <h1>
                <FormattedMessage id="log_in" defaultMessage="Log in" />
              </h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                  <Form.Label>
                    <FormattedMessage id="email" defaultMessage="Email" /> 
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>
                    <FormattedMessage id="password" defaultMessage="Password" /> 
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button className="w-50 mt-4 d-flex justify-content-start" type="submit">
                  <FormattedMessage id="submit" defaultMessage="Log in" /> 
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
