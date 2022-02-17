import React from "react"
import { Redirect } from "react-router-dom"

const LandingPage = ({ greeting, description }) => {
  
return (
  <div className="greeting-container">
    <h1>Are you self-employed? Do you use your vehicle for work?
        Have you earned more than $6,000 this year?</h1>
        <h3>Tax Estimator can help you save money. 
            Click below to sign up</h3>
    <div className="button-group">
      <input className="button" type="submit" value="Click Here" />
    </div>

    </div>
  )
}

export default LandingPage