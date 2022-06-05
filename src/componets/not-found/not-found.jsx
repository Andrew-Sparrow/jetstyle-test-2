import React from 'react';
import withLayout from '../hocs/with-layout';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound() {
  return (
    <div style={{margin: 'auto', width: '200px'}}>
      <h1 style={{textAlign: 'center'}}>404</h1>
      <h2 className="not-found" >Page Not Found</h2>
      <Link className="not-found__link" to={AppRoute.MAIN}>Return to main page</Link>
    </div>
  );
}

const withLayoutNotFound = withLayout(NotFound);
export default withLayoutNotFound;
