import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute ({element: Component, ...props}) {
  // console.log(props.loggedIn)
  return props.loggedIn ? <Component {...props} /> : <Navigate to='/sign-in' replace/>
}

export default ProtectedRoute;
