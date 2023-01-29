import React, { useReducer } from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

import Book from '../book/book';
import CardProp from '../book/book.prop';
import Pagination from '../pagination/pagination';

const ITEMS_PER_PAGE = 3;

function BookList(props) {
  const {
    items,
    initialPageNumber,
  } = props;

  const newItems = items ?? [];

  const selectedItemsOnFirstPage = newItems?.slice(0, ITEMS_PER_PAGE);
  const pagesTotalAmount = Math.ceil(newItems?.length / ITEMS_PER_PAGE);

  let slicedItems = selectedItemsOnFirstPage;

  const init = (initialPageNumber) => {
    return {
      pageNumber: initialPageNumber,
      slicedItems: slicedItems
    };
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changePageNumber':
        return { ...state, pageNumber: action.payload };
      case 'changeSlicedItems':
        return { ...state, slicedItems: action.payload };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialPageNumber, init);

  const pageNumberClickHandler = (dataPagination) => {
    let offset = Math.ceil(dataPagination.selected * ITEMS_PER_PAGE);
    slicedItems = newItems.slice(offset, offset + ITEMS_PER_PAGE);
    dispatch({ type: 'changePageNumber', payload: dataPagination.selected });
    dispatch({ type: 'changeSlicedItems', payload: slicedItems });
  };

  return (
    <Fragment>
      <ul className="books__items-list">
        {state.slicedItems?.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            group={book.group}
            img={book.img}
            favorite={book.favorite}
          />
        ))}
      </ul>
      {/* comparison was added to don't show pagination if there are too little amount of items in list */}
      {newItems.length > ITEMS_PER_PAGE && <Pagination
        pageCount={pagesTotalAmount}
        onPageNumberClick={pageNumberClickHandler}
        forcePage={state.pageNumber}
      />}
    </ Fragment>
  );
}

BookList.propTypes = {
  items: PropTypes.arrayOf(CardProp),
  initialPageNumber: PropTypes.number,
};

export default BookList;
