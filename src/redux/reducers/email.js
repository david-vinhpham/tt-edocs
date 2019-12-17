import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import ACTIONS from '../../constants/actions';

const config = {
  key: 'tandt-email',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
};

const initState = {
  email: {},
};

const reducer = (state = initState, action) => {
  if (action.type === ACTIONS.EMAIL.SEND) {
    return {
      ...state,
      email: action.payload,
    };
  }

  return state;
};

export default persistReducer(config, reducer);
