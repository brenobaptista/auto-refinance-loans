import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Vehicle from "./containers/Vehicle";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Vehicle} />
    </BrowserRouter>
  );
};

export default App;
