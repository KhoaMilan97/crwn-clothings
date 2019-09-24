import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Homepage from "./components/pages/homepages/Homepage";
import ShopPages from "./components/pages/shop/shop";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPages} />
    </div>
  );
}

export default App;
//6.1
