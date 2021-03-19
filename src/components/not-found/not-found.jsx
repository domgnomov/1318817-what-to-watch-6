import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="user-page">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </>
  );
};

export default NotFound;
