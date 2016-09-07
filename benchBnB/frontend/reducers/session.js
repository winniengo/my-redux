import {
  LOGOUT,
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS } from '../actions/session_actions';

import merge from 'lodash/merge';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const session = (state = nullUser, action) => {
  switch(action.type) {
    case LOGOUT:
      return merge({}. nullUser);
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {currentUser});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {errors});
    default:
      return state;
  }
}

export default session;
