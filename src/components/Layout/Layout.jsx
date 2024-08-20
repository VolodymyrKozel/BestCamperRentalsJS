import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
export default function Layout({ children }) {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Suspense fallback={<Loader style={'full'} />}>{children}</Suspense>
    </>
  );
}
