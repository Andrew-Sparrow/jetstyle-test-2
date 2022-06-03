import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const NewItemButton = () => {
  return (
    <Link to={AppRoute.ADD}>
      <button className="press-button">Add New Book</button>
    </Link>
  );
};

export default NewItemButton;
