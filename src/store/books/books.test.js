import {
  addItemAction,
  deleteItemAction,
  editItemAction,
  ActionType,
} from '../actions'

import { books } from './books'

const initialState = {
  books: JSON.parse(localStorage.getItem('books'))
};

describe('Reducer: books', () => {
  it('without additional parameters should return initial state', () => {
    expect(books(undefined, {})).toEqual(initialState);
  });

  it('should add item', () => {
    let book1 = {
      id: 1,
      img: null,
      title: '',
      author: ''
    };

    const initialState = {
      books: []
    };

    const newState = {
      books: [book1]
    };

    const addItem = addItemAction(book1);

    expect(books(initialState, addItem)).toEqual(newState);
  });
})
