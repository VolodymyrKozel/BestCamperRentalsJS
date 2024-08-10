import css from './CheckBox.module.css';
import Icon from '../Icon/Icon';

const CheckboxButton = ({ checked, onChange, icon }) => {
  return (
    <label className={css.checkboxBtn} htmlFor="checkbox-button">
      <input
        id="checkbox-button"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={css.checkboxBtnInput}
      />
      <div className={css.checkboxBtnBox}>
        <div className={css.checkboxBtnIcon}>
          <Icon className={css.icon} id={icon} width={32} height={32} />
          AC
        </div>
      </div>
    </label>
  );
};

export default CheckboxButton;
