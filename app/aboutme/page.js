import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <div style={{ backgroundColor: 'transparent', color: '#000', minHeight: '100vh' }}>
      <Container id="about">
        <Row className="-">
          <Col md={6}>
            <Image
              src="/assets/image/grizon.jpg"
              alt="Profile Picture"
              width={450}
              height={500}
            />
          </Col>
          <Col md={6} className="text-left mt-5 mb-5">
            <h2 className="mt-3">Grizon Russell B. Sacay</h2>
            <p className="lead">Front-End Developer</p>
            <p className="lead">I am a passionate Front-End Developer.</p>
            <p>
              With expertise in HTML, CSS, JavaScript, I create stunning web
              applications that offer excellent user experiences.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
