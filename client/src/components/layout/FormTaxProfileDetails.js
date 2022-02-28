import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";

export class FormTaxProfileDetails extends Component {
  
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values, handleChange, handleFormSubmit } = this.props

    return (
      <div className="tax-profile-form">      
        <h2>Tax Profile</h2>
        <div className="form-data">
        <form onSubmit={handleFormSubmit}>
          <label className="filing-status-label">
            Choose your Filing Status:
            <select name="filing-status" onChange={handleChange('userFilingStatus')}> 
              <option defaultValue="" disabled>
                Pick a Filing Status
              </option>
              <option defaultValue="Single">Single</option>
              <option defaultValue="Married">Married</option>          
            </select>
          </label>
        
          <label className="home-state-label">
            Choose your Home State:
            <select name="home-state" onChange={handleChange('userHomeState')}> 
              <option defaultValue="" disabled>
                Pick a State
              </option>
              <option defaultValue="MA">Massachusetts</option>
              <option defaultValue="NH">New Hampshire</option>          
            </select>     
          </label>

          <input className="button" type="button" value="Back " onClick={this.back} />
          <input className="button" type="button" value="Sumbit " onClick={this.continue}/>
          
        </form>
        </div>
      </div>
    )
  }
}

export default FormTaxProfileDetails