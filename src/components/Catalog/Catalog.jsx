import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectCampers,
  selectError,
  selectHasMore,
  selectIsLoading,
  selectPage,
} from '../../redux/campers/selectors';
import { fetchCampers } from '../../redux/campers/operations';
import CatalogItem from './CatalogItem/CatalogItem';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import css from './Catalog.module.css';

export default function Catalog() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);
  const page = useSelector(selectPage);
  const campers = useSelector(selectCampers);

  useEffect(() => {
    if (campers.length === 0) {
      dispatch(fetchCampers({ page, limit: 4 }));
    }
  }, [dispatch]);

  const loadMore = () => {
    if (hasMore && !loading) {
      dispatch(fetchCampers({ page, limit: 4 }));
    }
  };
  return (
    error && <p>{error}</p>,
    campers.length > 0 && (
      <div>
        <ul className={css.list}>
          {campers.map(camper => (
            <CatalogItem key={camper._id} {...camper} />
          ))}
        </ul>
        <LoadMoreBtn loadMore={loadMore} hasMore={hasMore} loading={loading} />
      </div>
    )
  );
}
