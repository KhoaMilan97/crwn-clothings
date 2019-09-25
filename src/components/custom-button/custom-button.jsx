import React from "react";

import "./custom-button.scss";

const customButton = ({ children, isGooleSignin, ...otherProps }) => (
  <button
    className={`${isGooleSignin ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default customButton;
