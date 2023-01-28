import { createReducer } from '@reduxjs/toolkit';
import Util from '../../util/util';

import {
  setItemsAction,
  deleteItemAction,
  addItemAction,
  editItemAction
} from '../actions';

const initialState = {
  books: JSON.parse(localStorage.getItem('books'))
};

const books = createReducer(initialState, (builder) => {
  builder
    .addCase(deleteItemAction, (state, action) => {
      const newBookList = Util.deleteItem(action.payload, state.books);
      state.books = newBookList;
      localStorage.setItem('books', JSON.stringify(newBookList))
    })
    .addCase(editItemAction, (state, action) => {
      const newBookList = Util.editItem(action.payload, state.books);
      state.books = newBookList;
      localStorage.setItem('books', JSON.stringify(newBookList))
    })
    .addCase(addItemAction, (state, action) => {
      state.books.push(action.payload);
      localStorage.setItem('books', JSON.stringify(state.books))
    })
    .addCase(setItemsAction, (state, action) => {
      state.books = (action.payload);
      localStorage.setItem('books', JSON.stringify(state.books))
    })
});

export { books };
