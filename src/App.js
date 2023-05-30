import React, { useState } from "react";
// import "./App.css";// always remove app.css
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

const App = () => {
  const [userData, setUserData] = useState([]);

  const userDetailHandler = (Uname, Uage) => {
    setUserData((prevState) => {
      return [
        ...prevState,
        { name: Uname, age: Uage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={userDetailHandler} />
      <UserList users={userData} />
    </div>
  );
};

export default App;
