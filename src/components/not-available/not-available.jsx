import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setServerError} from "../../store/action";

const NotAvailable = () => {
  const dispatch = useDispatch();
  dispatch(setServerError(false));
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
