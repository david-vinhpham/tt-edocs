import {
  fetchDocumentDetail,
  fetchDocumentsCount,
  ratingDocument,
} from '../api/document';
import ACTIONS from '../constants/actions';
import { createActionType } from './createActions';
import { createApiRequest } from './helpers';

export const fetchDocumentsCountApi = createApiRequest(
  fetchDocumentsCount,
  true,
  ACTIONS.DOCUMENT.COUNT,
);
export const fetchDocumentDetailApi = createApiRequest(
  fetchDocumentDetail,
  true,
  ACTIONS.DOCUMENT.DETAIL,
);
export const setSearchResultsAction = createActionType(ACTIONS.DOCUMENT.SEARCH, true);
export const cleanUpCompletedDocuments = createActionType(ACTIONS.DOCUMENT.CLEANUP);
export const ratingDocumentApi = createApiRequest(
  ratingDocument,
  true,
  ACTIONS.DOCUMENT.RATING,
);

export default null;
