import axios from './config';
import URL from '../constants/url';

export const downloadFile = id => axios.get(`${URL.FILES}/${id}`);
