import axios from './config';
import URL from '../constants/url';
import DOCUMENTS from '../constants/documents';

export const fetchCategories = () =>
  axios.get(`${URL.CATEGORIES}?_limit=${DOCUMENTS.LIMIT}`);

export const fetchSubcategories = () => axios.get(URL.SUBCATEGORIES);

export default null;
