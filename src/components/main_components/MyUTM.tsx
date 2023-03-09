import React from 'react';
import { useGetUtm } from 'util/hooks/useAsync';

import { getUTMs } from 'util/async/api';
import { useAppSelector } from 'util/reduxType/type';
export const MyUTM = () => {
  const res = useAppSelector((state) => state);
  // console.log('sdfsdf', res);
  useGetUtm(getUTMs);
  // console.log(useGetUtm(getUTM).data);
  return <div></div>;
};
