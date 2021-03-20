import React from 'react';
import {useHistory} from "react-router-dom";
import {AppRoute} from "../../const/const";

const NoAuthUserBlock = () => {
  const history = useHistory();

  return (
    <>
      <a href="" className="user-block__link" onClick={(e) => {
        e.preventDefault();
        history.push(AppRoute.LOGIN);
      }}>Sign in
      </a>
    </>
  );
};

export default NoAuthUserBlock;
