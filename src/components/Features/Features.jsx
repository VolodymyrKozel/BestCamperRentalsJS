import Icon from '../../components/ui/Icon/Icon';
import css from './Features.module.css';
export default function Features(props) {
  return (
    <ul className={css.list}>
      <li className={css.label}>
        <Icon className={css.icon} id="adults" width={20} height={20} />{' '}
        {props.adults} adults
      </li>
      <li className={css.label}>
        <Icon className={css.icon} id="transmission" width={20} height={20} />
        <span>{props.transmission}</span>
      </li>
      <li className={css.label}>
        <Icon className={css.icon} id="engine" width={20} height={20} />
        {props.engine}
      </li>
      {props.details.kitchen && (
        <li className={css.label}>
          <Icon className={css.icon} id="kitchen" width={20} height={20} />
          <span>kitchen</span>
        </li>
      )}
      <li className={css.label}>
        <Icon className={css.icon} id="beds" width={20} height={20} />
        <span>{props.details.beds} beds</span>
      </li>
      {props.details.airConditioner && (
        <li className={css.label}>
          <Icon
            className={css.icon}
            id="airConditioner"
            width={20}
            height={20}
          />
          <span>AC</span>
        </li>
      )}
    </ul>
  );
}
