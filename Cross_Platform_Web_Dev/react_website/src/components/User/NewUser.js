import "./NewUser.css";
import UserForm from "./UserForm";

const NewUser = (props) => {
  const saveUserDataHandler = (userDataInput) => {
    const userData = {
      ...userDataInput,
      id: Math.random().toString(),
    };

    props.onNewUser(userData);
    // console.log(userData);
  };
  return (
    <div className="new-user">
      <UserForm onAddUser={saveUserDataHandler} />
    </div>
  );
};

export default NewUser;
