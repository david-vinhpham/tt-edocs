import axios from './config';
import URL from '../constants/url';

export const fetchCompleteData = email =>
  axios.get(`${URL.COMPLETE.ROOT}?user_email=${email}`);

export const createCompleteData = data => axios.post(URL.COMPLETE.ROOT, data);
