import React from "react";

const Button = () => {
  const [click, setClick] = React.useState(0)
  return (<>
  <button onClick={() => setClick(click+1)}>This is the react button with count {click}</button>
  </>)
};
export default Button;
