import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import Homepage from "./pages/homepages/Homepage";
import ShopPages from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Checkouts from "./pages/checkout/checkout";

import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unscribeFromAuth = null;

  componentDidMount() {
    // this.unscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocumnet(userAuth);
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data()
    //       });
    //     });
    //   } else {
    //     setCurrentUser(userAuth);
    //     // addCollectionAndDocumnet(
    //     //   "collection",
    //     //   collectionsArray.map(({ title, items }) => ({ title, items }))
    //     // );
    //   }
    // });
  }

  componentWillUnmount() {
    this.unscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/shop" component={ShopPages} />
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
  // collectionsArray: selectShopColletionOverview
});

export default connect(mapStateToProps)(App);

//20.11
