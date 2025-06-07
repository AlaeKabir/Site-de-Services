import { useNavigate } from 'react-router-dom';
import TutorCard from '../components/TutorCard';

export default function FindTutor() {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/confirm-booking');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Choisissez votre tuteur</h2>
      <TutorCard name="John S." subject="Mathématiques" price="25" onBook={handleBooking} />
    </div>
  );
}
