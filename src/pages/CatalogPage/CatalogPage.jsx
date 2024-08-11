import Catalog from '../../components/Catalog/Catalog';
import DocumentTitle from '../../components/DocumentTitle';
import SideBar from '../../components/SideBar/SideBar';
import Location from '../../components/Location/Location';
import Filters from '../../components/Filters/Filters';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <div className={css.wrapper}>
      <DocumentTitle>Catalog</DocumentTitle>
      <SideBar>
        <Location />
        <Filters />
      </SideBar>
      <Catalog />
    </div>
  );
}
