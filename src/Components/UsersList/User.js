import React from "react";
import Card from "../UI/Card";
const User = (props) => {
  return (
    <Card>
      <li>
        {props.name} {props.age}
      </li>
    </Card>
  );
};

export default User;
