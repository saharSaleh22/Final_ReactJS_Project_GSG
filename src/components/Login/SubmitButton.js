import React from "react";
function Submit(props) {
  return (
    <button
      type={props.type}
      value={props.value}
      className={props.class}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
export default Submit;
