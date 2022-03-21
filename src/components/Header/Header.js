import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink to="/dish-recipes" className={s.navText}>
          Home
        </NavLink>
        <NavLink to="/favorites" className={s.navText}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
