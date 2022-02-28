import React from "react";
import { Link } from "react-router-dom";

const UserFormButton = () => {
  return (
    <Link className="header-link" to="/userForm/">
      Calculate Taxes Here!
    </Link>
  );
};
export default UserFormButton;