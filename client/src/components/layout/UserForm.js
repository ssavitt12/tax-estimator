import React, { Component, useState} from "react";

import FormExpenseDetails from "./FormExpenseDetails";
import FormEarningDetails from "./FormEarningsDetails";
import FormTaxProfileDetails from "./FormTaxProfileDetails";
import Confirm from "./Confirm"

export class UserForm extends Component {
  state = {
    step: 1,
    mileage: "",
    communications: "",
    amenities: "",
    supplies: "",
    tolls: "",
    uber: "",
    lyft: "",
    ubereats: "",
    doordash: "",
    grubhub: "",
    instacart: "",
    other: "",
    userFilingStatus: "",
    userHomeState: ""
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  addNewTax = async (formPayload) => {
    try {
      const response = await fetch("/api/v1/taxes", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(formPayload),
      })
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      const responseBody = await response.json()
      console.log(responseBody)
      setArticles(articles.concat(responseBody.article))
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      this.addNewTax(this.state)
      this.setState({
        mileage: "",
        communications: "",
        amenities: "",
        supplies: "",
        tolls: "",
        uber: "",
        lyft: "",
        ubereats: "",
        doordash: "",
        grubhub: "",
        instacart: "",
        other: "",
        userFilingStatus: "",
        userHomeState: ""
      })
    }
  }


  render() {
    const { step } = this.state
    const { mileage, communications, amenities, supplies, tolls, uber, lyft, ubereats, doordash, grubhub, instacart, other, userFilingStatus, userHomeState} = this.state
    const values = { mileage, communications, amenities, supplies, tolls, uber, lyft, ubereats, doordash, grubhub, instacart, other, userFilingStatus, userHomeState}
    
    switch(step) {
      case 1:
        return (
          <FormExpenseDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return  (
          <FormEarningDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return  (
          <FormTaxProfileDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleFormSubmit={this.handleFormSubmit}
            values={values}
          />
        )
      case 4:
        return  (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleFormSubmit={this.handleFormSubmit}
            values={values}
          />
        )
    }
  }
}

export default UserForm