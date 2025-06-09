import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import './BookASession.css';
import { useState } from 'react';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Link } from 'react-router-dom';

export default function BookASession() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [sessionDuration, setSessionDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !sessionDuration) {
      alert('Please select a date, time, and duration!');
      return;
    }
    alert(`Session booked for ${selectedDate.toLocaleDateString()} at ${selectedTime} for ${sessionDuration}`);
  };

  const availableTimes = [
    '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30',
    '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30', '20:00'
  ];

  const durations = ['30 minutes', '1 hour', '1.5 hours', '2 hours'];

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Book a Session</h2>

          <form onSubmit={handleSubmit}>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={{ before: new Date() }}
              className="mb-3"
            />

            <Form.Group controlId="timeSelect" className="mb-3">
              <Form.Label>Select Time</Form.Label>
              <Form.Select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">-- Select a time --</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="durationSelect" className="mb-3">
              <Form.Label>Session Duration</Form.Label>
              <Form.Select
                value={sessionDuration}
                onChange={(e) => setSessionDuration(e.target.value)}
              >
                <option value="">-- Select duration --</option>
                {durations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <div className="mt-3">
              <Button
                as={Link}
                to="/confirm"
                type="submit"
                variant="primary"
                disabled={!selectedDate || !selectedTime || !sessionDuration}
              >
                Book Your Session
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
