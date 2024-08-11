import css from './ModalCamper.module.css';
import Icon from '../ui/Icon/Icon';
import ModalWrapper from '../ui/Modal/ModalWrapper';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';
import CamperDetails from '../CamperDetails/CamperDetails';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';

export default function ModalCamper() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const camperData = useSelector(selectCamperById(id));
  useEffect(() => {
    if (!camperData) {
      dispatch(fetchCamperById(id));
    }
  });
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
          <CamperDetails camperData={camperData} />
        </div>
      </div>
    </ModalWrapper>
  );
}
