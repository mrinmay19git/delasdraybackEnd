/*import React from 'react';

const EmployeeItem = ({ employee }) => {
  return (
    <tr>
      <td>{employee.uniqueId}</td>
      <td><img src={employee.image} alt={employee.name} /></td>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.mobileNo}</td>
      <td>{employee.designation}</td>
      <td>{employee.gender}</td>
      <td>{employee.course}</td>
      <td>{employee.create_date}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default EmployeeItem;
*/
import React from 'react';

const EmployeeItem = ({ employee }) => {
  return (
    <tr>
      <td>{employee.f_Id}</td>
      <td><img src={employee.f_image} alt={employee.f_Name} /></td>
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
  );
};

export default EmployeeItem;
