import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import ACTIONS from '../../constants/actions';

const config = {
  key: 'tandt-files',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
};

const initState = {
  fileDownload: {},
};
const reducer = (state = initState, action) => {
  if (action.type === ACTIONS.FILES.DOWNLOAD) {
    return {
      ...state,
      fileDownload: action.payload,
    };
  }

  return state;
};

export default persistReducer(config, reducer);
