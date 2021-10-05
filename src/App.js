import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Congratulations from "./containers/Congratulations";
import Vehicle from "./containers/Vehicle";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Vehicle} />
      <Route path="/congratulations" component={Congratulations} />
    </BrowserRouter>
  );
};

export default App;
