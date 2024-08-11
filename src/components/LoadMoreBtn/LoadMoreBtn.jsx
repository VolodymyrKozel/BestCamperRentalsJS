import Button from '../ui/Button/Button';
import Loader from '../Loader/Loader';
import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ hasMore, loadMore, loading }) {
  return hasMore ? (
    <Button
      className={css.loadMore}
      onClick={loadMore}
      disabled={!hasMore}
      variant="outline"
      size="medium">
      {loading ? <Loader style={'btn'} /> : 'Load more'}
    </Button>
  ) : (
    <p>No more campers</p>
  );
}
