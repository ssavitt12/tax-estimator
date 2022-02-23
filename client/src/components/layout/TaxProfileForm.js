import React, { Component, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom"

import ErrorList from "./ErrorList"
import translateServerErrors from "../../services/translateServerErrors"

const TaxProfileForm = ({ user }) => {
  const defaultInput = {
    userFilingStatus: "",
    userHomeState: "",
  }

  const [newTaxProfile, setNewTaxProfile] = useState(defaultInput)
  const [errors, setErrors] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const getNewTaxProfile = async (event) => {
    const userId = user.id
    const newTaxBody = new FormData()
    newTaxBody.append("userFilingStatus", newTaxProfile.userFilingStatus)
    newTaxBody.append("userHomeState", newTaxProfile.userHomeState)
    newTaxBody.append("userId", userId)
    try {
      const response = await fetch("/api/v1/taxprofile", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newTaxBody)
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
      console.log("New tax profile successfully created", body)
      setShouldRedirect(true)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  
  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget
    setNewTaxProfile({
      ...newTaxProfile,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getNewTaxProfile()
  }

  const clearForm = () => {
    setNewTaxProfile(defaultInput);
  };

  if (shouldRedirect) {
    return <Redirect push to="/" />;
  }
  

  return (
    <div className="tax-profile-form">
      
      <h2>Tax Profile For: {user.name} </h2>

      <ErrorList errors={errors} />
      
      <form onSubmit={handleSubmit}>
        <label className="filing-status-label">
          Choose your Filing Status:
          <select name="filing-status" onChange={handleInputChange} value="userfilingstatus"> 
          <option value="" disabled>
            Pick a Filing Status
          </option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>          
          </select>
          
        </label>
        
        <label className="home-state-label">
          Choose your Home State:
          <select name="home-state" onChange={handleInputChange} value="userhomestate"> 
          <option value="" disabled>
            Pick a State
          </option>
          <option value="MA">Massachusetts</option>
          <option value="NH">New Hampshire</option>          
          </select>
          
        </label>
        <div className="group">
        <Link to={`/user-profile`}>
        <input className="button" type="submit" value="Next: View Your Tax Summary" />
        </Link>
        </div>
        <input className="button" type="button" value="Clear Form" onClick={clearForm} />
      </form>
    </div>
  )
}

export default withRouter(TaxProfileForm)