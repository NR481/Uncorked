import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import UserPage from "./components/UserPage";
import WinesPage from "./components/WinesPage";
import SingleWine from "./components/SingleWine";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <h1>Home Page</h1>
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/users/:id">
            <UserPage />
          </Route>
          <Route exact path='/wines'>
            <WinesPage />
          </Route>
          <Route path='/wines/:id'>
            <SingleWine />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
