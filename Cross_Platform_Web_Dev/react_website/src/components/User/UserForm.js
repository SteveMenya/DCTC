import { useState } from "react";
import "./UserForm.css";
const UserForm = (props) => {
  const [enteredFirstName, setFirstName] = useState("");
  const [enteredLastName, setLastName] = useState("");
  const [enteredEmail, setEmail] = useState("");

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangedHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailChangedHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      f_name: enteredFirstName,
      l_name: enteredLastName,
      email: enteredEmail,
    };

    props.onAddUser(userData);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-user__infos">
        <div className="new-user__info">
          <label>First Name</label>
          <input
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            type="text"
          ></input>
        </div>
        <div className="new-user__info">
          <label>Last Name</label>
          <input
            value={enteredLastName}
            onChange={lastNameChangedHandler}
            type="text"
          ></input>
        </div>
        <div className="new-user__info">
          <label>Email</label>
          <input
            value={enteredEmail}
            onChange={emailChangedHandler}
            type="email"
          ></input>
        </div>
        <div className="new-user__add">
          <button type="submit">Add User</button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
