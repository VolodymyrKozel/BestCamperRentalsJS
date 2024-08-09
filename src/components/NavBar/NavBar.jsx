import { NavLink } from 'react-router-dom';

export default function NavBar({ children }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/catalog">Catalog</NavLink>
        </li>
        <li>
          <NavLink to="/favorite">Favorite</NavLink>
        </li>
      </ul>

      {children}
    </nav>
  );
}
