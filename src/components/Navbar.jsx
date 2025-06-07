import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: 'var(--primary)', padding: '1rem' }}>
      <h1>Tutor+</h1>
      <div>
        <Link to="/">Accueil</Link> | <Link to="/find-tutor">Réserver un tutorat</Link> | <Link to="/become-tutor">Devenir tuteur</Link>
      </div>
    </nav>
  );
}