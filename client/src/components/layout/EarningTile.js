import React from "react";

const EarningTile = ({ uber, lyft, ubereats, doordash, grubhub, instacart, other }) => {

  const totalEarning = uber + lyft + ubereats + doordash + grubhub + instacart + other

  return (
    <div className="earnings-tile callout">
      <div className="earnings-bottom-row grid-x margin -x">
        <span className="mileage cell small-6">Uber: {uber} </span>
        <span className="mileage cell small-6">Lyft: {lyft}</span>
        <span className="mileage cell small-6">UberEats: {ubereats}</span>
        <span className="communications cell small-6">Doordash: {doordash}</span>
        <span className="amenities cell small-6">Grubhub: {grubhub}</span>
        <span className="supplies cell small-6">Instacart: {instacart}</span>
        <span className="tolls cell small-6">Other: {other}</span>
        <span className="total cell small-6">Total Earnings: {totalEarning}</span>
      </div>
    </div>
  );
};

export default EarningTile;
