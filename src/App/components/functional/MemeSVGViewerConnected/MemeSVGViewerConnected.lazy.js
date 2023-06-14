import React, { lazy, Suspense } from 'react';

const LazyMemeSvgViewerConnected = lazy(() => import('./MemeSvgViewerConnected/MemeSvgViewerConnected'));

const MemeSvgViewerConnected = props => (
  <Suspense fallback={null}>
    <LazyMemeSvgViewerConnected {...props} />
  </Suspense>
);

export default MemeSvgViewerConnected;
