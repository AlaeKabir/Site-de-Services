import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FindTutor from './pages/FindTutor';
import BecomeTutor from './pages/BecomeTutor';
import ConfirmBooking from './pages/ConfirmBooking';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-tutor" element={<FindTutor />} />
        <Route path="/become-tutor" element={<BecomeTutor />} />
        <Route path="/confirm-booking" element={<ConfirmBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;