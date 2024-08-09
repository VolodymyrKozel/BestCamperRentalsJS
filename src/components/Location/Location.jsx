import Icon from '../ui/Icon/Icon';
import css from './Location.module.css';

export default function Location() {
  return (
    <>
      <label className={css.label}>Location</label>
      <div className={css.wrapper}>
        <Icon className={css.icon} id="location" width={20} height={20} />
        <input className={css.input} type="text" placeholder="Location" />
      </div>
    </>
  );
}
