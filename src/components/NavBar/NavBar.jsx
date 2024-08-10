import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';

export default function NavBar({ children }) {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={css.link} to="/catalog">
            Catalog
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={css.link} to="/favorite">
            Favorite
          </NavLink>
        </li>
      </ul>
      {children}
    </nav>
  );
}
