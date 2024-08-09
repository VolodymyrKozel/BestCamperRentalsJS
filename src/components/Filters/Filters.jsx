import css from './Filters.module.css';
import Icon from '../ui/Icon/Icon';
import Button from '../ui/Button/Button';

export default function Filters() {
  return (
    <>
      <label className={css.label}>Location</label>
      <Button className={css.button} variant="outline" size="medium">
        <Icon className={css.icon} id="location" width={20} height={20} />
      </Button>
    </>
  );
}
