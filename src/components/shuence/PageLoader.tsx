import React from 'react';

export function PageLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="animate-spin rounded-full border-2 border-b-transparent border-l-transparent border-r-transparent border-t-primary h-12 w-12" />
    </div>
  );
}

export default PageLoader;
