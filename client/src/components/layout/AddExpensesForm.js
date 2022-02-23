import React, { Component, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom"

import ErrorList from "./ErrorList"
import translateServerErrors from "../../services/translateServerErrors"

const AddExpensesForm = ({ user }) => {
  
  const defaultInput = {
    mileage: "",
    communications: "",
    amenities: "",
    supplies: "",
    tolls: "",
  };

  const [newExpense, setNewExpense] = useState(defaultInput);
  const [errors, setErrors] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const getNewExpense = async (event) => {
    const userId = user.id;
    debugger
    const newExpenseBody = new FormData();
    newExpenseBody.append("mileage", newExpense.mileage);
    newExpenseBody.append("communications", newExpense.communications);
    newExpenseBody.append("amenities", newExpense.amenities);
    newExpenseBody.append("supplies", newExpense.supplies);
    newExpenseBody.append("tolls", newExpense.tolls);
    newExpenseBody.append("userId", userId);
    try {
      const response = await fetch("/api/v1/expenses", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newExpenseBody)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          console.log(body)
          const errors = translateServerErrors(body.errors)
          setErrors(errors)
        }
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      console.log("New expense successfully created", body)
      setShouldRedirect(true)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    setNewExpense({
      ...newExpense,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getNewExpense();
  };

  const clearForm = () => {
    setNewExpense(defaultInput);
  };

  if (shouldRedirect) {
    return <Redirect push to="/" />;
  }

 
  return (
    <div className="expenses-form">
      <h2>Add your work-related expenses</h2>

      <ErrorList errors={errors} />
      <div className="form-data">
      <form onSubmit={handleSubmit}>
        <label className="mileage">
          Total mileage driven:
          <input
            type="text"
            name="mileage"
            onChange={handleInputChange}
            value={newExpense.mileage}
          />
        </label>
        <label className="communications">
          Communications Expenses:
          <input
            type="text"
            name="communications"
            onChange={handleInputChange}
            value={newExpense.communications}
          />
        </label>
        <label className="amenities">
          Amenities Expenses:
          <input
            type="text"
            name="amenities"
            onChange={handleInputChange}
            value={newExpense.amenities}
          />
        </label>
        <label className="supplies">
          Supplies Expenses:
          <input
            type="text"
            name="supplies"
            onChange={handleInputChange}
            value={newExpense.supplies}
          />
        </label>
        <label className="tolls">
          Tolls Paid While Working:
          <input 
            type="text" 
            name="tolls" 
            onChange={handleInputChange} 
            value={newExpense.tolls} />
        </label>

        <div className="group">
        <Link to={`/earnings`}>
          <input className="button" type="button" value="Next: Earnings" />
          </Link>
        </div>
        
        <input className="button" type="button" value="Clear Form" onClick={clearForm} />
        
      </form>
      </div>
    </div>
  );
};

export default withRouter(AddExpensesForm);
