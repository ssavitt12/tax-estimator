import React, { Component, useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom"

import ErrorList from "./ErrorList"
import translateServerErrors from "../../services/translateServerErrors"

const AddEarningsForm = ({ user }) => {
  const defaultInput = {
    uber: "",
    lyft: "",
    ubereats: "",
    doordash: "",
    grubhub: "",
    instacart: "",
    other: ""
  }

  const [newEarning, setNewEarning] = useState(defaultInput)
  const [errors, setErrors] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  
 
  const getNewEarning = async (newEarningBody) => {
      try {
        const response = await fetch("/api/v1/earnings/${id}", {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json"
          }),
          body: JSON.stringify(newEarningBody)
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
        console.log("New earnings successfully created", body)
        setShouldRedirect(true)
      } catch (err) {
        console.error(`Error in fetch: ${err.message}`)
      }
    }
    
    const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    setNewEarning({
      ...newEarning,
      [name]: value,
      });
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      getNewEarning()
    }
  
    const clearForm = () => {
        setNewEarning(defaultInput);
      };
    
    if (shouldRedirect) {
        return <Redirect push to="/" />;
    }

  return (
    <div className="earnings-form">
      
      <h2>Add your earnings</h2>

      <ErrorList errors={errors} />

      <div className="form-data">
      <form onSubmit={handleSubmit}>
        <label className="uber">
          Earnings from Uber:
          <input
            type="text"
            name="uber"
            onChange={handleInputChange}
            value={newEarning.uber}
          />
        </label>
        <label className="lyft">
          Earnings from Lyft:
          <input
            type="text"
            name="lyft"
            onChange={handleInputChange}
            value={newEarning.lyft}
          />
        </label>
        <label className="ubereats">
          Earnings from UberEats:
          <input
            type="text"
            name="ubereats"
            onChange={handleInputChange}
            value={newEarning.ubereats}
          />
        </label>
        <label className="doordash">
          Earnings from Doordash:
          <input
            type="text"
            name="doordash"
            onChange={handleInputChange}
            value={newEarning.doordash}
          />
        </label>
        <label className="grubhub">
          Earnings from Grubhub:
          <input
            type="text"
            name="grubhub"
            onChange={handleInputChange}
            value={newEarning.grubhub}
          />
        </label>
        <label className="instacart">
          Earnings from Instacart:
          <input
            type="text"
            name="instacart"
            onChange={handleInputChange}
            value={newEarning.instacart}
          />
        </label>
        <label className="other">
          Earnings from Other Apps:
          <input
            type="text"
            name="other"
            onChange={handleInputChange}
            value={newEarning.other}
          />
        </label>

        <div className="new-group">
        <Link to={`/taxProfile`}>
        <input className="button" type="submit" value="Next: Tax Summary" />
        </Link>
        </div>

        <input className="button" type="button" value="Clear Form" onClick={clearForm} />

      </form>
      </div>
    </div>
  )
}

export default withRouter(AddEarningsForm)