import React from 'react';

const NoAuthUserBlock = (props) => {
  const {history} = props;

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
