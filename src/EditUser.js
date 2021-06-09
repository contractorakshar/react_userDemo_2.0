import React, { useState, useEffect } from "react";
import Button from "./Ui/Button";
import Card from "./Ui/Card";
import "./EditUser.css";
const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <Card>
      <h2>Edit user</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          props.updateUser(user.id, user);
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <label>last name</label>
        <input
          type="text"
          name="lname"
          value={user.lname}
          onChange={handleInputChange}
        />
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleInputChange}
        />
        <label>Maths</label>
        <input
          type="number"
          name="maths"
          value={user.maths}
          onChange={handleInputChange}
        />
        <label>Sci</label>
        <input
          type="number"
          name="sci"
          value={user.sci}
          onChange={handleInputChange}
        />
        <Button type="submit ">Update User</Button>
        <button className="btnCancle" onClick={() => props.setEditing(false)}>
          Cancel
        </button>
      </form>
    </Card>
  );
};
export default EditUserForm;
