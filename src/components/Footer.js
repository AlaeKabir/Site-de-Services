import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-4">
      <Container className='text-center'>
        <Row>
          <Col md={6} className="mb-3">
            <p><a href="https://maps.google.com/maps/place/Ottawa">🏠︎ Ottawa, Ontario</a></p>
            <p><a href="tel:+13431234567">☎ +1 (343) 123-4567</a></p>
          </Col>
          <Col>
            <p><Link to="/contact" className="footer-link">↪ Send us a message</Link></p>
            <p><a href="mailto:support@tutorplus.com">✉ support@tutorplus.com</a></p>
          </Col>
        </Row>
        <hr />
        <div className="text-center small text-white">
          © 2025 Tutor+ - Made by Alae & Lina
        </div>
      </Container>
    </footer>
  );
}