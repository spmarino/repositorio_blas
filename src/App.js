import './App.css';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MiProvider from './components/CartContexto';

function App() {
  const edad = 22;
  const usuarios = ['Blas', ' ', 'Guido', ' ', 'Eddie'];
  const miOnAdd = () => {};
  return (
    <MiProvider>
      <BrowserRouter>
        <NavBar />
        <Main
          nombre='Blas'
          apellido='Pawluk'
          onAdd={miOnAdd}
          edad={edad}
          usuarios={usuarios}
          initial={1}
        ></Main>
        <Footer />
        <ToastContainer autoClose={1000} />
      </BrowserRouter>
    </MiProvider>
  );
}

export default App;
