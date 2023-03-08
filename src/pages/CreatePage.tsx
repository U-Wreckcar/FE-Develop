import React from 'react';
import { CreateUtm } from 'components/create_components/CreateUtm';
import { getUTMs } from 'util/async/api';
import { useGetUtm } from 'util/hooks/useAsync';
import { CreateCategory } from 'components/create_components/create_input_components/CreateCategory';
export default function CreatePage() {
  const res = useGetUtm(getUTMs);
  console.log(res);
  return (
    <>
      <CreateCategory />
      <CreateUtm />
    </>
  );
}
