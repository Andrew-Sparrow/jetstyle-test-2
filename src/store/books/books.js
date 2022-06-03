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
      const newBookList = Util.deleteItem(action.payload, state.books);
      state.books = newBookList;
      localStorage.setItem('books', newBookList)
    })
});

export { books };
