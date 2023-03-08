import React from 'react';
import { useGetUtm } from 'util/hooks/useAsync';
import { getUTM } from 'util/async/api';
import { useAppSelector } from 'util/reduxType/type';
export const MyUTM = () => {
  const res = useAppSelector((state) => state);
  console.log('sdfsdf', res);
  useGetUtm(getUTM);
  console.log(useGetUtm(getUTM).data);
  return <div></div>;
};
