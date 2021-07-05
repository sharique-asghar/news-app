import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter basename="/">
      <ToastContainer autoClose={3000} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
