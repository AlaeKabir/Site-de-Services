export default function TutorCard({ name, subject, price, onBook }) {
  return (
    <div style={{ border: '1px solid #eee', padding: '1rem', borderRadius: '10px', marginBottom: '1rem' }}>
      <h3>{name}</h3>
      <p>Matière : {subject}</p>
      <p>Tarif : {price}$/h</p>
      <button onClick={onBook}>Réserver</button>
    </div>
  );
}