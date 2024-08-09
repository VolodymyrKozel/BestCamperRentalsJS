import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import { fetchCampers } from '../../redux/campers/operations';
import Catalog from '../../components/Catalog/Catalog';
export default function CatalogPage() {
  const params = { page: 1, limit: 4 };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers(params));
  }, [dispatch, params]);
  return (
    <div>
      <DocumentTitle>Catalog</DocumentTitle>
      <h1>Catalog</h1>
      <p>Here will be catalog</p>
      {/* filters */}
      <Catalog />

      {/*  button more */}
    </div>
  );
}
