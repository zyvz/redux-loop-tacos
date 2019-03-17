import { createStore } from 'redux';
import { install } from 'redux-loop';
import reducer, { initialState } from './reducer';

export const store = createStore(reducer, initialState, install());