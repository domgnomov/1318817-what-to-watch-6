import React from 'react';
import {Link} from 'react-router-dom';

const NotAvailable = () => {
  return (
    <>
      <div className="user-page">
        <h1>Сервер временно недоступен, попробуйте еще раз</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </>
  );
};

export default NotAvailable;
