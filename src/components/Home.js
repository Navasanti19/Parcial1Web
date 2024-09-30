import React, { useEffect, useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { useIntl, FormattedMessage } from 'react-intl';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  const [information, setInformation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState(""); 
  const [selectedText, setSelectedText] = useState(""); 

  const intl = useIntl(); 

  const imagesCycling = Array(10).fill("https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320");
  const imagesRunning = Array(10).fill("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg");
  const imagesSwimming = Array(10).fill("https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg");

  // Cargar la información del usuario
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://my.api.mockaroo.com/parcial.json?key=159f7fc0"
      );
      const data = await response.json();
      setInformation(data);
    };
    fetchData();
  }, []);

  // Manejar la apertura del modal
  const handleCardClick = (image, title, text) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setSelectedText(text);
    setShowModal(true); 
  };

  // Cerrar el modal
  const handleClose = () => setShowModal(false);

  if (!information) {
    return <div>Cargando...</div>;
  }

  return (
    <Container className="container justify-content-center">
      <Row>
        <Col className="d-flex justify-content-center">
          <h1><FormattedMessage id="cycling" defaultMessage="CYCLING" /></h1>
        </Col>
        <Col className="d-flex justify-content-center">
          <h1><FormattedMessage id="running" defaultMessage="RUNNING" /></h1>
        </Col>
        <Col className="d-flex justify-content-center">
          <h1><FormattedMessage id="swimming" defaultMessage="SWIMMING" /></h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Row>
            {imagesCycling.map((image, index) => (
              <Col key={index} className="col-6">
                <Card
                  className="text-white carta"
                  onClick={() => handleCardClick(image, intl.formatMessage({ id: 'cycling_session', defaultMessage: 'Cycling Session' }), 
                    intl.formatMessage({ id: 'location_duration' }, { location: information.ciudad, duration: information.duracion }))}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img src={image} alt="Card-image" className="Card-image" />
                  <Card.ImgOverlay>
                    <Card.Title className="text-start"><FormattedMessage id="cycling_session" defaultMessage="Cycling Session" /></Card.Title>
                    <Card.Text className="text-start">
                      {intl.formatMessage({ id: 'location' }, { location: information.ciudad })}
                    </Card.Text>
                    <Card.Text className="text-start">
                      {intl.formatMessage({ id: 'duration' }, { duration: information.duracion })}
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        <Col>
          <Row>
            {imagesRunning.map((image, index) => (
              <Col key={index} className="col-6">
                <Card
                  className="text-white carta"
                  onClick={() => handleCardClick(image, intl.formatMessage({ id: 'running_session', defaultMessage: 'Running Session' }), 
                    intl.formatMessage({ id: 'location_duration' }, { location: information.ciudad, duration: information.duracion }))}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img src={image} alt="Card-image" className="Card-image" />
                  <Card.ImgOverlay>
                    <Card.Title className="text-start"><FormattedMessage id="running_session" defaultMessage="Running Session" /></Card.Title>
                    <Card.Text className="text-start">
                      {intl.formatMessage({ id: 'location' }, { location: information.ciudad })}
                    </Card.Text>
                    <Card.Text className="text-start">
                      {intl.formatMessage({ id: 'duration' }, { duration: information.duracion })}
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col>
          <Row>
            {imagesSwimming.map((image, index) => (
              <Col key={index} className="col-6">
                <Card
                  className="text-white carta"
                  onClick={() => handleCardClick(image, intl.formatMessage({ id: 'swimming_session', defaultMessage: 'Swimming Session' }), 
                    intl.formatMessage({ id: 'location_duration' }, { location: information.ciudad, duration: information.duracion }))}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img src={image} alt="Card-image" className="Card-image" />
                  <Card.ImgOverlay>
                    <Card.Title className="text-start"><FormattedMessage id="swimming_session" defaultMessage="Swimming Session" /></Card.Title>
                    <Card.Text className="text-start">
                      {intl.formatMessage({ id: 'location' }, { location: information.ciudad })}
                    </Card.Text>
                    <Card.Text className="text-start">
                      {intl.formatMessage({ id: 'duration' }, { duration: information.duracion })}
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="rou align-items-center">
        <Col className="d-flex justify-content-center">
          <img
            src={information.photo}
            alt="imagen de perfil"
            className="image"
            style={{ width: 100, height: 100 }}
          />
        </Col>

        <Col className="d-flex flex-column justify-content-center">
          <h1>{information.nombre}</h1>
          <h1>{information.last_name}</h1>
        </Col>

        <Col className="d-flex justify-content-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/233/233146.png"
            alt="icon"
            className="icon1"
            style={{ width: 60 }}
          />
        </Col>

        <Col className="d-flex flex-column justify-content-center">
          <h1>{information.correr}:{information.correr}</h1>
        </Col>

        <Col className="d-flex justify-content-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144982.png"
            alt="icon"
            className="icon1"
            style={{ width: 60 }}
          />
        </Col>

        <Col className="d-flex flex-column justify-content-center">
          <h1>{information.nadar}:{information.nadar}</h1>
        </Col>

        <Col className="d-flex justify-content-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/923/923743.png"
            alt="icon"
            className="icon1"
            style={{ width: 60 }}
          />
        </Col>

        <Col className="d-flex flex-column justify-content-center">
          <h1>{information.cicla}:{information.cicla}</h1>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="bg-dark text-white">
            <Card.Img src={selectedImage} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Text>{selectedText}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            <FormattedMessage id="close" defaultMessage="Close" />
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Home;
