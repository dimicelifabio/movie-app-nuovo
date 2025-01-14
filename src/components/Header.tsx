import '../css/Header.css';
import { FaSearch, FaUserCircle } from 'react-icons/fa'; // Importazione delle icone di ricerca e avatar

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-container">
                <p>Movie App</p>
            </div>
            
            <ul className="nav-list">
                <li><a href="#" className="nav-link">Home</a></li>
                <li><a href="#" className="nav-link">Film</a></li>
                <li><a href="#" className="nav-link">Serie Tv</a></li>
            </ul>

            <div className="icons-container">
                <FaSearch className="search-icon" />
                <FaUserCircle className="user-icon" />
            </div>
        </div>
    );
}
