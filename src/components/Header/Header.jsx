import css from './Header.module.css';

export default function Header({ children }) {
  return <header className={css.header}>{children}</header>;
}
