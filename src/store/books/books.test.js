import {
  addItemAction,
  deleteItemAction,
  editItemAction,
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

  it('should delete item', () => {
    let book = {
      id: 1,
      img: null,
      title: '',
      author: ''
    };

    const initialState = {
      books: [book]
    };

    const newState = {
      books: []
    };

    const deleteItem = deleteItemAction(1);

    expect(books(initialState, deleteItem)).toEqual(newState);
  });

  it('should edit item', () => {
    let oldBook = {
      id: 1,
      img: null,
      title: '',
      author: ''
    };

    let editedBook = {
      id: 1,
      img: null,
      title: 'test',
      author: ''
    };

    const initialState = {
      books: [oldBook]
    };

    const newState = {
      books: [editedBook]
    };

    const editAction = editItemAction(editedBook);

    expect(books(initialState, editAction)).toEqual(newState);
  });
})
