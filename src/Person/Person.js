import React from "react";
import "./Person.css";

const Person = props => {
   return (
      <div className="Person">
         <p>I'm {props.name} and I am {props.age} years old!</p>
         {(props.children)? <p>{props.children}</p> : null}
      </div>
   );
};

export default Person;