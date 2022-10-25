import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyForm from './MyForm';
import SignupForm from './signup-form/signupform';
import SignupForm2 from './signup-form/signupform2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignupForm2/>
  </React.StrictMode>
);
reportWebVitals();
