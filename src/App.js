import React, { useCallback, useEffect, useState } from "react";
import AddUserForm from "./AddUsers";
import UserTable from "./tables/UserTable";
import EditUserForm from "./EditUser";
import "./App.css";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [editing, setEditing] = useState(false);
  const getUsers = useCallback(async () => {
    await axios
      .get("https://react-http-8f407-default-rtdb.firebaseio.com/users.json")
      .then((res) => {
        const usersData = [];

        for (const key in res.data) {
          usersData.push({
            id: key,
            name: res.data[key].name,
            lname: res.data[key].lname,
            age: res.data[key].age,
            maths: res.data[key].maths,
            sci: res.data[key].sci,
          });
        }
        setUsers(usersData);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  // const usersData = [
  // { id: 1, name: "ak", lname: "con", age: "25", maths: "50", sci: "50" },
  // ];
  // const initialState = {
  //   id: null,
  //   name: "",
  //   lname: "",
  //   age: "",
  //   maths: "",
  //   sci: "",
  // };

  // useEffect(() => {
  //   return <UserTable users={users} />;
  // }, [users]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    axios
      .delete(
        `https://react-http-8f407-default-rtdb.firebaseio.com/users/${id}.json`
      )
      .catch((e) => {
        alert(e);
      });
  };

  const arraySorting = (obj) => {
    // console.log(obj);
    setUsers(obj);
    // setUsers((prev) => {
    //   return [...prev, obj];
    // });
    // setUsers(obj);
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

    axios
      .put(
        `https://react-http-8f407-default-rtdb.firebaseio.com/users/${id}.json`,
        updatedUser
      )
      .then(() => {
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <>
      <div className="App">
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
