import React from "react";
import getNewId from "../../utils/newId";

function InputField({ label, id, handleChange, ...restParams }) {
  let uniqueId;

  if (label) {
    uniqueId = id ? id : getNewId();
  }

  return (
    <div className="input-wrapper">
      {label && (
        <label
          htmlFor={uniqueId}
          className={`${restParams.value.length > 0 ? "active" : ""}`}
        >
          {label}
        </label>
      )}
      <input {...restParams} id={uniqueId} onChange={handleChange} />
    </div>
  );
}

export default InputField;
