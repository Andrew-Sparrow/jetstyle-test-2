import {
  useEffect,
  useState,
} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  useNavigate,
  useMatch,
} from "react-router-dom";

import { customAlphabet } from 'nanoid'

import withLayout from '../hocs/with-layout';
import SubmitButton from '../submit-button/submit-button';
import { AppRoute } from '../../const';
import { addItemAction, editItemAction } from '../../store/actions';
import { getBooks } from '../../store/books/selectors'
import { FileUploader } from '../file-uploader/file-uploader'

const ErrorMessage = {
  TITLE: "Enter book title!",
  AUTHOR: "Enter author name!"
};

const BookForm = () => {
  const dispatch = useDispatch();
  const match = useMatch('/edit/:id');
  const id = match?.params.id;

  const books = useSelector(getBooks);

  let navigate = useNavigate();

  const nanoID = customAlphabet('1234567890', 5)

  let book = {
    id: parseInt(nanoID(), 10),
    img: null,
    title: '',
    author: ''
  };

  if (id) {
    book = books.find((book) => book.id === +id);
  }

  const [formData, setFormData] = useState(book);
  const [pictureErrors, setPictureErrors] = useState([]);

  const [formErrors, setFormErrors] = useState({
    title: '',
    author: '',
    picture: ''
  });

  const handleFileError = (errArray) => {
    setPictureErrors(errArray)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formErrorsValidation = isFormValid();

    setFormErrors(formErrorsValidation);

    if (Object.keys(formErrorsValidation).length === 0) {
      if (match) {
        dispatch(editItemAction(formData))
      } else {
        dispatch(addItemAction(formData));
      }
      setFormData({
        id: null,
        img: null,
        title: '',
        author: ''
      });
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      navigate(AppRoute.MAIN);
    }
  }, [formErrors, navigate]);

  const isFormValid = () => {
    let errors = {};
    if (!formData.title) {
      errors.title = ErrorMessage.TITLE;
    }
    if (!formData.author) {
      errors.author = ErrorMessage.AUTHOR;
    }
    if (pictureErrors.length !== 0) {
      errors.picture = pictureErrors.join(', ');
    }
    return errors;
  };

  const handleInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddPicture = (picture) => {
    setFormData({
      ...formData,
      img: picture
    });
  }

  return (
    <div className="books">
      <div className="books__items-container container">
        <section className="books__items form">
          <h2 className="form__title">{match ? 'Edit Book' : 'Add Book'}</h2>
          <fieldset style={{border: 'none'}}>
            <form
              className="form"
              action=""
              onSubmit={handleSubmit}
            >
              <label className="reviews__label form__label" htmlFor="title">Title*</label>
              <input
                className="reviews__input form__textarea"
                onChange={handleInputChange}
                id="title"
                value={formData.title}
                name="title"
              />
              <p className="reviews__error">{formErrors.title}</p>

              <label className="reviews__label form__label" htmlFor="author">Author*</label>
              <input
                className="reviews__input form__textarea"
                onChange={handleInputChange}
                id="author"
                value={formData.author}
                name="author"
              />
              <p className="reviews__error">{formErrors.author}</p>

              {!match && (
                <>
                  <FileUploader
                    handleFileError={handleFileError}
                    handleAddPicture={handleAddPicture}
                  />
                  <p className="reviews__error">{formErrors.picture}</p>
                </>
              )}

              <SubmitButton isEdit={match} />
            </form>
          </fieldset>
        </section>
      </div>
    </div>
  );
};

const withLayoutFormAdd = withLayout(BookForm);
export default withLayoutFormAdd;
