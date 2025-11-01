import React, { Suspense } from 'react';
import NewTeamMember from './NewTeamMember'; // if it's split out, or inline otherwise

const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <NewTeamMember />
  </Suspense>
);

export default Page;
