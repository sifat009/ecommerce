import React from "react";

function ButtonField({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export default ButtonField;
