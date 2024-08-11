import css from './CheckBox.module.css';
import Icon from '../Icon/Icon';
import { forwardRef, useState } from 'react';

const CheckboxButton = forwardRef(
  ({ id, icon, label, onChange, value }, ref) => {
    const [checked, setChecked] = useState(value || false);

    const handleChange = () => {
      setChecked(!checked);
      onChange(!checked);
    };

    return (
      <label className={css.checkboxBtn} htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className={css.checkboxBtnInput}
          ref={ref}
        />
        <div className={css.checkboxBtnBox}>
          <div className={css.checkboxBtnIcon}>
            <Icon className={css.icon} id={icon} width={32} height={32} />
            {label}
          </div>
        </div>
      </label>
    );
  }
);

CheckboxButton.displayName = 'CheckboxButton';

export default CheckboxButton;
