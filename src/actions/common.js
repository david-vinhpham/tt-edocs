import ACTIONS from '../constants/actions';
import { createActionType } from './createActions';

export const setLoading = createActionType(ACTIONS.COMMON.LOADING, true);
export const setError = createActionType(ACTIONS.COMMON.ERROR.SET, true);
export const resetError = createActionType(ACTIONS.COMMON.ERROR.RESET);

export default null;
