 import { useQuery } from '@tanstack/react-query';
import React from 'react';

export const useGetUtm = (get_UTM: any) => {
  return useQuery(['utms'], async () => {
    const { data } = await get_UTM;
    return data;
  });
};
