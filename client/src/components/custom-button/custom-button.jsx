import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const customButton = ({ children, ...otherProps }) => {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default customButton;
