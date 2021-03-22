import React from 'react';
import {useDispatch} from "react-redux";
import {setServerError} from "../../store/action";

const NotAvailable = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setServerError(false));
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
