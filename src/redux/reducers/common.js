import ACTIONS from '../../constants/actions';

const initState = {
  isLoading: false,
  isError: false,
  errMsg: '',
};

const reducer = (state = initState, action) => {
  if (action.type === ACTIONS.COMMON.LOADING) {
    return {
      ...state,
      isLoading: action.payload,
    };
  }
  if (action.type === ACTIONS.COMMON.ERROR.SET) {
    return {
      ...state,
      isError: true,
      errMsg: action.payload,
    };
  }
  if (action.type === ACTIONS.COMMON.ERROR.RESET) {
    return {
      ...state,
      isError: false,
      errMsg: '',
    };
  }
  return state;
};

export default reducer;
