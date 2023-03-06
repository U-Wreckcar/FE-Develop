import React from 'react';
import { useGetUtm } from 'util/hooks/useAsync';
import { get_UTM } from 'util/async/api';
export const MyUTM = () => {
  useGetUtm(get_UTM);
  console.log(useGetUtm(get_UTM).data);
  return <div></div>;
};
