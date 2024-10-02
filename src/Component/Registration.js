// src/Component/Registration.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Registration.css';


const RegistrationForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('User'); // Default role
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:8080/api/register', { fullName, email, role });
            setSuccess('Registration successful!');
            console.log(response.data);
          //Redirect based on role
            if (role === 'Admin') {
                navigate('/admin'); // Redirect to admin page
            } else {
                navigate('/user'); // Redirect to user page
            }
        } catch (err) {
            setError('Email is already exits. Please try again.');
            console.error(err);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Registration</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Full Name" 
                        value={fullName} 
                        onChange={(e) => setFullName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <div>
                        <label className="me-3">
                            <input 
                                type="radio" 
                                value="User" 
                                checked={role === 'User'} 
                                onChange={(e) => setRole(e.target.value)} 
                            />
                            User
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="Admin" 
                                checked={role === 'Admin'} 
                                onChange={(e) => setRole(e.target.value)} 
                            />
                            Admin
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
// src/Component/Registration.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import 'bootstrap/dist/css/bootstrap.min.css';

// const RegistrationForm = () => {
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [role, setRole] = useState('User'); // Default role
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
    
//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccess('');

//         try {
//             const response = await axios.post('http://localhost:8080/api/register', { fullName, email, role });
//             setSuccess('Registration successful!');
//             console.log(response.data);

//             // Redirect based on role
//             if (role === 'Admin') {
//                 navigate('/admin'); // Redirect to admin page
//             } else {
//                 navigate('/user'); // Redirect to user page
//             }
//         } catch (err) {
//             setError('Email already exists. Please try again.');
//             console.error(err);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Registration</h2>
//             {error && <div className="alert alert-danger">{error}</div>}
//             {success && <div className="alert alert-success">{success}</div>}
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <input 
//                         type="text" 
//                         className="form-control" 
//                         placeholder="Full Name" 
//                         value={fullName} 
//                         onChange={(e) => setFullName(e.target.value)} 
//                         required 
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <input 
//                         type="email" 
//                         className="form-control" 
//                         placeholder="Email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         required 
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Role</label>
//                     <div>
//                         <label className="me-3">
//                             <input 
//                                 type="radio" 
//                                 value="User" 
//                                 checked={role === 'User'} 
//                                 onChange={(e) => setRole(e.target.value)} 
//                             />
//                             User
//                         </label>
//                         <label>
//                             <input 
//                                 type="radio" 
//                                 value="Admin" 
//                                 checked={role === 'Admin'} 
//                                 onChange={(e) => setRole(e.target.value)} 
//                             />
//                             Admin
//                         </label>
//                     </div>
//                 </div>

//                 <button type="submit" className="btn btn-primary">Register</button>
//             </form>
//         </div>
//     );
// };

// export default RegistrationForm;
