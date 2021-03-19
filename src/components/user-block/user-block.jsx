import React from 'react';
import {AuthorizationStatus} from "../../const/const";
import NoAuthUserBlock from "./no-auth-user-block";
import {useSelector} from "react-redux";
import Avatar from "./avatar";
import PropTypes from "prop-types";

const UserBlock = ({isMain}) => {
  const {authorizationStatus, authInfo} = useSelector((state) => state.AUTH);

  const getBlock = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return <NoAuthUserBlock/>;
    } else if (isMain) {
      return authInfo.email;
    } else {
      return <Avatar img={authInfo.avatarUrl}/>;
    }
  };

  return (
    <>
      {getBlock()}
    </>
  );
};

UserBlock.propTypes = {
  isMain: PropTypes.bool
};

export default UserBlock;
