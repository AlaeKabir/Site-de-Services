export default function BecomeTutor() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Devenir tuteur</h2>
      <form>
        <label>Nom</label>
        <input type="text" required />
        <label>Matières</label>
        <input type="text" placeholder="Math, Physique, etc..." required />
        <label>Disponibilités</label>
        <input type="text" placeholder="Ex: Lundi à 18h" required />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}