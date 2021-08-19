import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { WelcomePage, QuestionCurrentPage, Leaderboard, HeadingNavBar } from "./pages";

import "./styles/app.css";

function App() {
  return (
    <>
      <HeadingNavBar />
      <Switch>
        <Route exact path='/'>
          <WelcomePage />
        </Route>
        <Route exact path='/QuestionPage'>
          <QuestionCurrentPage />
        </Route>
        <Route exact path='/Leaderboard'>
          <Leaderboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
