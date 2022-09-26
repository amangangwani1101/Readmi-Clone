// basic import for required files
import React from 'react';
import ReactDOM from 'react-dom/client';

// import our declared files by exporting their content and using here
// below is a component of jsx file which is being returned from App.js file
import App from './App';

// here exported daat from app.js file is being transfered to our actual html file (index.html) inside root card using REACT JS 
// advantage :- if u want to use same card as earlier design then copy & paste html will increase lines of codes so to avoid it component of app.js file ois being used there all logic of card is stored and simply transfered to root element of html file 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);