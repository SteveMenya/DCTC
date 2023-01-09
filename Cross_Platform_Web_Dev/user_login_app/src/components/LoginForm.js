import { useState } from "react";
import APIService from "./APIService";
import "./LoginForm.css";
const LoginForm = () => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userInput = {
      email: enteredEmail,
      password: enteredPassword,
    };

    APIService(userInput)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    console.log(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="user-login__infos">
        <div className="user-login__info">
          <label> Email </label>{" "}
          <input
            value={enteredEmail}
            onChange={emailChangeHandler}
            type="email"
            placeholder="email"
          ></input>{" "}
        </div>{" "}
        <div className="user-login__info">
          <label> Password </label>{" "}
          <input
            value={enteredPassword}
            onChange={passwordChangeHandler}
            type="password"
            placeholder="Password"
          ></input>{" "}
        </div>{" "}
        <div className="user_login">
          <button type="submit"> Login </button>{" "}
        </div>{" "}
      </div>{" "}
    </form>
  );
};
export default LoginForm;
