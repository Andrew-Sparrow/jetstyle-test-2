import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  ADD_ITEM: 'books/add',
  DELETE_ITEM: 'books/delete',
  REDIRECT_TO_ROUTE: 'books/redirectToRoute',
};

export const addItemAction = createAction(
  ActionType.ADD_ITEM,
  (newBook) => ({ payload: newBook })
);

export const deleteItemAction = createAction(
  ActionType.DELETE_ITEM,
  (id) => ({ payload: id })
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({ payload: url })
);
