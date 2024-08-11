import { useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import CatalogItem from '../../components/Catalog/CatalogItem/CatalogItem';
import { selectFavorites } from '../../redux/favorites/selectors';
import css from './FavoritePage.module.css';
function FavoritePage() {
  const favorites = useSelector(selectFavorites);
  return (
    <div>
      <DocumentTitle>Favorites</DocumentTitle>
      {favorites ? (
        <ul className={css.list}>
          {favorites.map(camper => (
            <CatalogItem key={camper._id} {...camper} isFavorite={true} />
          ))}
        </ul>
      ) : (
        'no favorites yet'
      )}
    </div>
  );
}

export default FavoritePage;
