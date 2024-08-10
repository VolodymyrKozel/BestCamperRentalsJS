import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import CatalogItem from './CatalogItem/CatalogItem';
import Button from '../ui/Button/Button';

import css from './Catalog.module.css';

export default function Catalog({ hasMore, handleLoadMore }) {
  const campers = useSelector(selectCampers);
  return (
    campers.length > 0 && (
      <div>
        <ul className={css.list}>
          {campers.map(camper => (
            <CatalogItem key={camper._id} {...camper} />
          ))}
        </ul>
        {/*  button more */}
        {hasMore ? (
          <Button
            className={css.loadMore}
            onClick={handleLoadMore}
            disabled={!hasMore}
            variant="outline"
            size="medium">
            Load more
          </Button>
        ) : (
          <p>No more campers</p>
        )}
      </div>
    )
  );
}
