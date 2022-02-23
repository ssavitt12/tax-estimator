import React from "react";
import { Link } from "react-router-dom";

const AddExpenseButton = () => {
  return (
    <Link className="header-link" to="/expenses/">
      Calculate Taxes Here!
    </Link>
  );
};
export default AddExpenseButton;