import React from "react";
function Submit(props) {
  console.log(props.class);
  return (
    <input
      type={props.type}
      value={props.value}
      className={props.class}
    ></input>
  );
}
export default Submit;
