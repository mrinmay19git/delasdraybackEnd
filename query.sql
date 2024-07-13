CREATE TABLE Employee (
    f_Id INTEGER PRIMARY KEY AUTOINCREMENT,
    f_image BLOB,
    f_Name TEXT NOT NULL,
    f_email TEXT NOT NULL,
    f_Mobile TEXT NOT NULL,
    f_Designation TEXT,
    f_gender TEXT,
    f_Course TEXT,
    f_Createdate DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Login (
    f_sno INTEGER PRIMARY KEY AUTOINCREMENT,
    f_userName TEXT NOT NULL,
    f_pwd TEXT NOT NULL
);

INSERT INTO Login (f_userName, f_pwd) VALUES 
('user1', 'password1'),
('user2', 'password2'),
('user3', 'password3'),
('user4', 'password4'),
('user5', 'password5'),
('user6', 'password6'),
('user7', 'password7'),
('user8', 'password8'),
('user9', 'password9'),
('user10', 'password10');


INSERT INTO Employee (f_image, f_Name, f_email, f_Mobile, f_Designation, f_gender, f_Course)
VALUES
('https://example.com/images/alice.jpg', 'Alice Johnson', 'alice.johnson@example.com', '5551234567', 'Software Engineer', 'Female', 'Computer Science'),
('https://example.com/images/bob.jpg', 'Bob Smith', 'bob.smith@example.com', '5552345678', 'Project Manager', 'Male', 'Business Management'),
('https://example.com/images/carol.jpg', 'Carol White', 'carol.white@example.com', '5553456789', 'Data Analyst', 'Female', 'Statistics'),
('https://example.com/images/david.jpg', 'David Brown', 'david.brown@example.com', '5554567890', 'UX Designer', 'Male', 'Design'),
('https://example.com/images/eva.jpg', 'Eva Green', 'eva.green@example.com', '5555678901', 'Marketing Specialist', 'Female', 'Marketing'),
('https://example.com/images/frank.jpg', 'Frank Wright', 'frank.wright@example.com', '5556789012', 'Network Engineer', 'Male', 'Information Technology'),
('https://example.com/images/grace.jpg', 'Grace Hall', 'grace.hall@example.com', '5557890123', 'HR Manager', 'Female', 'Human Resources'),
('https://example.com/images/hank.jpg', 'Hank Adams', 'hank.adams@example.com', '5558901234', 'Sales Manager', 'Male', 'Sales'),
('https://example.com/images/ivy.jpg', 'Ivy Clark', 'ivy.clark@example.com', '5559012345', 'Content Writer', 'Female', 'Literature'),
('https://example.com/images/jack.jpg', 'Jack King', 'jack.king@example.com', '5550123456', 'Support Engineer', 'Male', 'Technical Support');


SELECT * FROM Employee;

SELECT * FROM Login;
