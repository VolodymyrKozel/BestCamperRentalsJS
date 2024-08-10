import css from './ModalCamper.module.css';
import Icon from '../ui/Icon/Icon';
import Gallery from '../Gallery/Gallery';
import ModalWrapper from '../ui/Modal/ModalWrapper';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCamperById } from '../../redux/campers/operations';
import {
  selectCamperById,
  selectIsLoading,
} from '../../redux/campers/selectors';
export default function ModalCamper() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const camperData = useSelector(selectCamperById(id));
  const handleCloseModal = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (!camperData) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, camperData, id]);
  return (
    <ModalWrapper modalIsOpen={true} closeModal={handleCloseModal}>
      <div className={css.modal}>
        <div className={css.modalContent}>
          <button onClick={handleCloseModal} className={css.closeButton}>
            <Icon className={css.iconClose} id="close" width={32} height={32} />
          </button>
          {isLoading && <Loader />}
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
                  />{' '}
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
                <li className={css.item}>Features</li>
                <li className={css.item}>Reviews</li>
              </ul>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
}
