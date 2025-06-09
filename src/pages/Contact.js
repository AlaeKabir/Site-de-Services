import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import './Contact.css';
import { useState } from 'react';

export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simule l'envoi du message
    setShowAlert(true);
    setFormData({ name: '', email: '', message: '' });

    // Cache l'alerte après 5 secondes
    setTimeout(() => setShowAlert(false), 5000);
  };

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

            {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                Your message has been received! We’ll get back to you soon.
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
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
