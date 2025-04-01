import React, { Suspense } from 'react';
import Loader from '../components/Loader';

const Loadable =
  (Component: React.LazyExoticComponent<() => React.ReactNode>) =>
  (props: any) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
