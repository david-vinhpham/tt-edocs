const ACTIONS = {
  COMMON: {
    LOADING: 'COMMON.SET_LOADING',
    ERROR: {
      SET: 'COMMON.SET_ERROR',
      RESET: 'COMMON.RESET_ERROR',
    },
  },
  AUTH: {
    REGISTER: 'AUTH.REGISTER_USER',
    LOGIN: 'AUTH.LOGIN_USER',
    LOGOUT: 'AUTH.LOGOUT_USER',
    UPDATE: 'AUTH.UPDATE_USER',
  },
  CATEGORIES: 'DOCUMENTS.GET_CATEGORIES',
  SUBCATEGORIES: 'DOCUMENTS.GET_SUBCATEGORIES',
  DOCUMENT: {
    COUNT: 'DOCUMENTS.FETCH_DOCUMENTS_COUNT',
    DETAIL: 'DOCUMENTS.FETCH_DOCUMENT_DETAILS',
    SEARCH: 'DOCUMENTS.SET_SEARCH_RESULTS',
    CLEANUP: 'DOCUMENTS.CLEAN_UP_COMPLETED',
    RATING: 'DOCUMENT.RATING_DOCUMENT',
  },
  STATISTICS: {
    COUNT: 'STATISTICS.FETCH_STATISTICS_COUNT',
    CREATE: 'STATISTICS.CREATE_STATISTICS_DOCUMENTS',
    UPDATE: 'STATISTICS.UPDATE_STATISTICS_DOCUMENTS',
    FIND_STATISTICS: 'STATISTICS.FIND_STATISTICS_DOCUMENTS',
  },
  COMPLETE: {
    CREATE: 'COMPLETE.CREATE_COMPLETED_DATA',
    FETCH: 'COMPLETE.FETCH_COMPLETED_DATA',
  },
  EMAIL: {
    SEND: 'EMAIL.SENDING_EMAIL',
  },
  FILES: {
    DOWNLOAD: 'FILES.DOWNLOAD_FILE',
  },
};

export default ACTIONS;
