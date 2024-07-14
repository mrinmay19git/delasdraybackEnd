import React, { useState } from 'react';

function EmployeeEdit() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileNoChange = (e) => {
    setMobileNo(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or perform update logic here
    console.log('Update button clicked');
  };

  return (
    <div>
      <h1>Employee Edit</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <label>
          Mobile No:
          <input type="number" value={mobileNo} onChange={handleMobileNoChange} required />
        </label>
        <br />
        <label>
          Designation:
          <select value={designation} onChange={handleDesignationChange} required>
            <option value="">Select</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </label>
        <br />
        <label>
          Gender:
          <input type="radio" value="M" onChange={handleGenderChange} required /> Male
          <input type="radio" value="F" onChange={handleGenderChange} required /> Female
          <span>Selected gender: {gender}</span>
        </label>
        <br />
        <label>
          Course:
          <input type="radio" value="MCA" onChange={handleCourseChange} required /> MCA
          <input type="radio" value="BCA" onChange={handleCourseChange} required /> BCA
          <input type="radio" value="BSC" onChange={handleCourseChange} required /> BSC
          <span>Selected course: {course}</span>
        </label>
        <br />
        <label>
          Image:
          <input type="file" onChange={handleImageChange} required />
          <span>Selected image: {image && image.name}</span>
        </label>
        <br />
        <label>
          File:
          <input type="file" onChange={handleFileChange} required />
          <span>Selected file: {file && file.name}</span>
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EmployeeEdit;