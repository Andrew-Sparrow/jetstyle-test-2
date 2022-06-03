import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import { books } from '../../books-db';
import WithLayoutMain from '../main/main'
import { AppRoute } from '../../const'


localStorage.setItem('books', JSON.stringify(books));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MAIN} element={<WithLayoutMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
