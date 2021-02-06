import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <div className="user-page">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </Fragment>
  );
};

export default NotFound;
