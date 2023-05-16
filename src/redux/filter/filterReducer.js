import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filterActions';

const filterInitialState = '';

const filtersReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => {
    state = action.payload;
    return state;
  },
});

export default filtersReducer;
