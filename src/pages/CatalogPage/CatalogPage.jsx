import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import { useSearchParams } from 'react-router-dom';
import { selectHasMore } from '../../redux/campers/selectors';
import Catalog from '../../components/Catalog/Catalog';
import DocumentTitle from '../../components/DocumentTitle';
import SideBar from '../../components/SideBar/SideBar';
import Location from '../../components/Location/Location';
import Filters from '../../components/Filters/Filters';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const hasMore = useSelector(selectHasMore);

  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 4;
  const search = searchParams.get('search') || '';
  const handleLoadMore = () => {
    if (hasMore) {
      const newPage = page + 1;
      setSearchParams({ page: newPage, limit, search });
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers({ page, limit, search }));
  }, [dispatch, page, limit, search]);

  return (
    <div className={css.wrapper}>
      <DocumentTitle>Catalog</DocumentTitle>
      {/* filters */}
      <SideBar>
        <Location />
        <Filters />
      </SideBar>

      <Catalog handleLoadMore={handleLoadMore} hasMore={hasMore} />
    </div>
  );
}
