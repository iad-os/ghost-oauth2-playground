import React, { Suspense } from 'react';
import Loader from '../components/Loader';

const Loadable =
  (Component: React.LazyExoticComponent<() => JSX.Element>) => (props: any) =>
    (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
