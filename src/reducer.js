import { Cmd, loop } from 'redux-loop';
import { actions, successAction } from './actions';
import { fetchRecipeEffect } from './effects';

export const initialState = {
  taco: null,
  loading: false
};

const handleFetch = (state) => {
  return loop({
    ...state,
    loading: true
  }, Cmd.run(fetchRecipeEffect, {
    successActionCreator: successAction
  }));
};

const handleSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    taco: action.taco
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.fetch: return handleFetch(state);
    case actions.success: return handleSuccess(state, action);

    default: return state;
  }
};

export default reducer;