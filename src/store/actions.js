import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  DELETE_ITEM: 'books/delete',
  REDIRECT_TO_ROUTE: 'books/redirectToRoute',
};

export const deleteItemAction = createAction(
  ActionType.DELETE_ITEM,
  (id) => ({ payload: id })
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({ payload: url })
);
