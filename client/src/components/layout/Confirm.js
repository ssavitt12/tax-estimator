import React, { Component, useState } from "react";
import Taxes from "../../assets/taxes.gif"

export class Confirm extends Component {

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {

    const { values: { mileage, communications, amenities, supplies, tolls, uber, lyft, ubereats, doordash, grubhub, instacart, other, userFilingStatus, userHomeState} }= this.props
    const mileageDeduction = parseInt(mileage) * .585
    const totalExpense = parseInt((mileageDeduction)) + parseInt(communications) + parseInt(amenities) + parseInt(supplies) + parseInt(tolls)
    const totalEarning = parseInt(uber) + parseInt(lyft) + parseInt(ubereats) + parseInt(doordash) + parseInt(grubhub) + parseInt(instacart) + parseInt(other)

    let filingStatus = (totalEarning - 12550)
      if (userFilingStatus === "Married") {
        filingStatus = 25100
      }

    let stateIncomeTax = (filingStatus - totalExpense) * .05
      if (userHomeState === "New Hampshire") {
        stateIncomeTax = 0
      }

    let federalIncomeTax = (filingStatus - totalExpense) * .10
      if (filingStatus >= 9951 && filingStatus <= 40525) {
        federalIncomeTax = (filingStatus - totalExpense) * .12
      } else if 
      (filingStatus >= 40526 && filingStatus <=86375) {
        federalIncomeTax = (filingStatus - totalExpense) * .22
      } else if
      (filingStatus >= 86376 && filingStatus <= 164925) {
        federalIncomeTax = (filingStatus - totalExpense) * .24
      } else if
      (filingStatus >= 164926 && filingStatus <= 209425) {
        federalIncomeTax = (filingStatus - totalExpense) * .32
      } else if
      (filingStatus >= 209426 && filingStatus <= 523600) {
        federalIncomeTax = (filingStatus - totalExpense) * .35
      } else
      federalIncomeTax = filingStatus * .37

    let annualNetIncome = (filingStatus - stateIncomeTax - federalIncomeTax)

    return (
      <div className="grid-container">

        <div className="cell small-12 large-6">
          <h4>My Expenses: ${totalExpense.toFixed(2)}</h4>

          <h4>My Earnings: ${totalEarning.toFixed(2)}</h4>

          <h4>My State Income Tax: ${stateIncomeTax.toFixed(2)}</h4>

          <h4>My Federal Income Tax: ${federalIncomeTax.toFixed(2)} </h4>

          <h4>Annual Net Income: ${annualNetIncome.toFixed(2)}</h4>
        </div>
        <input className="button" type="button" value="Back " onClick={this.back} />
        <img src={Taxes} className="taxes" alt="Comic"/>
      </div>
      
    )
  }
}

export default Confirm