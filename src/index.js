import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import { createContext } from 'react';
export const Context  = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore()  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);


