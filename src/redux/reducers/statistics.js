import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import ACTIONS from '../../constants/actions';

const config = {
  key: 'tandt-statistics',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
};

const initState = {
  totalDownloadStatistics: 0,
  statistics: {},
};

const reducer = (state = initState, action) => {
  if (action.type === ACTIONS.STATISTICS.COUNT) {
    return {
      ...state,
      totalDownloadStatistics: action.payload,
    };
  }
  if (action.type === ACTIONS.STATISTICS.FIND_STATISTICS) {
    return {
      ...state,
      statistics: action.payload,
    };
  }

  return state;
};

export default persistReducer(config, reducer);
