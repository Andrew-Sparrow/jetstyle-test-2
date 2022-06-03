import { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { customAlphabet } from 'nanoid'

import withLayout from '../hocs/with-layout';
import SubmitButton from '../submit-button/submit-button';
import { AppRoute } from '../../const';
import { addItemAction } from '../../store/actions';

const ErrorMessage = {
  TITLE: "Введите название книги!",
  AUTHOR: "Введите имя автора!"
};

const NewBookForm = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const nanoID = customAlphabet('1234567890', 5)

  const [formData, setFormData] = useState({
    id: parseInt(nanoID(), 10),
    img: null,
    title: '',
    author: ''
  });

  const [formErrors, setFormErrors] = useState({
    title: '',
    author: ''
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formErrorsValidation = isFormValid();
    setFormErrors(formErrorsValidation);
    if (Object.keys(formErrorsValidation).length === 0) {
      dispatch(addItemAction(formData));
      console.log('admit');
      setFormData({
        id: nanoID(),
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
    return errors;
  };

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="books">
      <div className="books__items-container container">
        <section className="books__items form">
          <h2 className="form__title">Add New Book</h2>
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
              <SubmitButton />
            </form>
          </fieldset>
        </section>
      </div>
    </div>
  );
};

const withLayoutFormAdd = withLayout(NewBookForm);
export default withLayoutFormAdd;
