import Icon from '../../../components/ui/Icon/Icon';
import Features from '../../Features/Features';
import Button from '../../ui/Button/Button';
import css from './CatalogItem.module.css';

export default function CatalogItem(props) {
  return (
    <li className={css.item}>
      <img className={css.img} src={props.gallery[0]} alt={props.name} />
      <div className={css.info}>
        <div className={css.itemHeader}>
          <h2 className={css.title}>{props.name}</h2>
          <p className={css.price}>
            &euro;
            {props.price.toFixed(2)}
          </p>
          <Icon className={css.icon} id="heart" width={20} height={20} />
        </div>
        <div className={css.subHeader}>
          <p className={css.rating}>
            <Icon className={css.iconStar} id="star" width={16} height={16} />
            {`${props.rating} (${props.reviews.length} reviews)`}
          </p>
          <p className={css.location}>
            <Icon className={css.icon} id="location" width={16} height={16} />{' '}
            {props.location}
          </p>
        </div>
        <p className={css.description}>{props.description}</p>
        <Features {...props} />
        <Button variant="primary" size="medium">
          Show more
        </Button>
      </div>
    </li>
  );
}
