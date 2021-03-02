import React from 'react';
import {useHistory} from "react-router-dom";

const NoAuthUserBlock = () => {
  const history = useHistory();

  return (
    <>
      <a href="" className="user-block__link" onClick={(e) => {
        e.preventDefault();
        history.push(`/login`);
      }}>Sign in
      </a>
    </>
  );
};

export default NoAuthUserBlock;
