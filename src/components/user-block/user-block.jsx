import React from 'react';
import {AuthorizationStatus} from "../../const/const";
import NoAuthUserBlock from "./no-auth-user-block";
import {useSelector} from "react-redux";
import Avatar from "./avatar";

const UserBlock = () => {
  const {authorizationStatus, authInfo} = useSelector((state) => state.AUTH);

  const getBlock = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return <NoAuthUserBlock/>;
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

export default UserBlock;
