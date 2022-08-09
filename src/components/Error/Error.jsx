import React from 'react';
import { Link } from 'react-router-dom';
import "./error.css"
const Error = () => {
   return (
      <div className="card waves-effect alert alert-danger p-5 mx-auto w-100">
         <h1>404</h1>
         <p>The page you want isn't available 😭</p>
         <Link to="/">return to homepage</Link>
      </div>
   );
};

export default Error;