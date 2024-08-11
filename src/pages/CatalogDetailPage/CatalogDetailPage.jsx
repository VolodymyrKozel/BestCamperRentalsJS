import css from './CatalogDetailPage.module.css';
import DocumentTitle from '../../components/DocumentTitle';
import { useSelector, useDispatch } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';
import { useParams } from 'react-router-dom';
import CamperDetails from '../../components/CamperDetails/CamperDetails';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';

export default function CatalogDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camperData = useSelector(selectCamperById(id));
  useEffect(
    () => {
      if (!camperData) {
        dispatch(fetchCamperById(id));
      }
    },
    dispatch,
    id,
    camperData
  );
  return (
    <div className={css.wrapper}>
      <DocumentTitle>{camperData?.name}</DocumentTitle>
      <CamperDetails camperData={camperData} />
    </div>
  );
}
