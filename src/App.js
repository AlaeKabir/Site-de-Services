import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FindTutor from './pages/FindTutor';
import BecomeTutor from './pages/BecomeTutor';
import Contact from './pages/Contact';
import './App.css';

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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
