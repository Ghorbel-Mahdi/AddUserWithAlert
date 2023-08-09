import React from "react";
import "./UserList.css";
import User from "./User";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      {props.users.map((user) => (
        <User name={user.name} age={user.age}></User>
      ))}
    </Card>
  );
};

export default UserList;
