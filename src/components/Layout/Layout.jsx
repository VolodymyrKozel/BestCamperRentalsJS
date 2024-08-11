import { Suspense } from 'react';
import Loader from '../Loader/Loader';
export default function Layout({ children }) {
  return (
    <>
      <Suspense fallback={<Loader style={'full'} />}>{children}</Suspense>
    </>
  );
}
