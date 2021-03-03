/* Import(s) */
import { combineReducers } from 'redux';
import announcements from './announcements';
import alerts from './alerts';
import categories from './categories';
import cities from './cities';
import forms from './forms';
import messaging from './messaging';
import users from './users';
import load from './load';
import utils from './utils';
import togglers from './togglers';

export default combineReducers({
  announcements,
  alerts,
  categories,
  cities,
  forms,
  messaging,
  users,
  load,
  togglers,
  utils,
});
