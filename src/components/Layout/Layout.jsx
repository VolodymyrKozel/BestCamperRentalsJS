import { Suspense } from 'react';
import css from './Layout.module.css';
import Loader from '../Loader/Loader';
export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}
