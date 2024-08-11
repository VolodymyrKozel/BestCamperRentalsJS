import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import Icon from '../ui/Icon/Icon';
import css from './FavoriteButton.module.css';

const FavoriteButton = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(favorite => favorite._id === item._id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };
  return (
    <button
      onClick={handleClick}
      className={css.favoriteButton}
      type="button"
      title={item.isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
      <Icon
        className={isFavorite ? css.iconFavoriteActive : css.iconFavorite}
        id="heart"
        width={20}
        height={20}
      />
    </button>
  );
};

export default FavoriteButton;
