// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SignUp.css';

// const SignUp = () => {
//     const [collegeId, setCollegeId] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Retrieve existing users from Local Storage
//         const users = JSON.parse(localStorage.getItem('users')) || [];

//         // Check if the user already exists
//         const userExists = users.some(user => user.username === username);
//         if (userExists) {
//             alert('User already exists. Please use a different username.');
//             return;
//         }

//         // Add the new user to the users array
//         const newUser = { collegeId, username, password };
//         users.push(newUser);

//         // Save updated users list to Local Storage
//         localStorage.setItem('users', JSON.stringify(users));

//         alert('User registered successfully!');
//         navigate('/login'); // Redirect to login page after successful registration
//     };

//     return (
//         <div className="signup-container">
//             <h2>Sign Up</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="College ID"
//                     value={collegeId}
//                     onChange={(e) => setCollegeId(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Sign Up</button>
//             </form>
//             <p>Already have an account? <a href="/login">Login here</a></p>
//         </div>
//     );
// };

// export default SignUp;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [collegeId, setCollegeId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Handle Sign Up
    const handleSignUp = (e) => {
        e.preventDefault();

        // Retrieve users from Local Storage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if username already exists
        if (users.find((user) => user.username === username)) {
            setErrorMessage('Username already exists.');
            return;
        }

        // Add the new user to users array
        const newUser = { collegeId, username, password };
        users.push(newUser);

        // Save updated users list to Local Storage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Account created successfully!');
        navigate('/login'); // Redirect to login page
    };

    return (
        <form className="form" onSubmit={handleSignUp}>
            <p className="title">Register</p>
            <p className="message">Signup now and get full access.</p>
            <label>
                <input
                    className="input"
                    type="text"
                    placeholder=""
                    value={collegeId}
                    onChange={(e) => setCollegeId(e.target.value)}
                    required
                />
                <span>College ID</span>
            </label>
            <label>
                <input
                    className="input"
                    type="email"
                    placeholder=""
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <span>Username (Email)</span>
            </label>
            <label>
                <input
                    className="input"
                    type="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <span>Password</span>
            </label>
            <button className="submit" type="submit">
                Sign Up
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p className="signin">
                Already have an account? <a 
                onClick={()=>navigate("/home")}
                style={{ cursor: 'pointer', color: 'blue' }}
               >Signin</a>
            </p>
        </form>
    );
};

export default SignUp;

