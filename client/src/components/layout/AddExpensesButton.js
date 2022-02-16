import React from "react";
import { Link } from "react-router-dom";

const AddExpensesButton = () => {
  return (
    <Link className="header-link" to="/addinfo/">
      Calculate Taxes Here!
    </Link>
  );
};
export default AddExpensesButton;