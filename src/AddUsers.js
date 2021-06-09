import React, { useState } from "react";
import Card from "./Ui/Card";
import Button from "./Ui/Button";
import "./AddUsers.css";
import InputHolder from "./Ui/InputHolder";
const AddUserForm = (props) => {
  const initialFormState = {
    id: null,
    name: "",
    lname: "",
    age: "",
    maths: "",
    sci: "",
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <Card>
      <h2>Add User</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (
            !user.name ||
            !user.lname ||
            !user.age ||
            !user.maths ||
            !user.sci
          )
            return;

          props.addUser(user);
          setUser(initialFormState);
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
        {/* <label>last name</label>
        <input
          type="text"
          name="lname"
          value={user.lname}
          onChange={handleInputChange}
        /> */}
        {/* <label>Age</label>
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleInputChange}
        /> */}
        <div className="other_field_container">
          <InputHolder
            label="Age"
            type="number"
            name="age"
            value={user.age}
            onChange={handleInputChange}
          />
        </div>
        {/* <label>Maths</label>
        <input
          type="number"
          name="maths"
          value={user.maths}
          onChange={handleInputChange}
        />
        <label>Science</label>
        <input
          type="number"
          name="sci"
          value={user.sci}
          onChange={handleInputChange}
        /> */}
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
        {/* <label>Name</label>
<input
  type="text"
  name="name"
  value={user.name}
  onChange={handleInputChange}
/> */}
        <Button type="submit">Add User </Button>
      </form>
    </Card>
  );
};

export default AddUserForm;
