import { login, register, update } from '../api/auth';
import { createActionType } from './createActions';
import { createApiRequest } from './helpers';
import ACTIONS from '../constants/actions';

export const logoutAction = createActionType(ACTIONS.AUTH.LOGOUT, true);
export const loginApi = createApiRequest(login, true, ACTIONS.AUTH.LOGIN);
export const registerApi = createApiRequest(register, true, ACTIONS.AUTH.REGISTER);
export const updateApi = createApiRequest(update, true, ACTIONS.AUTH.UPDATE);
