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
import axios from 'axios';

function  EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortedColumn, setSortedColumn] = useState('f_Name');
  const [sortedDirection, setSortedDirection] = useState('asc');

  useEffect(() => {
    axios.get('https://delasdraybackend.onrender.com')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSort = (column) => {
    if (sortedColumn === column) {
      setSortedDirection(sortedDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedColumn(column);
      setSortedDirection('asc');
    }
  };

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.f_Name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      employee.f_email.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  });

  const sortedEmployees = filteredEmployees.sort((a, b) => {
    if (sortedDirection === 'asc') {
      return a[sortedColumn] > b[sortedColumn] ? 1 : -1;
    } else {
      return a[sortedColumn] < b[sortedColumn] ? 1 : -1;
    }
  });

  return (
    <div>
      <input
        type="search"
        value={searchKeyword}
        onChange={handleSearch}
        placeholder="Search by name or email"
      />
      <table id="employeeTable">
        <thead>
          <tr>
            <th onClick={() => handleSort('f_Id')}>ID</th>
            <th onClick={() => handleSort('f_Name')}>Name</th>
            <th onClick={() => handleSort('f_email')}>Email</th>
            <th onClick={() => handleSort('f_Mobile')}>Mobile</th>
            <th onClick={() => handleSort('f_Designation')}>Designation</th>
            <th onClick={() => handleSort('f_gender')}>Gender</th>
            <th onClick={() => handleSort('f_Course')}>Course</th>
            <th onClick={() => handleSort('f_Createdate')}>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.map((employee) => (
            <tr key={employee.f_Id}>
              <td>{employee.f_Id}</td>
              <td>
                <img src={employee.f_image} alt={employee.f_Name} />
                {employee.f_Name}
              </td>
              <td>{employee.f_email}</td>
              <td>{employee.f_Mobile}</td>
              <td>{employee.f_Designation}</td>
              <td>{employee.f_gender}</td>
              <td>{employee.f_Course}</td>
              <td>{new Date(employee.f_Createdate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default  EmployeeList;