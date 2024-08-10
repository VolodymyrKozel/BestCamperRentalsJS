import css from './Filters.module.css';
import Icon from '../ui/Icon/Icon';
import Button from '../ui/Button/Button';
import CheckboxButton from '../ui/CheckBox/CheckBox';
import { useState } from 'react';

export default function Filters() {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <>
      <label className={css.label}>Filters</label>
      <CheckboxButton
        checked={checked}
        onChange={handleCheck}
        icon="location"
      />
    </>
  );
}
