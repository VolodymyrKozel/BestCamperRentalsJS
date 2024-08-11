import Icon from '../../../components/ui/Icon/Icon';
import Features from '../../Features/Features';
import Button from '../../ui/Button/Button';
import FavoriteButton from '../../FavoriteButton/FavoriteButton';
import css from './CatalogItem.module.css';
import { Link, useLocation } from 'react-router-dom';
export default function CatalogItem(props) {
  const location = useLocation();

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
          <FavoriteButton item={props} />
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
          <Link
            className={css.link}
            to={`/catalog/${props._id}`}
            state={location}>
            Show more
          </Link>
        </Button>
      </div>
    </li>
  );
}
