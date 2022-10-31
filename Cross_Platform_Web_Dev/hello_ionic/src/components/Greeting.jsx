import "./Greeting.css";

export default function Greeting(props) {
  return (
    <div className="greeting">
      <h1>Greetings {props.firstName} {props.lastName}</h1>
    </div>
  );
}
