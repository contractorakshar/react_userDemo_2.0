import React, { useState, useEffect } from "react";
import Button from "./Ui/Button";
import Card from "./Ui/Card";
import "./EditUser.css";
import "./AddUsers.css";
import InputHolder from "./Ui/InputHolder";
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
        <InputHolder
          label="Name"
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <InputHolder
          label="Last Name"
          type="text"
          name="lname"
          value={user.lname}
          onChange={handleInputChange}
        />
        <div className="other_field_container">
          <InputHolder
            label="Age"
            type="number"
            name="age"
            value={user.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="other_field_container">
          <InputHolder
            label="Maths"
            type="number"
            name="maths"
            value={user.maths}
            onChange={handleInputChange}
          />
        </div>
        <div className="other_field_container">
          <InputHolder
            label="Science"
            type="number"
            name="sci"
            value={user.sci}
            onChange={handleInputChange}
          />
        </div>
        <Button type="submit ">Update User</Button>
        <button className="btnCancle" onClick={() => props.setEditing(false)}>
          Cancel
        </button>
      </form>
    </Card>
  );
};
export default EditUserForm;
