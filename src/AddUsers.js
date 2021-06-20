import React, { useState } from "react";
import Card from "./Ui/Card";
import Button from "./Ui/Button";
import "./AddUsers.css";
import InputHolder from "./Ui/InputHolder";
import axios from "axios";
import useInput from "./hooks/use_Input";

const isNotEmpty = (value) => value.trim() !== "";

const AddUserForm = (props) => {
  const [toast, setToast] = useState(false);
  const [addingData, setAddingData] = useState(false);

  // const initialFormState = {
  //   name: "",
  //   lname: "",
  //   age: "",
  //   maths: "",
  //   sci: "",
  // };
  // const [user, setUser] = useState(initialFormState);

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: ageValue,
    isValid: ageIsValid,
    hasError: ageHasError,
    valueChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput(isNotEmpty);

  const {
    value: mathsValue,
    isValid: mathsIsValid,
    hasError: mathsHasError,
    valueChangeHandler: mathsChangeHandler,
    inputBlurHandler: mathsBlurHandler,
    reset: resetMaths,
  } = useInput(isNotEmpty);

  const {
    value: scienceValue,
    isValid: scienceIsValid,
    hasError: scienceHasError,
    valueChangeHandler: scienceChangeHandler,
    inputBlurHandler: scienceBlurHandler,
    reset: resetScience,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    ageIsValid &&
    mathsIsValid &&
    scienceIsValid
  ) {
    formIsValid = true;
  }

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;

  //   setUser({ ...user, [name]: value });
  // };

  const addUserCall = async (user) => {
    setAddingData(true);
    // console.log(user);
    await axios
      .post("firebas url", user)
      .then((res) => {
        setAddingData(false);
        setToast(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const submithandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      // setHelperText(true);
      return;
    }
    const user = {
      id: Math.random().toString(),
      name: firstNameValue,
      lname: lastNameValue,
      age: ageValue,
      maths: mathsValue,
      sci: scienceValue,
    };

    addUserCall(user);
    props.addUser(user);
    resetFirstName();
    resetLastName();
    resetAge();
    resetMaths();
    resetScience();
    setTimeout(() => {
      setToast(false);
    }, 3000);
  };

  return (
    <>
      <Card>
        <h2>Add User</h2>
        <form onSubmit={submithandler}>
          <div>
            <InputHolder
              label="Name"
              type="text"
              name="name"
              onChange={firstNameChangeHandler}
              value={firstNameValue}
              onBlur={firstNameBlurHandler}
              // required
            />{" "}
            {firstNameHasError && (
              <p className="error-text">Please enter a first name.</p>
            )}
          </div>
          <div>
            <InputHolder
              label="Last Name"
              type="text"
              name="lname"
              onChange={lastNameChangeHandler}
              value={lastNameValue}
              onBlur={lastNameBlurHandler}
              // required
            />{" "}
            {lastNameHasError && (
              <p className="error-text">Please enter a last name.</p>
            )}
          </div>
          <div className="other_field_container">
            <InputHolder
              label="Age"
              type="number"
              name="age"
              onChange={ageChangeHandler}
              value={ageValue}
              onBlur={ageBlurHandler}
            />
            {ageHasError && <p className="error-text">Please enter a age.</p>}
          </div>
          <div className="other_field_container">
            <InputHolder
              label="Maths"
              type="number"
              name="maths"
              onChange={mathsChangeHandler}
              value={mathsValue}
              onBlur={mathsBlurHandler}
            />
            {mathsHasError && (
              <p className="error-text">Please enter maths marks.</p>
            )}
          </div>
          <div className="other_field_container">
            <InputHolder
              label="Science"
              type="number"
              name="sci"
              onChange={scienceChangeHandler}
              value={scienceValue}
              onBlur={scienceBlurHandler}
            />
            {scienceHasError && (
              <p className="error-text">Please enter science marks.</p>
            )}
          </div>
          <Button type="submit">Add User </Button>
        </form>
      </Card>
      {addingData && (
        <div className="toats adding">
          <p>
            Wait... <br />
            Adding data
          </p>
        </div>
      )}
      {toast && !addingData && <div className="toats">Data Added</div>}
    </>
  );
};

export default AddUserForm;
