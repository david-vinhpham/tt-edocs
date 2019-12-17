import axios from './config';
import URL from '../constants/url';

export const login = data => axios.post(URL.LOGIN, data);
export const register = data => axios.post(URL.REGISTER, data);
export const update = data => axios.put(`${URL.USERS}/${data.id}`, data);

export default null;
