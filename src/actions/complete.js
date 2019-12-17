import { fetchCompleteData, createCompleteData } from '../api/complete';
import ACTIONS from '../constants/actions';
import { createApiRequest } from './helpers';

export const fetchCompleteDataApi = createApiRequest(
  fetchCompleteData,
  true,
  ACTIONS.COMPLETE.FETCH,
  true,
);

export const createCompleteDataApi = createApiRequest(
  createCompleteData,
  true,
  ACTIONS.COMPLETE.CREATE,
);
