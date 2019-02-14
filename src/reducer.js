import { loop, Cmd } from 'redux-loop';
import { actions, successAction } from './actions';
import { fetchIngredientsEffect } from './effects';


export const initialState = {
  ingredients: [],
  loading: false
};

const handleFetch = state => {
  return {
    loading: true,
    ingredients: state.ingredients
  };
};

const handleSuccess = (state, action) => {
  return {
    loading: false,
    ingredients: action.ingredients
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.fetch:
      return handleFetch(state, action);
    case actions.success:
      return handleSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;