import React, {useState} from 'react';
import './App.css';

import Person from "./Person/Person.js";

class App extends React.Component {
   state = {
      people: [
         {name: "Max", age: 28},
         {name: "Manu", age: 29},
         {name: "Stephanie", age: 26}
      ]
   };

   switchNameHandler = () => {
      // console.log("You clicked me!");
      this.setState({
         people: [
            {name: "Maximillian", age: 28},
            {name: "Manu", age: 29},
            {name: "Stephanie", age: 27}
         ]
      });
   };

   render () {
      return (
         <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={this.switchNameHandler}>Switch Name</button>
            <Person 
               name={this.state.people[0].name} 
               age={this.state.people[0].age} 
            />
            <Person 
               name={this.state.people[1].name} 
               age={this.state.people[1].age}
            >My Hobbies: Racing</Person>
            <Person 
               name={this.state.people[2].name} 
               age={this.state.people[2].age} 
            />
         </div>
      );
   }
}

// const App = props => {
//    const [persons, setPersons] = useState([
//       {name: "Max", age: 28},
//       {name: "Manu", age: 29},
//       {name: "Stephanie", age: 26}
//    ]);

//    const switchNameHandler = () => {
//       // console.log("You clicked me!");
//       setPersons([
//          {name: "Maximillian", age: 28},
//          {name: "Manu", age: 29},
//          {name: "Stephanie", age: 27}
//       ]);
//    };

//    return (
//       <div className="App">
//          <h1>Hi, I'm a React App</h1>
//          <p>This is really working!</p>
//          <button onClick={switchNameHandler}>Switch Name</button>
//          <Person name={persons[0].name} age={persons[0].age} />
//          <Person name={persons[1].name} age={persons[1].age}>My Hobbies: Racing</Person>
//          <Person name={persons[2].name} age={persons[2].age} />
//       </div>
//    );
// };

// function App() {
//    return (
//       <div className="App">
//          <h1>Hi, I'm a React App</h1>
//          <p>This is really working!</p>
//          <Person name="Max" age="28" />
//          <Person name="Manu" age="29">My Hobbies: Racing</Person>
//          <Person name="Stephanie" age="26" />
//       </div>
//    );
//    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Hi, I'm a React App :)"));
// }

export default App;
