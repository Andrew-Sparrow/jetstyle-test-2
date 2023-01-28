import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import BookList from '../book-list/book-list';
import withLayout from '../hocs/with-layout';
import NewItemButton from '../new-item-button/new-item-button';

import MainEmpty from '../main-empty/main-empty';
import { getBooks } from '../../store/books/selectors';

function Main() {
  const books = useSelector(getBooks);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Books</h1>
      {
        books?.length === 0
          ? <MainEmpty />
          : (
            <div className="books">
              <div className="books__items-container container">
                <section className="books__items items">
                  <h2 className="visually-hidden">Books</h2>
                  <NewItemButton />
                  <b className="items__found">{books?.length} books </b>
                  <BookList
                    items={books}
                    initialPageNumber={0} // first page number
                    activeBooks={books}
                  />
                </section>
              </div>
            </div>
          )
      }
    </main>
  );
}

const withLayoutMain = withLayout(Main);
export default withLayoutMain;
