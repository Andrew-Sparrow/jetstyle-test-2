import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import { books } from '../../books-db';
import WithLayoutMain from '../main/main'
import WithLayoutForm from '../book-form/book-form'
import { AppRoute } from '../../const'
import NotFound from '../not-found/not-found'

if (!localStorage.getItem('books')) {
  localStorage.setItem('books', JSON.stringify(books));
}

function App() {
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
