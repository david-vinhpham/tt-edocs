import { setLoading, setError } from './common';
import { createActionType } from './createActions';

export const handleRequest = async (reqFunc, args) => {
  try {
    const result = await reqFunc(...args);
    const { status, data } = result;
    if (status === 200) {
      return [data, null];
    }
    return [null, data];
  } catch (error) {
    const { message } = error;
    const errMsg = message || 'Cannot connect to service!';
    return [null, errMsg];
  }
};

/*
 * Wrapping the Api request action
 * @param: {Function} dispatch
 * @param: {Function} successAction - Redux action to dispatch
 * @param: {Function} reqFunc - api request function
 * @param: {Array} args - Parameters injecting to reqFunc
 */
export const wrappedActionRequest = async (
  dispatch,
  successAction,
  errSuppressed = false,
  reqFunc,
  ...args
) => {
  dispatch(setLoading(true));
  const [result, error] = await handleRequest(reqFunc, args);
  if (error && !errSuppressed) {
    dispatch(setError(error));
  } else {
    dispatch(successAction(result));
  }
  dispatch(setLoading(false));
};

/*
 * Create Request Action to API
 * @param: {Function} reqFunc - Api request function
 * @param: {Boolean} resData - Response data sent to redux action parameters
 * @param: {String} type - Redux action type
 */
export const createApiRequest = (
  reqFunc,
  resData,
  type,
  errSuppressed,
) => data => async dispatch => {
  const successAction = createActionType(type, resData);
  return wrappedActionRequest(dispatch, successAction, errSuppressed, reqFunc, data);
};
