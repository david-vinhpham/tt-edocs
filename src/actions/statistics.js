import { createApiRequest } from './helpers';
import {
  fetchStatisticsDocument,
  createStatisticsDocument,
  updateStatisticsDocument,
  fetchStatisticsCount,
} from '../api/statistics';
import ACTIONS from '../constants/actions';

export const fetchStatisticsDocumentApi = createApiRequest(
  fetchStatisticsDocument,
  true,
  ACTIONS.STATISTICS.FIND_STATISTICS,
  true,
);

export const createStatisticsDocumentApi = createApiRequest(
  createStatisticsDocument,
  true,
  ACTIONS.STATISTICS.CREATE,
);

export const updateStatisticsDocumentApi = createApiRequest(
  updateStatisticsDocument,
  true,
  ACTIONS.STATISTICS.UPDATE,
);

export const fetchStatisticsCountApi = createApiRequest(
  fetchStatisticsCount,
  true,
  ACTIONS.STATISTICS.COUNT,
  true,
);
