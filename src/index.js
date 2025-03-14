import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

import App from './root/App';
import reportWebVitals from './reportWebVitals';
//import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { Container } from 'reactstrap';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <App />
</BrowserRouter>
);
  // <React.StrictMode>
  {/* </React.StrictMode> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
