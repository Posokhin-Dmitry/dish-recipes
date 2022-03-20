import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav-text">
          Home
        </NavLink>
        <NavLink to="/favorites" className="nav-text">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
