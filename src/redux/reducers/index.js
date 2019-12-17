import { combineReducers } from 'redux';
import common from './common';
import auth from './auth';
import category from './category';
import document from './document';
import statistics from './statistics';
import complete from './complete';
import email from './email';

export default combineReducers({
  common,
  auth,
  category,
  document,
  statistics,
  complete,
  email,
});
