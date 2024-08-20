import css from './LabelButton.module.css';
import Icon from '../Icon/Icon';
export default function LabelButton({ children, label, icon, id }) {
  return (
    <label className={css.Btn} htmlFor={id}>
      {children}
      <div className={css.BtnBox}>
        <div className={css.BtnIcon}>
          <Icon className={css.icon} id={icon} />
        </div>
        {label}
      </div>
    </label>
  );
}
