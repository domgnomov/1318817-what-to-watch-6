import React from 'react';
import {useHistory} from "react-router-dom";

const Logo = () => {
  const history = useHistory();

  return (
    <>
      <div className="logo">
        <a href="" className="logo__link" onClick={(e) => {
          history.push(`/`);
          e.preventDefault();
        }}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
    </>
  );
};


export default Logo;
