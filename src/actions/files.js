import { downloadFile } from '../api/files';
import ACTIONS from '../constants/actions';
import { createApiRequest } from './helpers';

export const downloadFileApi = createApiRequest(
  downloadFile,
  true,
  ACTIONS.FILES.DOWNLOAD,
);
