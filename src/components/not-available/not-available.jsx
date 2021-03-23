import React from 'react';
import {useDispatch} from "react-redux";
import {setServerError} from "../../store/action";
import {useHistory} from "react-router-dom";
import {AppRoute} from "../../const/const";

const NotAvailable = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setServerError(false));
    history.push(AppRoute.ROOT);
  };

  return (
    <>
      <div className="user-page">
        <h1>Сервер временно недоступен, попробуйте еще раз</h1>
        <a href="#" onClick={handleClick}>Вернуться на главную</a>
      </div>
    </>
  );
};

export default NotAvailable;
