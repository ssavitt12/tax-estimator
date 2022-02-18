import React from "react"

const ExpensesTile = ({ 
    mileage,
    communications,
    amenities,
    supplies,
    tolls,
    userName }) => {
  return (
    <div className="expenses-tile callout">
      <p className="mileage-text">Expenses:</p>
      <div className="expenses-bottom-row grid-x margin -x">
        <span className="mileage cell small-6">Mileage: {mileage}</span>
        <span className="communications cell small-6">Communications: {communications}</span>
        <span className="amenities cell small-6">Amenities: {amenities}</span>
        <span className="supplies cell small-6">Supplies: {supplies}</span>
        <span className="tolls cell small-6">Tolls: {tolls}</span>
        <span className="earnings-user cell small-6 text-right">Customer Name: {userName}</span>
      </div>
    </div>
  )
}

export default ExpensesTile