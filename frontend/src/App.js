import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import UserPage from "./components/UserPage";
import WinesPage from "./components/WinesPage";
import SingleWine from "./components/SingleWine";
import SingleCheckinPage from "./components/SingleCheckinPage";
import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";

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
            <HomePage />
          </Route>
          <Route exact path="/users/:id">
            <UserPage />
          </Route>
          <Route path="/user/:id/profile">
            <UserProfile />
          </Route>
          <Route exact path='/wines'>
            <WinesPage isLoaded={isLoaded}/>
          </Route>
          <Route path='/wines/:id'>
            <SingleWine />
          </Route>
          <Route path='/checkins/:id'>
            <SingleCheckinPage />
          </Route>
          <Route>
            Page Not Found
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
