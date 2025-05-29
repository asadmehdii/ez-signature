// app/documents/page.tsx
import React, { Suspense } from 'react';
import DocumentPage from './documentpage';

export default function Documents() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DocumentPage />
    </Suspense>
  );
}
