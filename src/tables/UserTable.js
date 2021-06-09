import React from "react";
import Card from "../Ui/Card";
import "./UserTable.css";
const UserTable = (props) => {
  console.log(props.users);
  const sortingArray = () => {
    let obj = props.users.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    props.arraySorting(obj);
  };

  // const searchHandler = (event) => {
  // let obj = props.users.find((o) => o.name === event.target.value);
  // let obj = props.users.filter((obj) => obj.name === event.target.value);
  // if (obj !== undefined) {
  //   props.arraySorting(obj);
  // }
  // };
  return (
    <>
      {props.users.length > 0 && (
        <Card>
          <h2>View users</h2>
          {/* <input type="search" placeholder="Search here" onChange={searchHandler} /> */}
          <table>
            <thead>
              <tr>
                <th onClick={sortingArray}>Name</th>
                <th>Last name</th>
                <th>Age</th>
                <th>Maths</th>
                <th>Sciennce</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.users.length > 0 ? (
                props.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.lname}</td>
                    <td>{user.age}</td>
                    <td>{user.maths}</td>
                    <td>{user.sci}</td>
                    <td>
                      <button
                        onClick={() => {
                          props.editRow(user);
                        }}
                        className="button muted-button"
                      >
                        Edit
                      </button>{" "}
                      |{" "}
                      <button
                        onClick={() => props.deleteUser(user.id)}
                        className="button muted-button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>No users</td>
                </tr>
              )}
            </tbody>
          </table>
        </Card>
      )}
    </>
  );
};

export default UserTable;
