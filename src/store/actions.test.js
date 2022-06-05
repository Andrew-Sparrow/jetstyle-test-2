import {
  ActionType,
  addItemAction,
  deleteItemAction,
  editItemAction
} from './actions'

describe('Actions', () => {
  it('action creator for adding new Book without cover, returns correct action', () => {
    const book = {
      id: 1,
      img: null,
      title: 'cover',
      author: 'author'
    };

    const expectedAction = {
      type: ActionType.ADD_ITEM,
      payload: book
    }

    expect(addItemAction(book)).toEqual(expectedAction);
  });

  it('action creator for adding new Book with cover, returns correct action', () => {
    const book = {
      id: 1,
      img: {},
      title: 'cover',
      author: 'author'
    };

    const expectedAction = {
      type: ActionType.ADD_ITEM,
      payload: book
    }

    expect(addItemAction(book)).toEqual(expectedAction);
  });

  it('action creator for deleting Book, returns correct action', () => {
    const expectedAction = {
      type: ActionType.DELETE_ITEM,
      payload: 1
    }

    expect(deleteItemAction(1)).toEqual(expectedAction);
  });

  it('action creator for editing Book, returns correct action', () => {
    const book = {
      id: 1,
      img: {},
      title: 'cover',
      author: 'author'
    };

    const expectedAction = {
      type: ActionType.EDIT_ITEM,
      payload: book
    }

    expect(editItemAction(book)).toEqual(expectedAction);
  });
});
