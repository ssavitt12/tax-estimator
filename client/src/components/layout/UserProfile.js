import React, { useEffect, useState } from "react";

import Taxes from "../../assets/taxes.gif"

const UserProfile = (props) => {

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  return (
    <div className="grid-container">
      <div className="background">
        <div className="cell small-12">
          <h1> {props.user.name}'s Profile</h1>
          <p className="user-info">
            Email: {props.user.email}
          </p>
        </div>
      </div>

      <img src={Taxes} className="taxes" alt="Comic"/>
    </div>
    
  );
};   

export default UserProfile;