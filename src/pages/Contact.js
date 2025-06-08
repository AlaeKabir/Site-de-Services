import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="mb-4">Contact us</h1>
            <p>
              Do you have questions, suggestions or need assistance?
              Send us a message, we'll be happy to help!
            </p>

            <Form>
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Your message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>

            <hr className="my-4" />

            <p className="text-muted">
              You can message us directly at <a href="mailto:support@tutorplus.com">support@tutorplus.com</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
