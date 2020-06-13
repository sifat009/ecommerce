import React, { Fragment } from "react";
import getNewId from "../../utils/newId";

function InputField({ label, id, handleChange, ...restParams }) {
  let uniqueId;

  if (label) {
    uniqueId = id ? id : getNewId();
  }

  return (
    <Fragment>
      <input {...restParams} id={uniqueId} onChange={handleChange} />
      {label && <label htmlFor={uniqueId}>{label}</label>}
    </Fragment>
  );
}

export default InputField;
