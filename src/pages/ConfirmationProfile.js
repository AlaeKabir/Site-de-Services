
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ConfirmationProfile() {
  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>Successfully Created Your Profile</h1>
          <p>Thank you for creating a profile in Tutor+</p>
          <Button as={Link} to="/" variant="primary">
            Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
