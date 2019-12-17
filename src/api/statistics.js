import axios from './config';
import URL from '../constants/url';

export const fetchStatisticsCount = () => axios.get(URL.STATISTICS.COUNT);
export const fetchStatisticsDocument = id =>
  axios.get(`${URL.STATISTICS.ROOT}?download_id=${id}`);
export const createStatisticsDocument = data => axios.post(URL.STATISTICS.ROOT, data);
export const updateStatisticsDocument = data =>
  axios.put(`${URL.STATISTICS.ROOT}/${data.id}`, data);
