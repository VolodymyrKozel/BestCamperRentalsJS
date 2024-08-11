import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritePage = lazy(() => import('../pages/Favorite/FavoritePage'));
const ModalCamper = lazy(() => import('../components/ModalCamper/ModalCamper'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const FeaturesSubPage = lazy(() => import('./FeaturesSubPage/FeaturesSubPage'));

export default function App() {
  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<ModalCamper />}>
          <Route path="features" element={<FeaturesSubPage />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
