import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteItemAction } from '../../store/actions';

import {defaultImg} from '../../const';

function Book(props) {
  const {
    id,
    title,
    author,
    img,
  } = props;

  const dispatch = useDispatch();

  const onDeleteClick = (evt) => {
    evt.preventDefault();
    dispatch(deleteItemAction(id));
  };

  const onEditClick = (evt) => {
    evt.preventDefault();
  };

  return (
    <li
      className="card"
      id={id}
    >
      <img className="card__left" src={img === null ? defaultImg : img} alt="avatar"></img>
      <div className="card__right">
        <p className="card__data">Book Title: <span className="card__name">{title}</span></p>
        <p className="card__data">Author: <span className="card__name">{author}</span></p>
      </div>
      <div className="card__buttons">
        <button
          className="card__bookmark-button button"
          type="button"
          onClick={onEditClick}
        >
          <svg className="card__edit-icon" width="30" height="30">
            <use xlinkHref="#icon-pencil"></use>
          </svg>
          <span className="visually-hidden">Edit</span>
        </button>
        <button
          className="card__bookmark-button button"
          type="button"
          onClick={onDeleteClick}
        >
          <svg className="card__bookmark-icon" width="30" height="30">
            <use xlinkHref="#icon-delete"></use>
          </svg>
          <span className="visually-hidden">Delete</span>
        </button>
      </div>
    </li>
  );
}

Book.propTypes = {
  'id': PropTypes.number.isRequired,
  'title': PropTypes.string.isRequired,
  'author': PropTypes.string.isRequired,
  "img": PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
};

export default Book;
