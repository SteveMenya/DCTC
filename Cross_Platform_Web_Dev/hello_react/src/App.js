import "./App.css";
import MyFooter from "./components/MyFooter";
import MyMenu from "./components/MyMenu";
import { Person, Places } from "./components/People";

function MyReactComponent() {
  return <h1>My first react component</h1>;
}

function App() {
  return (
    <div>
      <MyFooter></MyFooter>
      <MyMenu></MyMenu>
      <Person></Person>
      <Places></Places>
      <h1>Hello World!</h1>
      <p>Hello react components</p>
      <MyReactComponent></MyReactComponent>
    </div>
  );
}

export default App;
