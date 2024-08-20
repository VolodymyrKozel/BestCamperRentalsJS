import Icon from '../ui/Icon/Icon';
import css from './Logo.module.css';

export default function Logo() {
  return (
    <div className={css.wrapper}>
      <Icon className={css.icon} id="logo" width={32} height={32} />
      <p className={css.title}>
        <span className={css.accent}>Best</span>Camper Rentals
      </p>
    </div>
  );
}
