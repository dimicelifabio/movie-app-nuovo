import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link da React Router
import '../css/Header.css';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'navbar-small' : ''}`}>
      <div className="logo-container">
        <p>Movie App</p>
      </div>
      
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">Home</Link> 
        </li>
        <li>
          <Link to="/movies" className="nav-link">Film</Link> 
        </li>
        <li>
          <a href="#" className="nav-link">Serie Tv</a> 
        </li>
      </ul>

      <div className="icons-container">
        <FaSearch className="search-icon" />
        <FaUserCircle className="user-icon" />
      </div>
    </div>
  );
};
