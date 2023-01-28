import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import { books } from '../../books-db';
import WithLayoutMain from '../main/main';
import WithLayoutForm from '../book-form/book-form';
import { AppRoute } from '../../const';
import NotFound from '../not-found/not-found';
import { useDispatch } from 'react-redux';
import { setItemsAction } from "../../store/actions";

function App() {
  const dispatch = useDispatch();

  if (!localStorage.getItem('books')) {
    localStorage.setItem('books', JSON.stringify(books));
    dispatch(setItemsAction(books))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MAIN} element={<WithLayoutMain />} />
        <Route path={AppRoute.ADD} element={<WithLayoutForm />} />
        <Route path={AppRoute.EDIT} element={<WithLayoutForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
