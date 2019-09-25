import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Homepage from "./components/pages/homepages/Homepage";
import ShopPages from "./components/pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unscribeFromAuth = null;

  componentDidMount() {
    this.unscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/shop" component={ShopPages} />
          <Route exact path="/signin" component={SignInAndSignUp} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
//6.8
