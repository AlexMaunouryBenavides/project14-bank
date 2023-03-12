import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
   return (
      <main className="container__error">
         <h1>ERROR: WRONG URL</h1>
         <Link to={"/"}>Return to Homepage</Link>
      </main>
   );
};

export default Error;
