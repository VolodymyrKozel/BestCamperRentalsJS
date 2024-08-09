import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import CatalogItem from './CatalogItem/CatalogItem';

import css from './Catalog.module.css';
import Button from '../ui/Button/Button';
import SideBar from '../SideBar/SideBar';
import Location from '../Location/Location';
import Filters from '../Filters/Filters';

export default function Catalog() {
  const campers = useSelector(selectCampers);
  return (
    campers.length > 0 && (
      <>
        <SideBar>
          <Location />
          <Filters />
        </SideBar>
        <ul className={css.list}>
          {campers.map(camper => (
            <CatalogItem key={camper._id} {...camper} />
          ))}
        </ul>
        <Button className={css.loadMore} variant="outline" size="medium">
          Load more
        </Button>
      </>
    )
  );
}
