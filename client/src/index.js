import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-h8c1qgz2u0vwfqsz.us.auth0.com"
      clientId="2XNgC54GAb9ONe3vlUJQbhNegx9AYwyg"
      authorizationParams={{redirect_uri: window.location.origin}}>
        <App />
    </Auth0Provider>
  </BrowserRouter>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
