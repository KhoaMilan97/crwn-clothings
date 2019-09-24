import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Homepage from "./components/pages/homepages/Homepage";
import ShopPages from "./components/pages/shop/shop";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/shop" component={ShopPages} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
//6.1
