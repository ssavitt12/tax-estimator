import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import ExpensesShow from "./layout/ExpensesShow";
import LandingPage from "./layout/LandingPage";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute.js"


const App = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/expenses" component={ExpensesShow} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        {/* <AuthenticatedRoute 
          exact path ="/expenses"
          component={ExpensesForm}
          user={currentUser}
        />
        <AuthenticatedRoute
          exact path="/user-profile"
          component={UserProfile}
          user={currentUser}
        /> */}
        {/* <Route exact path="/expenses" component={ExpensesList} /> */}
        <Route exact path="/expenses/:id">
          <ExpensesShow user={currentUser} />
        </Route>
      </Switch>
    </Router>
  );
};

export default hot(App);
