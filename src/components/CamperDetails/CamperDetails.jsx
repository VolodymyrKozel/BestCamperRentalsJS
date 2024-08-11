import { NavLink } from 'react-router-dom';
import Icon from '../ui/Icon/Icon';
import Gallery from '../Gallery/Gallery';
import css from './CamperDetails.module.css';
import clsx from 'clsx';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import { Outlet } from 'react-router-dom';

export default function CamperDetails({ camperData }) {
  return camperData ? (
    <div>
      <h2 className={css.title}>{camperData.name}</h2>
      <div className={css.subHeader}>
        <p className={css.rating}>
          <Icon className={css.iconStar} id="star" width={16} height={16} />
          {`${camperData.rating} (${camperData.reviews.length} reviews)`}
        </p>
        <p className={css.location}>
          <Icon className={css.icon} id="location" width={16} height={16} />
          {camperData.location}
        </p>
      </div>
      <p className={css.price}>
        &euro;
        {camperData.price.toFixed(2)}
      </p>
      <Gallery gallery={camperData.gallery} name={camperData.name} />
      <p className={css.description}>{camperData.description}</p>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, { [css.active]: isActive })
            }
            to={'features'}
            replace={true}>
            Features
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, { [css.active]: isActive })
            }
            to={'reviews'}
            replace={true}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <div className={css.line} />
      <Suspense fallback={<Loader style={'full'} />}>
        <Outlet />
      </Suspense>
    </div>
  ) : (
    <Loader style={'full'} />
  );
}
