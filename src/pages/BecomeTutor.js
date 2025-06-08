import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './BecomeTutor.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BecomeTutor() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    availability: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tutor submitted:", formData);
    // Rediriger vers la page de confirmation
    navigate('/confirmation-profile');
  };

  return (
    <section className="become-tutor-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="mb-4">Become a tutor at Tutor+</h1>
            <p>Please fill out the form below to create your profile.</p>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John Smith"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Teaching subjects</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mathematics, Physics.."
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAvailability">
                <Form.Label>Availability</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Evenings of the week, Weekends.."
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Talk about your experience, ways of teaching, etc."
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="warning" type="submit" className="text-white">
                Create profil
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
