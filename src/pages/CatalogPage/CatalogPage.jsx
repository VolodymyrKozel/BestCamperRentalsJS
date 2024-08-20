import Catalog from '../../components/Catalog/Catalog';
import DocumentTitle from '../../components/DocumentTitle';
import SideBar from '../../components/SideBar/SideBar';
import Location from '../../components/Location/Location';
import Filters from '../../components/Filters/Filters';
import Container from '../../components/ui/Container/Container';

export default function CatalogPage() {
  return (
    <Container>
      <DocumentTitle>Catalog</DocumentTitle>
      <SideBar>
        <Location />
        <Filters />
      </SideBar>
      <Catalog />
    </Container>
  );
}
