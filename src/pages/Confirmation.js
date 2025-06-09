import { Container, Row, Col, Button } from 'react-bootstrap';
import './Confirmation.css';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <section className="confirmation-section py-5 text-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="mb-4">🎉 Your Session is Confirmed!</h1>
            <p className="lead">
              Thank you for booking a session with Tutor+. You will receive an email confirmation shortly.
            </p>

            <Button as={Link} to="/" variant="success" className="mt-4">
              Return to Home
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
