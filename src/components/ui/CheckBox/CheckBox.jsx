import css from './CheckBox.module.css';
import LabelButton from '../LabelButton/LabelButton';
import { forwardRef } from 'react';

const CheckboxButton = forwardRef(
  ({ id, icon, label, onChange, value }, ref) => {
    return (
      <LabelButton label={label} icon={icon} id={id} value={value}>
        <input
          id={id}
          type="checkbox"
          checked={value}
          onChange={onChange}
          className={css.checkboxBtnInput}
          ref={ref}
        />
      </LabelButton>
    );
  }
);

CheckboxButton.displayName = 'CheckboxButton';

export default CheckboxButton;
