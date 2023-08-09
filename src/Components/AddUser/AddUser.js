import React, { useState } from "react";
import Button from "../UI/Button";
import Alert from "../Alert/Alert"; // Update the path if necessary
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const NameChangeHandler = (event) => {
    const newValue = event.target.value;
    setEnteredName(newValue);
  };

  const AgeChangeHandler = (event) => {
    const newValue = event.target.value;
    setEnteredAge(newValue);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredName === "" && enteredAge === "") {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
    }

    const newUser = { name: enteredName, age: enteredAge };
    props.addUser(newUser);
    setEnteredName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Card className={classes.input}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={addUserHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={NameChangeHandler}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={enteredAge}
              onChange={AgeChangeHandler}
            />
          </p>
        </div>

        <p className="actions">
          <Button type="submit">Add User</Button>
        </p>
      </form>
    </Card>
  );
};

export default AddUser;
