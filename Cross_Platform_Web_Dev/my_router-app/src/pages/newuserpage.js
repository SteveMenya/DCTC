import UserForm from "../components/UserForm";
import './newuserpage.css'

const NewUser = (props) => {
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


export default NewUser;