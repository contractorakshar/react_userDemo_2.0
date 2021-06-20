import React from "react";
import Card from "../Ui/Card";
import "./UserTable.css";
const UserTable = (props) => {
  // const [search, setSeacrh] = useState("");

  // const sortingArray = () => {
  //   let obj = props.users.sort((a, b) => {
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   props.arraySorting(obj);
  // };

  // useEffect(() => {
  //   setToggle(true);
  // }, [Toggle]);

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
          <h2>View Users</h2>
          <input
            type="search"
            placeholder="Search here"
            style={{ width: "100%", height: "2rem", fontSize: "1rem" }}
            // onChange={(e) => {
            //   setSeacrh(e.target.value);
            // }}
          />
          <table>
            <thead>
              <tr>
                {/* <th onClick={sortingArray}>Name</th> */}
                <th>Name</th>
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
                  <tr key={Math.random().toString()}>
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
                        className="Editbutton"
                      >
                        Edit
                      </button>
                      {"   "}
                      <button
                        onClick={() => props.deleteUser(user.id)}
                        className="Delbutton"
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
