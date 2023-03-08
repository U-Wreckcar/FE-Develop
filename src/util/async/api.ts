import axios from './axiosConfig';
import instance from "./axiosConfig";

export const getUTM = axios.get('utms');
export const postUTM = async (data: any) => {
  console.log(data);
  await axios.post('utms', data);
};

