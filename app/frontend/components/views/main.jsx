import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../src/App';

function Main() {
    ReactDOM.createRoot(document.getElementById('main')).render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );

}

export default Main;
