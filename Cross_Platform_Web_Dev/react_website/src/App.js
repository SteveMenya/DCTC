import NewUser from "./components/User/NewUser";

function App() {
  const newUserHandler = (newUserData) => {
    console.log("in app.js");
    console.log(newUserData);
  };
  return (
    <div className="App">
      <NewUser onNewUser={newUserHandler} />
    </div>
  );
}

export default App;
