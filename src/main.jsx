// src/main.jsx
import React from 'react'; // On importe React
import ReactDOM from 'react-dom/client'; // On importe ReactDOM (c'est ce qui permet d'afficher dans la page)
import App from './App.jsx'; // On importe ton composant principal



// On dit à React d'afficher <App /> dans le div #root du fichier HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
