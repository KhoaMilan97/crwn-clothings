import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { SignInContainer, SignInTitle, SignInButton } from "./sign-in.styles";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    const { email, password } = this.state;
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: "",
        password: ""
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <SignInButton>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGooleSignin>
              Sign in with Google
            </CustomButton>
          </SignInButton>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
