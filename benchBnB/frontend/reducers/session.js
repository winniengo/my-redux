import {
  LOGOUT,
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from '../actions/session_actions';

import merge from 'lodash/merge';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const session = (state = nullUser, action) => {
  console.log(action.type);
  switch(action.type) {
    case LOGOUT:
      return merge({}. nullUser);
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {currentUser});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {errors});
    case CLEAR_ERRORS:
      // TODO
      return state;
    default:
      return state;
  }
}

export default session;
