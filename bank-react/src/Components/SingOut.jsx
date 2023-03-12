import React from "react";
import { NavLink } from "react-router-dom";

function SignOut() {
   return (
      <div>
         <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign Out
         </NavLink>
      </div>
   );
}

export default SignOut;
