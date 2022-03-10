import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import Detail from "./routes/Detail";
import Wrongpage from "./components/Wrongpage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/movie/:id">
          <Detail />
        </Route>

        <Route path="/:id">
          <Wrongpage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
