import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import ACTIONS from '../../constants/actions';

const config = {
  key: 'tant-edocs-category',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
};

const initState = {
  categories: {},
  subcategories: [],
};

const reducer = (state = initState, action) => {
  if (action.type === ACTIONS.CATEGORIES) {
    return {
      ...state,
      categories: action.payload,
    };
  }
  if (action.type === ACTIONS.SUBCATEGORIES) {
    return {
      ...state,
      subcategories: action.payload,
    };
  }
  return state;
};

export default persistReducer(config, reducer);
