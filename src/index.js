import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Key für den Zugriff auf die freie Tankerkönig-Spritpreis-API
// Für eigenen Key bitte hier https://creativecommons.tankerkoenig.de
// registrieren.
const TANKERKOENIG_API_KEY = 'b8ad05f9-1fab-8472-8cb8-b0e9adf1f5f8';

const VERSION = '1.4.2';

ReactDOM.render(
  <React.StrictMode>
    <App apiKey={TANKERKOENIG_API_KEY} version={VERSION} maxStations={40}/>
  </React.StrictMode>,
  document.getElementById('root')
);
