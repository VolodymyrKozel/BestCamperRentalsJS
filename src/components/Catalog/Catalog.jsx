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

import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Catalog() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);
  const campers = useSelector(selectCampers);

  // search params
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = Object.fromEntries([...searchParams]);
  // Extract or set default query parameters

  // If default values need to be set in the URL
  useEffect(() => {
    if (!searchParams.get('page')) {
      params.page = '1';
    }
    if (!searchParams.get('limit')) {
      params.limit = '4';
    }
    if (Object.keys(params).length > 0) {
      setSearchParams({
        ...Object.fromEntries([...searchParams]), // Preserve other params
        ...params,
      });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    dispatch(fetchCampers(params));
  }, [params.page, params.limit, dispatch]);

  const loadMore = () => {
    if (hasMore && !loading) {
      dispatch(fetchCampers(params));
    }
  };

  return (
    error && <p>{error}</p>,
    campers.length > 0 && (
      <main>
        <ul className={css.list}>
          {campers.map(camper => (
            <CatalogItem key={camper._id} {...camper} />
          ))}
        </ul>
        <LoadMoreBtn loadMore={loadMore} hasMore={hasMore} loading={loading} />
      </main>
    )
  );
}
