import React from "react";

import "./form-input.scss";

const formInput = ({ handleChange, label, ...otherInputProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...otherInputProps}
    />
    <label
      className={`${
        otherInputProps.value.length ? "shrink" : ""
      } form-input-label`}
    >
      {label}
    </label>
  </div>
);

export default formInput;
