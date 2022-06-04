import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import { Header } from "./layout";
import { QuestionPage, WelcomePage, QuestionCurrentPage } from "./pages";
import "./styles/app.css";

function App() {
  return (
    <>
      <Header />
      <Switch >
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/QuestionPage">
          <QuestionCurrentPage />
          {/* <QuestionPage /> */}
        </Route>
      </Switch>
    </>
  );
}

export default App;
