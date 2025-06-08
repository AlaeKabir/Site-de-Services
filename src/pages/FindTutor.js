import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import './FindTutor.css';
import { Link } from 'react-router-dom';

const tutors = [
  {
    name: "Karim S.",
    subject: "Mathematics",
    price: "25$/h",
    description: "Majoring in mathematics and computer science",
    image: require('../assets/user.png')
  },
  {
    name: "Maya E.",
    subject: "Physics",
    price: "25$/h",
    description: "Majoring in physics and computer science",
    image: require('../assets/user.png')
  },
  {
    name: "Michca L.",
    subject: "Chemistry",
    price: "21$/h",
    description: "Majoring in chemistry and physics.",
    image: require('../assets/user.png')
  },
  {
    name: "Will S.",
    subject: "English",
    price: "28$/h",
    description: "Majoring in english literature with tutoring experience",
    image: require('../assets/user.png')
  },
  {
    name: "John S.",
    subject: "Coding",
    price: "31$/h",
    description: "Majoring in computer science with tutoring experience",
    image: require('../assets/user.png')
  },
  {
    name: "Ayman B.",
    subject: "Mathematics",
    price: "30$/h",
    description: "Majoring in mathematics and computer science with tutoring experience",
    image: require('../assets/user.png')
  }
];

export default function FindTutor() {
  const [selectedSubject, setSelectedSubject] = useState("");

  const filteredTutors = selectedSubject
    ? tutors.filter((tutor) => tutor.subject === selectedSubject)
    : tutors;

  return (
    <section className="find-tutor-page text-center py-5">
      <Container>
        <h1 className="mb-4">Find a Tutor</h1>
        <p>Select a subject and find tutors to match your need</p>
        <Form className="mb-4">
          <Form.Group controlId="subjectSelect">
            <Form.Label>Choose a subject</Form.Label>
            <Form.Select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">All subjects</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Coding">Coding</option>
              <option value="Chemistry">Chemistry</option>
              <option value="English">English</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Row>
          {filteredTutors.map((tutor, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="tutor-card h-100 shadow-sm">
                <Card.Img variant="top" src={tutor.image} className="tutor-img" />
                <Card.Body>
                  <Card.Title>{tutor.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{tutor.subject} — {tutor.price}</Card.Subtitle>
                  <Card.Text>{tutor.description}</Card.Text>
                  <Button as={Link} to="/reserver" variant="primary" className="w-100">Click to book a session</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
