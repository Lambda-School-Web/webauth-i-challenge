import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Components/Login";
import Users from "./Components/Users";
import Register from "./Components/Register";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <h1>Webauth I Challenge</h1>
      <BrowserRouter>
        <PrivateRoute exact path="/" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
