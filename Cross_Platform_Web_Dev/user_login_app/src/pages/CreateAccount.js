import UserForm from "../components/UserForm";
import "./CreateAccount.css";

const CreateAccount = (props) => {
  const saveUserDataHandler = (userDataInput) => {
    const userData = {
      ...userDataInput,
    };

    props.onNewUser(userData);
  };

  return (
    <div className="new-user">
      <UserForm onAddUser={saveUserDataHandler} />
    </div>
  );
};

export default CreateAccount;
