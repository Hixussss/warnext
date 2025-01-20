import './styles/app.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe depuis 'react-dom/client'
import App from './js/components/App';

console.log('React is rendering...');

// Utilise createRoot pour le rendu
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Initialise le root
    root.render(<App />); // Rends ton composant
    console.log('ReactDOM.render executed successfully.');
} else {
    console.error('No root element found in the DOM.');
}
