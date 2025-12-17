import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

  const data = JSON.parse(localStorage.getItem('islogin'))


  // Conditionally render children or navigate to login page
  return data==true ? children : <Navigate to="/login" />;
};
