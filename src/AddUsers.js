import React, { useState } from "react";
import Card from "./Ui/Card";
import Button from "./Ui/Button";
import "./AddUsers.css";
import InputHolder from "./Ui/InputHolder";
import axios from "axios";
const AddUserForm = (props) => {
  const initialFormState = {
    name: "",
    lname: "",
    age: "",
    maths: "",
    sci: "",
  };
  const [user, setUser] = useState(initialFormState);
  // const [errorText, setError] = useState(false);

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const submithandler = (event) => {
    event.preventDefault();
    if (!user.name || !user.lname || !user.age || !user.maths || !user.sci) {
      return;
    }

    axios
      .post(
        "https://react-http-8f407-default-rtdb.firebaseio.com//users.json",
        user
      )
      .catch((e) => {
        console.log(e);
      });
    props.addUser(user);
    setUser(initialFormState);
  };
  return (
    <Card>
      <h2>Add User</h2>
      <form onSubmit={submithandler}>
        {/* <span style={{ color: "red" }}>{errorText.Record}</span> */}
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
