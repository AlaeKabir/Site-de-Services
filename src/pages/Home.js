import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <>
        <section className="home-section welcome-section">
            <Container className="text-center py-5 pb-2">
                <h1 className="mb-3">Welcome to Tutor+</h1>
                <p className="mb-4">A tutoring platform, flexible for students to learn and tutors to teach.</p>
            </Container>
        </section>
        
        {/* Student Section */}
        <section className="home-section find-tutor-section">
            <Container fluid>
            <Row className="min-vh-50 align-items-center">
                <Col md={6} className="p-5 text-section">
                <h2>Your Learning Journey Starts Here.</h2>
               
               <div className="text-center">
                 <p>Get help in different subjects, whenever and wherever you need it!</p>
                 <Button as={Link} to="/tuteurs" variant="primary" className="text-white">Get a Tutor</Button>
               </div>
                </Col>
                <Col md={6} className="bg-img find-tutor-img d-none d-md-block" />
            </Row>
            </Container>
        </section>

        {/* Tutor Section */}
          <section className="home-section become-tutor-section">
            <Container fluid>
            <Row className="min-vh-50 align-items-center">
                <Col md={6} className="p-5 text-section order-md-2">
                <h2>Become a Tutor and Share your Learning.</h2>
                
               <div className="text-center">
                <p>Create a profile or log in and start helping students today!</p>
                 <Button as={Link} to="/devenir-tuteur" variant="warning" className="text-white ">Become a Tutor</Button>
               </div>
                </Col>
                <Col md={6} className="bg-img become-tutor-img d-none d-md-block order-md-1" />
            </Row>
            </Container>
        </section>
    </>
  );
}
