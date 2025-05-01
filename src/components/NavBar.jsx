import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        Japanese Kampo and Botanical Toxins
      </div>
      <div className="navbar-links">
        <Link to="/herbs">Herbs</Link>
        <Link to="/toxicology">Toxicology</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default NavBar;
