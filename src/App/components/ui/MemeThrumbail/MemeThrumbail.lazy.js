import React, { lazy, Suspense } from 'react';

const LazyMemeThrumbail = lazy(() => import('./MemeThrumbail'));

const MemeThrumbail = props => (
  <Suspense fallback={null}>
    <LazyMemeThrumbail {...props} />
  </Suspense>
);

export default MemeThrumbail;
