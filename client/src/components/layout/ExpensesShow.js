import React, { useState, useEffect } from "react";

import { withRouter, Redirect } from "react-router-dom";
import ErrorList from "./ErrorList";

const ExpensesShow = (props) => {
  const { user } = props;
  
  const [expense, setExpense] = useState({
    userId: "",
    mileage: "",
    communications: "",
    amenities: "",
    tolls: "",
    supplies: ""
    });

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState({});
  const expenseId = props.match.params.id;

  const getExpense = async () => {
    try {
      
      const response = await fetch(`/api/v1/expense/${expenseId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const body = await response.json()
      setExpense(body.expense)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getExpense();
  }, []);


  return(
    <div className="grid-container fixed">
      <h1>{expense.expenseId}</h1>
    </div>
  )}

export default withRouter(ExpensesShow)