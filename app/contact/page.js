import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh', color: '#000' }}>
      
      <Container id="contact">
        <Row className="text-center">
          <Col>
            <h2>Contact</h2>
            <p>Email: grizonrussel.sacay@gmail.com</p>
            <p>Phone: (+639) 067 9274 76</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
