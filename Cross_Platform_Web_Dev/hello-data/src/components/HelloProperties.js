// function HelloProperties(props) {
//   return (
//     <div>
//       {props.greeting} {props.person}
//     </div>
//   );
// }

function HelloProperties({greeting, person}) {
  return (
    <div>
      {greeting} {person}
    </div>
  );
}

export default HelloProperties;
