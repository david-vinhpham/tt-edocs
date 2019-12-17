import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import ACTIONS from '../../constants/actions';

const config = {
  key: 'tandt-document-detail',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
};

const initState = {
  documentDetail: {},
  searchResults: {},
  documentsCount: 0,
};

const reducer = (state = initState, action) => {
  if (
    action.type === ACTIONS.DOCUMENT.DETAIL ||
    action.type === ACTIONS.DOCUMENT.RATING
  ) {
    return {
      ...state,
      documentDetail: action.payload,
    };
  }
  if (action.type === ACTIONS.DOCUMENT.SEARCH) {
    return {
      ...state,
      searchResults: action.payload,
    };
  }
  if (action.type === ACTIONS.DOCUMENT.COUNT) {
    return {
      ...state,
      documentsCount: action.payload,
    };
  }

  return state;
};

export default persistReducer(config, reducer);
