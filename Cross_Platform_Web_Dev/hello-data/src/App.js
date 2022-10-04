import "./App.css";
import HelloComponent from "./components/HelloComponent";
import HelloMaps from "./components/HelloMaps";
import HelloProperties from "./components/HelloProperties";
import HelloState from "./components/HelloState";
import HelloTextState from "./components/HelloTextState";

function App() {
  return (
    <div className="App">
      <HelloComponent></HelloComponent>
      <HelloState></HelloState>
      <HelloProperties person="JJ" greeting="Hello"></HelloProperties>
      <HelloProperties person="Brian" greeting="Ahoy"></HelloProperties>
      <HelloTextState />
      <HelloMaps />
    </div>
  );
}

export default App;
