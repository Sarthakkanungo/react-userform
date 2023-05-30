import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredname, setEnteredName] = useState("");
  const [enteredage, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const adduserHandler = (event) => {
    event.preventDefault();
    if (enteredname.trim().length === 0 || enteredage.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter the valid name and age (non - empty values)",
      });
      return;
    }
    if (+enteredage < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter valid age (age > 0)",
      });
      return;
    }
    props.onAddUser(enteredname, enteredage);

    setEnteredAge("");
    setEnteredName("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={adduserHandler}>
           <label htmlFor="username">UserName</label>  
          <input
            id="username"
            type="text"
            value={enteredname}
            onChange={nameChangeHandler}
          ></input>

          <label htmlFor="age">Age(years)</label>
          <input
            id="age"
            type="number"
            value={enteredage}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
