import React from "react";

import { GroupContainer, FormInput, FormInputLabel } from "./form-input.styles";

const formInput = ({ handleChange, label, ...otherInputProps }) => (
  <GroupContainer>
    <FormInput onChange={handleChange} {...otherInputProps} />
    <FormInputLabel
      className={`${otherInputProps.value.length ? "shrink" : ""}`}
    >
      {label}
    </FormInputLabel>
  </GroupContainer>
);

export default formInput;
