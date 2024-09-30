import React from "react";
import EmployeeListComponent from "../component/EmployeeListComponent";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  
  return (
    <div>
      <h1>HRNet</h1>
      <Link to="/">Home</Link>
      <h2>Employee List</h2>
      <EmployeeListComponent />
    </div>
  );
};

export default EmployeeList;

