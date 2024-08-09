import css from './SideBar.module.css';
export default function SideBar({ children }) {
  return <aside className={css.sidebar}>{children}</aside>;
}
