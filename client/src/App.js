import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter basename="/">
      <ToastContainer autoClose={3000} />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
