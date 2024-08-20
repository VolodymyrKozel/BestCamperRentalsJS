import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';
import clsx from 'clsx';
import Logo from '../Logo/Logo';

export default function NavBar({ children }) {
  return (
    <nav className={css.nav}>
      <Logo />
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, { [css.active]: isActive })
            }
            to="/">
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, { [css.active]: isActive })
            }
            to="/catalog">
            Catalog
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, { [css.active]: isActive })
            }
            to="/favorite">
            Favorite
          </NavLink>
        </li>
      </ul>
      {children}
    </nav>
  );
}
