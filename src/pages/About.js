import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

export default function About() {
  return (
    <section className="about-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <h1 className="mb-4">About Tutor+</h1>
            <p>
              <strong>Tutor+</strong> is an online tutoring platform designed to connect students seeking academic support with qualified tutors. Whether you're in high school or university, our goal is to make learning more accessible, personalized, and flexible.
            </p>

            <h4 className="mt-4">Our mission</h4>
            <p>
              To provide a simple and effective solution to:
              <ul>
                <li>Quickly book tutoring sessions tailored to the student’s needs</li>
                <li>Enable tutors to share their knowledge and earn income</li>
                <li>Create a collaborative and supportive learning community</li>
              </ul>
            </p>

            <h4 className="mt-4">Who Is It For?</h4>
            <p>
              <strong>For students</strong> who want to improve in a specific subject (math, physics, programming, etc.)  
              <br />
              <strong>For tutors</strong> who are passionate about teaching and ready to support others in their academic journey
            </p>

            <h4 className="mt-4">Why Tutor+?</h4>
            <p>Because we believe that every student deserves personalized support, and every tutor deserves a simple platform to offer their help. Tutor+ combines technology and pedagogy to make that possible.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
