import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Homepage from "./components/pages/homepages/Homepage";
import ShopPages from "./components/pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocumnet } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unscribeFromAuth = null;

  componentDidMount() {
    const { currentUser } = this.props;
    this.unscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocumnet(userAuth);

        userRef.onSnapshot(snapshot => {
          currentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        currentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/shop" component={ShopPages} />
          <Route exact path="/signin" component={SignInAndSignUp} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

const mapDisptachToProps = dispatch => ({
  currentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDisptachToProps
)(App);
//8.7
