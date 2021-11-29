import React from 'react';

import AppLayout from '../../layout/AppLayout';
import { Meta } from '../../layout/Meta';

export default function Admin() {
  return (
    <AppLayout
      meta={<Meta title="Admin Page" description="Ma page d'administration" />}
    >
      <div className="bg-gray-100"></div>
    </AppLayout>
  );
}
