import sessionStorage from 'redux-persist/lib/storage/session';
import get from 'lodash/get';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import ACTIONS from '../../constants/actions';

const config = {
  key: 'tandt-edocs',
  storage: sessionStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
};

const initState = {
  isAuth: false,
  userDetail: {},
};

const reducer = (state = initState, action) => {
  if (action.type === ACTIONS.AUTH.LOGIN || action.type === ACTIONS.AUTH.REGISTER) {
    const userDetail = get(action.payload, 'user');
    const userConfirm = get(userDetail, 'confirmed');
    const userBlocked = get(userDetail, 'blocked');
    const isAuth = userConfirm && !userBlocked;
    return {
      ...state,
      isAuth,
      userDetail,
    };
  }
  if (action.type === ACTIONS.AUTH.UPDATE) {
    const userDetail = action.payload;
    const userConfirm = get(userDetail, 'confirmed');
    const userBlocked = get(userDetail, 'blocked');
    const isAuth = userConfirm && !userBlocked;
    return {
      ...state,
      isAuth,
      userDetail,
    };
  }
  if (action.type === ACTIONS.AUTH.LOGOUT) {
    return {
      ...state,
      isAuth: false,
      userDetail: action.payload,
    };
  }
  return state;
};

export default persistReducer(config, reducer);
