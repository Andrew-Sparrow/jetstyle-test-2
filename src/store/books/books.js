import { createReducer } from '@reduxjs/toolkit';
import Util from '../../util/util';

import {
  deleteItemAction
} from '../actions';

const initialState = {
  books: JSON.parse(localStorage.getItem('books'))
};

const books = createReducer(initialState, (builder) => {
  builder
    .addCase(deleteItemAction, (state, action) => {
      state.books = Util.deleteItem(action.payload, state.books);
    })
});

export { books };
