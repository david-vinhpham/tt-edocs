import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import ACTIONS from '../../constants/actions';

const config = {
  key: 'tandt-complete',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
};

const initState = {
  completeData: [],
  createdCompleteData: {},
};

const reducer = (state = initState, action) => {
  if (action.type === ACTIONS.COMPLETE.FETCH) {
    return {
      ...state,
      completeData: action.payload,
    };
  }
  if (action.type === ACTIONS.COMPLETE.CREATE) {
    return {
      ...state,
      createdCompleteData: action.payload,
    };
  }
  if (action.type === ACTIONS.DOCUMENT.CLEANUP) {
    return {
      ...state,
      createdCompleteData: {},
    };
  }

  return state;
};

export default persistReducer(config, reducer);
