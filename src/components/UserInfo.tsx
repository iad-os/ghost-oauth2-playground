import { useAuthentication } from "@iad-os/react-ghost-auth";
import React from "react";

const UserInfo: React.FunctionComponent = () => {
  const { userInfo } = useAuthentication();
  return <div>{JSON.stringify(userInfo())}</div>;
};

export default UserInfo;
