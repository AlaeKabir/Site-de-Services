import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FindTutor from './pages/FindTutor';
import BecomeTutor from './pages/BecomeTutor';
import Contact from './pages/Contact';
import BookASession from './pages/BookASession';
import ConfirmationProfile from './pages/ConfirmationProfile';

import './App.css';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tuteurs" element={<FindTutor />} />
            <Route path="/devenir-tuteur" element={<BecomeTutor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reserver" element={<BookASession />} />
            <Route path="/confirm" element={<Confirmation />} />
          <Route path="/confirmation-profile" element={<ConfirmationProfile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
