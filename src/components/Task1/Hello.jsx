import * as React from "react";

const Hello = ({ title, time }) => (
  <>
    <h1>Hello {title}</h1>
    <sub>This is the functional example with a counter: {time}</sub>
  </>
);

export default Hello;
