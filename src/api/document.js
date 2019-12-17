import axios from './config';
import URL from '../constants/url';

export const fetchDocumentsCount = () => axios.get(URL.DOCUMENTS_COUNT);
export const fetchDocumentDetail = id => axios.get(`${URL.DOCUMENTS}/${id}`);
export const ratingDocument = data => axios.put(`${URL.DOCUMENTS}/${data.id}`, data);

export default null;
