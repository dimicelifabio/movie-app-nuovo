import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Router e Route da React Router
import './App.css';
import { Navbar } from './components/Header';
import { Homepage } from './pages/Homepage';
import { MoviesPage } from './pages/Moviespage';
import { TvPage } from './pages/Tvpage';
import { Peoplepage } from './pages/Peoplepage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/movies" element={<MoviesPage />} /> 
        <Route path="/serieTV" element={<TvPage />} /> 
        <Route path="/people" element={<Peoplepage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
