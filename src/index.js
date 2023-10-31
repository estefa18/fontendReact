import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/AuthContext';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals'; // esto sirve para tesmas de pruebas, por lo cual se comenta 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // este crea la instacia de mi App
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); //Esta relacioando con las pruebas 
