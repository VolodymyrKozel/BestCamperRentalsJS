import css from './ModalCamper.module.css';
import Icon from '../ui/Icon/Icon';
import Gallery from '../Gallery/Gallery';
import ModalWrapper from '../ui/Modal/ModalWrapper';
import { NavLink, useNavigate, useParams, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';
import clsx from 'clsx';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';

export default function ModalCamper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const camperData = useSelector(selectCamperById(id));
  const handleCloseModal = () => {
    navigate(-1);
  };
  return (
    <ModalWrapper modalIsOpen={true} closeModal={handleCloseModal}>
      <div className={css.modal}>
        <div className={css.modalContent}>
          <button onClick={handleCloseModal} className={css.closeButton}>
            <Icon className={css.iconClose} id="close" width={32} height={32} />
          </button>
          {camperData ? (
            <div>
              <h2 className={css.title}>{camperData.name}</h2>
              <div className={css.subHeader}>
                <p className={css.rating}>
                  <Icon
                    className={css.iconStar}
                    id="star"
                    width={16}
                    height={16}
                  />
                  {`${camperData.rating} (${camperData.reviews.length} reviews)`}
                </p>
                <p className={css.location}>
                  <Icon
                    className={css.icon}
                    id="location"
                    width={16}
                    height={16}
                  />
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
            <p>Loading...</p>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
}
