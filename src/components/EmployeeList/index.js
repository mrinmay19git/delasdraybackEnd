/*

import React, { useEffect, useState } from 'react';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:7000/')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <div>
        {employees.map(employee => (
          <div key={employee.f_Id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={employee.f_image} alt={employee.f_Name} style={{ width: '100px', height: '100px' }} />
            <h2>{employee.f_Name}</h2>
            <p>Email: {employee.f_email}</p>
            <p>Mobile: {employee.f_Mobile}</p>
            <p>Designation: {employee.f_Designation}</p>
            <p>Gender: {employee.f_gender}</p>
            <p>Course: {employee.f_Course}</p>
            <p>Created Date: {employee.f_Createdate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;

*/

import React, { useState, useEffect } from 'react';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://delasdraybackend.onrender.com')
     .then(response => response.json())
     .then(data => {
        console(data);
        setEmployees(data);
        setLoading(false);
      })
     .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.f_Id}>
              <td>{employee.f_Id}</td>
              <td>{employee.f_Name}</td>
              <td>{employee.f_email}</td>
              <td>{employee.f_Mobile}</td>
              <td>{employee.f_Designation}</td>
              <td>{employee.f_gender}</td>
              <td>{employee.f_Course}</td>
              <td>{employee.f_Createdate}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default EmployeeList;