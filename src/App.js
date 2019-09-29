import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Homepage from "./components/pages/homepages/Homepage";
import ShopPages from "./components/pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocumnet } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unscribeFromAuth = null;

  componentDidMount() {
    this.unscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocumnet(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
          console.log(this.state);
        });
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
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
//7.12
