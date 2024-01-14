import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite';

import './App.css';
import Header from './components/Header'
import { useContext } from 'react';
import { Context } from '.';

const App = observer(() => {
  const { user } = useContext(Context)

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
