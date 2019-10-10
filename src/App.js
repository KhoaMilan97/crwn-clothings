import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import Homepage from "./components/pages/homepages/Homepage";
import ShopPages from "./components/pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Checkouts from "./components/pages/checkout/checkout";

import { auth, createUserProfileDocumnet } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocumnet(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
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
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/checkout" component={Checkouts} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
//8.28
