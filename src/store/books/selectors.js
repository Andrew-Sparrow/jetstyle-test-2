import { NameSpace } from '../root-reducer';

export const getBooks = (state) => state[NameSpace.BOOKS].books;
