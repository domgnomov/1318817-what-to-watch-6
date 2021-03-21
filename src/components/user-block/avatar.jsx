import React from 'react';
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {AppRoute} from "../../const/const";

const Avatar = ({img}) => {
  const history = useHistory();

  return (
    <>
      <div className="user-block__avatar">
        <img src={img} alt="User avatar" width="63" height="63" onClick={(e) => {
          history.push(AppRoute.MY_LIST);
          e.preventDefault();
        }}/>
      </div>
    </>
  );
};

Avatar.propTypes = {
  img: PropTypes.string.isRequired
};

export default Avatar;
