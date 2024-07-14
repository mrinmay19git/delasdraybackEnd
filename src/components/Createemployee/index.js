import React, { useState } from 'react';
import './index.css'; // Import CSS file for styling

function Createemployee() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState(false); // Use a boolean for checkbox
  const [imgUpload, setImgUpload] = useState(null); // For file upload

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Perform validation here (e.g., using regular expressions)

    // Simulated API call (replace with actual backend logic)
    console.log('Submitting data:', {
      name,
      email,
      mobileNo,
      designation,
      gender,
      course,
      imgUpload,
    });
  };

  return (
    <div className="container">
      {/* Header with Logo, Home, Employee List, Hukkum Gupta, Logout */}
      <header>
        <div className="header-left">
          <span>Logo</span>
          <a href="#">Home</a>
          <a href="#">Employee List</a>
        </div>
        <div className="header-right">
          <span>Hukum Gupta -</span>
          <a href="#">Logout</a>
        </div>
      </header>

      {/* Main content */}
      <main>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="mobileNo">Mobile No:</label>
            <input
              type="text"
              id="mobileNo"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="designation">Designation:</label>
            <select
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option value="">Select Designation</option>
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="gender">Gender:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="M"
                  checked={gender === 'M'}
                  onChange={(e) => setGender(e.target.value)}
                />
                M
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="F"
                  checked={gender === 'F'}
                  onChange={(e) => setGender(e.target.value)}
                />
                F
              </label>
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="course">Course:</label>
            <input
              type="checkbox"
              id="course"
              checked={course}
              onChange={(e) => setCourse(e.target.checked)}
            />
            <label htmlFor="course">MCA/BCA/BSC</label>
          </div>

          <div className="form-row">
            <label htmlFor="imgUpload">Img Upload:</label>
            <input
              type="file"
              id="imgUpload"
              accept="image/jpeg, image/png" // Accept only jpg and png
              onChange={(e) => setImgUpload(e.target.files[0])}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>

      {/* Validation Notes Section (Optional) */}
      <aside>
        <h3>Validation Notes:</h3>
        <ul>
          <li>Validation required in all fields (server-side, JavaScript, or jQuery).</li>
          <li>Email validation (format and existence).</li>
          <li>Mobile number validation (numeric format).</li>
          <li>Email duplicate check (if applicable).</li>
          <li>Image upload (only JPG/PNG allowed).</li>
        </ul>
      </aside>
    </div>
  );
}

export default Createemployee;