import React, { useState , useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Wrapper from "../Helper/Wrapper";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();



  // using ref to reset the values of name and age.
  // const [enteredname, setEnteredName] = useState("");
  // const [enteredage, setEnteredAge] = useState("");
  // const [enterdcollege , setEnterCollege] = useState("");
  const [error, setError] = useState();

  // const nameChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
   // const collegeChangeHandler = (event) => {
    //   setEnteredCollege(event.target.value);
    // };

  const adduserHandler = (event) => {
    event.preventDefault();
    const enterUserName = nameInputRef.current.value;
    const enterUserAge = ageInputRef.current.value;
    const enterUserCollege = collegeInputRef.current.value;
    if (enterUserName.trim().length === 0 || enterUserAge.trim().length === 0 || enterUserCollege.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter the valid name , age and college name (non - empty values)",
      });
      return;
    }
    if (+enterUserAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter valid age (age > 0)",
      });
      return;
    }
   
    props.onAddUser(enterUserName, enterUserAge ,enterUserCollege);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collegeInputRef.current.value = '';
    // setEnteredAge("");
    // setEnteredName("");
    // setEnteredCollege("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            // value={enteredname}
            // onChange={nameChangeHandler}
            ref={nameInputRef}
          ></input>

          <label htmlFor="age">Age(years)</label>
          <input
            id="age"
            type="number"
            // value={enteredage}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <label htmlFor="college">College Name</label>
          <input
            id="college"
            type="text"
            // value={enteredcollege}
            // onChange={collegeChangeHandler}
            ref={collegeInputRef}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
