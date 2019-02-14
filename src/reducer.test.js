import { Cmd, loop } from 'redux-loop';
import { fetchIngredientsEffect } from './effects';
import { fetchAction, successAction } from './actions';
import reducer from './reducer';

describe('reducer works as expected', () => {
  it('should fetch as expected', () => {
    const startingState = { loading: false };

    const expectedState = { loading: true };
    const expectedCmd = Cmd.run(fetchIngredientsEffect, {
      successActionCreator: successAction
    });
    const expectedResult = loop(expectedState, expectedCmd);


    const action = fetchAction();
    const actualResults = reducer(startingState, action);

    expect(actualResults).toEqual(expectedResult);
  });
});
