import React from 'react';
import { useGetUtm } from 'util/hooks/useAsync';
import { get_UTM } from 'util/async/api';
import { useAppSelector } from 'util/reduxType/type';
export const MyUTM = () => {
  const res = useAppSelector((state) => state);
  console.log('sdfsdf', res);
  useGetUtm(get_UTM);
  console.log(useGetUtm(get_UTM).data);
  return <div></div>;
};
