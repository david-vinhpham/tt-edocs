import axios from './config';
import URL from '../constants/url';

export const sendmail = data => axios.post(URL.EMAIL, data);
