import React from 'react';
import { useGetUtm } from 'util/hooks/useAsync';
import { useAppSelector } from 'util/reduxType/type';
export const MyUTM = () => {
  const res = useAppSelector((state) => state);
  console.log('sdfsdf', res);
  return <div></div>;
};
