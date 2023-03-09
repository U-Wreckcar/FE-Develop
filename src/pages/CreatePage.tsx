import React from 'react';
import { getUTMs } from 'util/async/api';
import { useGetUtm } from 'util/hooks/useAsync';
import { CreateUtm } from 'components/create_components/CreateUTM';
import { CreateCategory } from 'components/create_components/CreateCategory';
import { CreateCopyBox } from 'components/create_components/CreateCopyBox';
export default function CreatePage() {
  const res = useGetUtm(getUTMs);
  console.log(res);
  return (
    <>
      <CreateCategory />
      <CreateUtm />
      <CreateCopyBox />
    </>
  );
}
