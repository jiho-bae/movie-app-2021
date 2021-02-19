import React from "react";

function Animal(props) {
  return <h6>I like {props.animal}</h6>;
}
function Food({ fav }) {
  return <h3>I like {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Animal animal="Tiger" />
      <Animal animal="Monkey" />
      <Food fav="Kimchi" />
      <Food fav="Ramyeon" />
      <Food fav="Samgiopsal" />
    </div>
  );
}

export default App;
