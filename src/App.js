import "./App.css";
import React, { useState } from "react";
import AddUser from "./Components/AddUser/AddUser";
import UserList from "./Components/UsersList/UserList";
function App() {
  const initialUsers = [
    { name: "mahdi", age: "22" },
    { name: "amine", age: "27" },
  ];
  const [users, setUsers] = useState(initialUsers);

  const AddUserHandler = (user) => {
    setUsers((prevUsersList) => {
      return [...prevUsersList, user];
    });
  };
  return (
    <div>
      <AddUser addUser={AddUserHandler}></AddUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
