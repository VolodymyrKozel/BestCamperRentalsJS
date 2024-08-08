import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import FavoritePage from '../pages/Favorite/FavoritePage';
import NavBar from '../components/NavBar/NavBar';

export default function App() {
  return (
    <div>
      <h1>Best Camper Rentals</h1>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
