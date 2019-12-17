import { sendmail } from '../api/email';
import ACTIONS from '../constants/actions';
import { createApiRequest } from './helpers';

export const sendmailApi = createApiRequest(sendmail, true, ACTIONS.EMAIL.SEND, true);
