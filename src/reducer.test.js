import { Cmd, loop } from 'redux-loop';
import { fetchRecipeEffect } from './effects';
import { fetchAction, successAction } from './actions';
import reducer from './reducer';

describe('reducer works as expected', () => {
  it('should fetch as expected', () => {
    const state = { loading: false };
    const expectedResult = loop({
      loading: true
    }, Cmd.run(fetchRecipeEffect, {
      successActionCreator: successAction
    }));


    const action = fetchAction();
    const actualResults = reducer(state, action);

    expect(actualResults).toEqual(expectedResult);
  });
});