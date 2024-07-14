
import React from 'react';
import {  Route, Routes, Link } from 'react-router-dom';
import Createemployee from '../Createemployee';
import EmployeeList from '../EmployeeList';
import EmployeeEdit from '../EmployeeEdit';
import Login from '../Login';

const Dashboard = () => {
  return (
    <div>
      <nav>
        <ul>
        <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="employee-list">Employee List</Link>
          </li>
          <li>
            <Link to="create-employee">Create Employee</Link>
          </li>
          <li>
            <Link to="edit-employee">Edit Employee</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav> 
    
      <Routes>
        <Route path="employee-list" element={<EmployeeList />} />
        <Route path="create-employee" element={<Createemployee/>} />
        <Route path="edit-employee" element={<EmployeeEdit />} />
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
      
    </div>
  );
};

const Home = () => {
  return <h2>Welcome To Admin Pannel</h2>;
};

const Logout = () => {
  return <Login />;
};

export default Dashboard;
