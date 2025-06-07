import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Bienvenue sur Tutor+</h2>
      <p>La plateforme de tutorat en ligne pour tous</p>
      <Link to="/find-tutor"><button>Réserver un tutorat</button></Link>
      <Link to="/become-tutor"><button style={{ marginLeft: '1rem' }}>Devenir tuteur</button></Link>
    </div>
  );
}