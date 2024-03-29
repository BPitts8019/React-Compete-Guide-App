import React from "react";

const Person = props => {
   return (
      <div>
         <p>I'm {props.name} and I am {props.age} years old!</p>
         {(props.children)? <p>{props.children}</p> : null}
      </div>
   );
};

export default Person;