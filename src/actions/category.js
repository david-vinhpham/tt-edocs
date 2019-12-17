import { fetchCategories, fetchSubcategories } from '../api/category';
import { createApiRequest } from './helpers';
import ACTIONS from '../constants/actions';

export const fetchCategoriesApi = createApiRequest(
  fetchCategories,
  true,
  ACTIONS.CATEGORIES,
);

export const fetchSubcategoriesApi = createApiRequest(
  fetchSubcategories,
  true,
  ACTIONS.SUBCATEGORIES,
);

export default null;
