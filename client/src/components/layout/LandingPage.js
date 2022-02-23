import React from "react"
import { Link, Redirect } from "react-router-dom"

const LandingPage = ({ greeting, description }) => {
  
return (
  <div className="greeting-container">
    <h1>Are you self-employed? <br/>
      Do you use your vehicle for work? <br/>
        Have you earned more than $6,000 this year?</h1>
        <h3>Tax Master can help you save money. 
            Click below to sign up</h3>
  
    <Link to={`/users/new`}>
    <div className="group">
      <input className="button" type="submit" value="Click Here" />
    </div>
    </Link>
    <img src="https://cdn.vox-cdn.com/thumbor/_jwHHl9kwtDqAsTUm7Y5UaJMvRE=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19812154/shutterstock_1593229828.jpg" alt="Delivery Driver"></img>
    </div>
  )
}

export default LandingPage