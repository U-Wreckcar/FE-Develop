import axios from './axiosConfig';
import instance from "./axiosConfig";

export const get_UTM = axios.get('utms');
export const getAllUTMList = instance.get('/utms');