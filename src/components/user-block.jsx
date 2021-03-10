import React from 'react';
import {AuthorizationStatus} from "../const";
import NoAuthUserBlock from "./sign-in/no-auth-user-block";
import {useSelector} from "react-redux";
import Avatar from "./avatar/avatar";

const UserBlock = ({isMain}) => {
  const {authorizationStatus, authInfo} = useSelector((state) => state.AUTH);

  const getBlock = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return <NoAuthUserBlock/>;
    } else if (isMain) {
      return authInfo.email;
    } else {
      return <Avatar/>;
    }
  };

  return (
    <>
      {getBlock()}
    </>
  );
};


export default UserBlock;
