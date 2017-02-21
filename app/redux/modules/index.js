import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {Record} from 'immutable';
import app from './app';
import * as actions from './app/actions';

// Record is like class, but immutable and with default values.
// https://facebook.github.io/immutable-js/docs/#/Record
const Form = Record({
  disabled: false,
  error: null,
  fields: new (Record({
    email: '',
    password: ''
  }))()
});
const InitialState = Record({
  form: new Form()
});
// Combine reducers with routeReducer which keeps track of
// router state
const initialState = new InitialState();

const authReducer = (state = initialState, action) => {
  if (!(state instanceof InitialState.constructor)) return initialState.mergeDeep(state);
  switch (action.type) {

    case actions.SET_FORM_FIELD: {
      const {name, value} = action.payload;
      return state.setIn(['form', 'fields', name], value);
    }

    case actions.LOGIN:
      return state.setIn(['form', 'disabled'], true);

    case actions.LOGIN_SUCCESS:
    case actions.LOGIN_ERROR: {
      const error = action.type === actions.LOGIN_ERROR ? action.payload : null;
      return state
        .setIn(['form', 'disabled'], false)
        .setIn(['form', 'error'], error);
    }
    default:
      return state;

  }
};

const rootReducer = combineReducers({
  app,
  routing,
  authReducer
});

export default rootReducer;
