import React from "react";
import { NavLink } from "react-router-dom";

function SignIn() {
   return (
      <div>
         <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
         </NavLink>
      </div>
   );
}

export default SignIn;
