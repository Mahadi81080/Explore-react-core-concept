import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actore from "./Actore";
import Singer from "./Singer";

function App() {
  const actors = ["Sakib", "Raj", "Jasim", "Rubel"];
  const singers = [
    { name: "Kamal", age: 38 },
    { name: "Jamal", age: 42 },
    { name: "Runa", age: 22 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      {/* <Actore name='Bappa Raz'></Actore> */}
      {/* {
        actors.map(actor=> <Actore name={actor}></Actore>)
      } */}

      {/* <Todo task='Learn React' isDone={false}></Todo>
      <Todo task='Explore core concepts' isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55000"></Device>
      <Device name="Mobile" price="15000"></Device>
      <Device name="Watch" price="5000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="5" score="92"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}
function Device(props) {
  return (
    <h2>
      This is Device:{props.name} price:{props.price}
    </h2>
  );
}
function Person() {
  const age = 20;
  const money = 20;
  const person = { name: "sakib", age: 20 };
  return (
    <h3>
      I am a {person.name} with age:{age}
    </h3>
  );
}

const { grade, score } = { grade: "7", score: "99" };
function Student({ grade = 1, score = 0 }) {
  return (
    <div className="student">
      <h3>I am a student</h3>
      <p>I am in class Diploma last semester</p>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  const DeveloperStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={DeveloperStyle}>
      <h3>Devo devo</h3>
      <p>Coading:</p>
    </div>
  );
}
export default App;
