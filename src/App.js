import React, { useState } from "react";
import AddUserForm from "./AddUsers";
import UserTable from "./tables/UserTable";
import EditUserForm from "./EditUser";
import "./App.css";
const App = () => {
  const usersData = [
    { id: 1, name: "ak", lname: "con", age: "25", maths: "50", sci: "50" },
  ];
  const initialState = {
    id: null,
    name: "",
    lname: "",
    age: "",
    maths: "",
    sci: "",
  };

  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialState);
  const [editing, setEditing] = useState(false);
  // useEffect(() => {
  //   return <UserTable users={users} />;
  // }, [users]);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const arraySorting = (obj) => {
    setUsers(obj);
    // console.log(users);
    console.log(obj, users);
  };
  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      lname: user.lname,
      age: user.age,
      maths: user.maths,
      sci: user.sci,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    // setUsers(updateUser);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <>
      <div className="App">
        <h1>User task</h1>

        {editing ? (
          <EditUserForm
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        ) : (
          <AddUserForm addUser={addUser} />
        )}

        <UserTable
          users={users}
          deleteUser={deleteUser}
          editRow={editRow}
          arraySorting={arraySorting}
        />
      </div>
    </>
  );
};

export default App;
