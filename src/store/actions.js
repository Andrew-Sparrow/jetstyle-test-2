import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  ADD_ITEM: 'books/add',
  EDIT_ITEM: 'books/edit',
  DELETE_ITEM: 'books/delete',
  REDIRECT_TO_ROUTE: 'books/redirectToRoute',
  SET_ITEMS: 'books/set_items',
};

export const addItemAction = createAction(
  ActionType.ADD_ITEM,
  (newBook) => ({ payload: newBook })
);

export const deleteItemAction = createAction(
  ActionType.DELETE_ITEM,
  (id) => ({ payload: id })
);

export const editItemAction = createAction(
  ActionType.EDIT_ITEM,
  (editedBook) => ({ payload: editedBook })
);

export const setItemsAction = createAction(
  ActionType.SET_ITEMS,
  (items) => ({ payload: items })
);
