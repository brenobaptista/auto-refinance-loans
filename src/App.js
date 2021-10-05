import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Congratulations from "./containers/Congratulations";
import Offers from "./containers/Offers";
import Vehicles from "./containers/Vehicles";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Vehicles} />
      <Route path="/offers/:vehicleId" component={Offers} />
      <Route path="/congratulations" component={Congratulations} />
    </BrowserRouter>
  );
};

export default App;
