import React from "react";

import "./custom-button.scss";

const customButton = ({ children, isGooleSignin, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGooleSignin ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default customButton;
