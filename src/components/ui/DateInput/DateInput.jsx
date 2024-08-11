import { forwardRef } from 'react';
import css from './DateInput.module.css';
import Icon from '../Icon/Icon';

const DateInput = forwardRef(({ value, onClick, className }, ref) => (
  <div className={css.wrapper}>
    <Icon className={css.icon} id="calendar" width={20} height={20} />
    <input
      className={css.input + ' ' + className}
      onClick={onClick}
      ref={ref}
      value={value}
      placeholder="Booking date"
    />
  </div>
));

DateInput.displayName = 'DateInput';

export default DateInput;
