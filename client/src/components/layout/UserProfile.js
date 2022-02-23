import React, { useEffect, useState } from "react";
import Fetcher from "../../services/Fetcher";
import { Link } from "react-router-dom";

import ExpenseTile from "./ExpenseTile"
import EarningTile from "./EarningTile";
import { checkPropTypes } from "prop-types";
import Taxes from "../../assets/taxes.gif"

const UserProfile = (props) => {
  const userId = props.user.id;  
  const [user, setUser] = useState({
    name: "",
    email: "",
    expenses: [],
    earnings: []
  });

  const getUserData = async () => {
    const response = await Fetcher.get(`/api/v1/users/${userId}`);
    if (response.ok) {
      return setUser(response.data.user);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  /* const grossEarnings = (totalEarning - expenseTotal) */
/* 
  const userDeduction = () => {
    if (user.userFilingStatus === "Single") {
      return grossEarnings - 12550
    } else {
      return grossEarnings - 25100
    }
  }

  const stateIncomeTax = () => {
    if (user.userHomeState === "MA") {
      return grossEarnings * .05
    } else {
      return grossEarnings
    }
  }

  const federalIncomeTax = () => {
    if (user.grossEarnings <=9950) {
      return grossEarnings * .1
    } else if 
      (user.grossEarnings <=9951 && user.grossEarnings<=40525) {
      return grossEarnings * .12
    } else if 
      (user.grossEarnings <=40526 && user.grossEarnings<=86375) {
      return grossEarnings * .22
    } else if 
      (user.grossEarnings<=86376 && user.grossEarnings<=164925) {
      return grossEarnings * .24
    } else if 
      (user.grossEarnings<=164926 && user.grossEarnings<=209425) {
      return grossEarnings * .32
    } else if 
      (user.grossEarnings<=209426 && user.grossEarnings<=523600) {
      return grossEarnings * .35
    } else 
      return grossEarnings * .35
    }
  
    const stateTaxesOwed = grossEarnings(userDeduction)(stateIncomeTax)

    const federalTaxesOwed = grossEarnings(userDeduction)(stateIncomeTax)
   */
  return (
    <div className="grid-container">
      
        <div className="background">
        <div className="cell small-12">
          <h1> {props.user.name}'s Profile</h1>

          <p className="user-info">
           
            Email: {props.user.email} 
          </p>
        </div>

        <div className="cell small-12 large-6">
          <h4>My Expenses: $18632.41</h4>
          <ul>{/* <ExpenseTile/> */}</ul>  
        

        <h4>My Earnings: $59300.00</h4>
          <ul>{/* <EarningTile /> */}</ul>
        </div>

        <div className="cell small-12 large-6">
          <h3>State Taxes Owed: 1428.38</h3>
          <ul>{/* {stateTaxesOwed} */}</ul>
        
          <h3>Federal Taxes Owed: 3428.11</h3>
          <ul>{/* {federalTaxesOwed} */}</ul>
        </div>
        


        </div>
        <div className="summary">
      <h3>Net Income: $ 54443.51 </h3>
    </div>

    <img src={Taxes} className="taxes" alt="Comic"/>
    </div>
    
  );
};   

export default UserProfile;