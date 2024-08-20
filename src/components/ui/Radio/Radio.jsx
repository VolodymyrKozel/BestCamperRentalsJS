import css from './Radio.module.css';
import LabelButton from '../LabelButton/LabelButton';
import { forwardRef } from 'react';

const Radio = forwardRef(({ id, name, icon, label, onChange, value }, ref) => {
  return (
    <LabelButton label={label} icon={icon} id={id} value={value}>
      <input
        id={id}
        name={name}
        type="radio"
        value={label}
        checked={value === label}
        onChange={onChange}
        className={css.radioBtnInput}
        ref={ref}
      />
    </LabelButton>
  );
});

Radio.displayName = 'Radio';

export default Radio;
