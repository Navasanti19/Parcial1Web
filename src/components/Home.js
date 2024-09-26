import React, { useEffect, useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  const [information, setInformation] = useState(null);
  const [posts, setPosts] = useState([]);
  const [profilepic, setProfilepic] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const [selectedImage, setSelectedImage] = useState(""); // Estado para la imagen seleccionada
  const [columns, setColumns] = useState(4); // Estado para el número de columnas

  const navigate = useNavigate(); // Inicializamos useNavigate

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

  // Cargar 12 imágenes pequeñas
  useEffect(() => {
    const fetchImages = async () => {
      const imagePromises = [];
      for (let i = 0; i < 12; i++) {
        imagePromises.push(fetch("https://picsum.photos/350"));
      }
      const responses = await Promise.all(imagePromises);
      const urls = responses.map((response) => response.url);
      setPosts(urls);
    };
    fetchImages();
  }, []);

  // Cargar la imagen de perfil
  useEffect(() => {
    const fetchProfilePic = async () => {
      const response = await fetch("https://picsum.photos/200");
      const url = response.url;
      setProfilepic(url);
    };
    fetchProfilePic();
  }, []);

  // Función para redirigir al perfil
  const navigateToProfile = () => {
    navigate("/perfil"); // Redirige a /perfil
  };

  // Manejar la apertura del modal con un nuevo fetch para obtener la imagen grande
  const handleImageClick = async (postImage) => {
    try {
      //const response = await fetch("https://picsum.photos/800"); // Hacemos fetch de la imagen más grande
      //const largeImageUrl = response.url;
      setSelectedImage(postImage); // Establecer la imagen seleccionada
      setShowModal(true); // Mostrar el modal
    } catch (error) {
      console.error("Error al cargar la imagen:", error);
    }
  };

  // Cerrar el modal
  const handleClose = () => setShowModal(false);

  // Verificar si la información ha sido cargada
  if (!information) {
    return <div>Cargando...</div>;
  }

  return (
    <Container className="container justify-content-center"> 
        <Row>
            <Col className="d-flex justify-content-center">
            <h1>CYCLING</h1>
            </Col>
            <Col className="d-flex justify-content-center">
            <h1>RUNNING</h1>
            </Col>
            <Col className="d-flex justify-content-center">
            <h1>SWIMMING</h1>
            </Col>
        </Row>
      <Row className="">
        <Col>
          {/* Mostrar las 12 imágenes de los posts */}
            <Row>
              <Col className="col-6">
                <img
                  src="https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <img
                  src="https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <img
                  src="https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <img
                  src="https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <img
                  src="https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
          
        </Col>
        <Col>
          {/* Mostrar las 12 imágenes de los posts */}
         
            <Row>
              <Col className="col-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/800px-Ludovic_and_Lauren_%288425515069%29.jpg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
          
        </Col>
        <Col>
          {/* Mostrar las 12 imágenes de los posts */}
         
            <Row>
              <Col className="col-6">
                <img
                  src="https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <img
                  src="https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <img
                  src="https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <img
                  src="https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-6">
                <img
                  src="https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
              <Col className="col-6">
                <img
                  src="https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg"
                  alt=''
                  className="post-image mt-4"
                  onClick={() => handleImageClick("https://clearcomfort.com/wp-content/uploads/2019/05/AdobeStock_34148619-1024x683.jpeg")} // Abrir el modal al hacer clic
                  style={{ cursor: "pointer", width: "100%" }} // Cambia el cursor para indicar que es clicable
                />
              </Col>
            </Row>
          
        </Col>
      </Row>

      <Row className="rou">
        <Col className="col">
          <img
            src={information.photo}
            alt="imagen de perfil"
            className="image"
            onClick={navigateToProfile} // Redirigir al hacer clic
            style={{ cursor: "pointer" }} // Cambia el cursor para indicar que es clicable
          />
        </Col>

        <Col className="col">
          <h1>{information.nombre}</h1>
        </Col>
        <Col>
          <img
            src="https://e7.pngegg.com/pngimages/296/446/png-clipart-logo-graphics-running-red-free-running-angle-text.png"
            alt="iamgen"
            style={{ width: 100 }}
          ></img>
        </Col>
        <Col className="col">
          <h1>{information.correr}</h1>
        </Col>
        <Col>
          <img
            src="https://e7.pngegg.com/pngimages/722/830/png-clipart-swimming-at-the-summer-olympics-logo-swimming-pool-sport-swim-text-hand-thumbnail.png"
            alt="iamgen"
            style={{ width: 100 }}
          ></img>
        </Col>
        <Col className="col">
          <h1>{information.nadar}</h1>
        </Col>
        <Col>
          <img
            src="https://t4.ftcdn.net/jpg/02/56/98/59/360_F_256985943_qAbytcXyZshp7EmXlST47WJ57RIlKGV1.jpg"
            alt="iamgen"
            style={{ width: 100 }}
          ></img>
        </Col>
        <Col className="col">
          <h1>{information.cicla}</h1>
        </Col>
      </Row>

      {/* Modal para mostrar la imagen seleccionada en un tamaño más grande */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Informacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage ? (
            <Card className="bg-dark text-white">
            <Card.Img src={selectedImage} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Actividad</Card.Title>
              <Card.Text>
                Recorrido en {information.ciudad}
              </Card.Text>
              <Card.Text>Duración: {information.duracion}</Card.Text>
            </Card.ImgOverlay>
          </Card>
          ) : (
            <p>Cargando imagen...</p>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Home;
