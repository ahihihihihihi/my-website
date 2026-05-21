// src/theme/Root.js
import React from 'react';
import ReadingProgress from '@site/src/components/ReadingProgress';

export default function Root({children}) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  );
}