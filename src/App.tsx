import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Router e Route da React Router
import './App.css';
import { Navbar } from './components/Header';
import { Homepage } from './pages/Homepage';
import { MoviesPage } from './pages/Moviespage';

function App() {
  return (
    <Router>
      <Navbar /> {/* La Navbar sarà visibile su tutte le pagine */}
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Pagina Home */}
        <Route path="/movies" element={<MoviesPage />} /> {/* Pagina dei film */}
      </Routes>
    </Router>
  );
}

export default App;
