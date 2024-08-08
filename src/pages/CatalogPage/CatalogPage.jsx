import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import { fetchCampers } from '../../redux/campers/operations';
export default function CatalogPage() {
  const params = { page: 1, limit: 4 };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers(params));
  }, [dispatch]);
  return (
    <div>
      <DocumentTitle>Catalog</DocumentTitle>
    </div>
  );
}
