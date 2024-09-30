import React from 'react'
import { Link } from 'react-router-dom'
import EmployeeForm from '../component/EmployeeFormComponent'

const Home = () => {
  return (
    <>
    <h1>HRNet</h1>
    <Link to="/employee-list">View current employees</Link>
    <h2>Create Employee</h2>
    <EmployeeForm />
    </>
  )
}

export default Home