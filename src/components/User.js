import React from "react";
import { useState, useContext } from "react";
const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : Lucknow</h3>
      <h3>Count : {count}</h3>
      <h3>Count2 : {count2}</h3>
      <h4>Contact: mrisham_js</h4>
    </div>
  );
};

export default User;
