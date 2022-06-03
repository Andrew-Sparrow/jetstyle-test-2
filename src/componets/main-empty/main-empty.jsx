import React from 'react';
import NewItemButton from '../new-item-button/new-item-button';


function MainEmpty(props) {

  return (
    <div className="books">
      <div className="books__items-container books__items-container--empty container">
        <section className="books__no-items">
          <NewItemButton />
          <div className="books__status-wrapper tabs__content">
            <b className="books__status">No books available</b>
            <p className="books__status-description">We could not find any books available at the moment</p>
          </div>
        </section>
        <div className="books__right-section" />
      </div>
    </div>
  );
}

export default MainEmpty;
