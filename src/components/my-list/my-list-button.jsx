import React from 'react';

const MyListButton = () => {

  const getButtonContent = () => {
    if (true) {
      return (
        <>
          <svg viewBox="0 0 19 20" width={19} height={20}>
            <use xlinkHref="#add" />
          </svg>
          <span>My list</span>
        </>
      );
    } else {
      return (
        <>
          <svg viewBox="0 0 18 14" width={18} height={14}>
            <use xlinkHref="#in-list" />
          </svg>
          <span>My list</span>
        </>
      );
    }
  };

  return (
    <>
      <button className="btn btn--list movie-card__button " type="button" onClick={(e) => {
        e.preventDefault();
      }}>
        {getButtonContent()}
      </button>
    </>
  );
};

export default MyListButton;
