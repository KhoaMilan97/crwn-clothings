import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Homepage from "./components/pages/homepages/Homepage";

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
//5.1
