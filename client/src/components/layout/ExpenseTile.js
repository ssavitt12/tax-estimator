import React from "react";

const ExpenseTile = (props) => {
  const { mileage, communications, amenities, supplies, tolls } = props
  
 
  const mileageDeduction = mileage * 0.56
  
  const expenseTotal = mileageDeduction + communications + amenities + supplies + tolls

  return (
    <div className="expenses-tile callout">
      <div className="expenses-bottom-row grid-x margin -x">
        <span className="mileage cell small-6">Mileage: {props.mileage}</span>
        <span className="communications cell small-6">Communications: {communications}</span>
        <span className="amenities cell small-6">Amenities: {amenities}</span>
        <span className="supplies cell small-6">Supplies: {supplies}</span>
        <span className="tolls cell small-6">Tolls: {tolls}</span>
        <span className="total cell small-6">Total Deduction: {expenseTotal}</span>
      </div>
    </div>
  );
};

export default ExpenseTile;
