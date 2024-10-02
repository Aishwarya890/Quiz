// // src/Component/User.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const User = () => {
//     const navigate = useNavigate();

//     const handleTakeQuiz = () => {
//         // Navigate to the TakeQuiz component
//         navigate('/take-quiz/quizId');
//     };

//     return (
//         <div className="container mt-5 text-center">
//             <h2>Welcome to the User Dashboard</h2>
//             <button className="btn btn-success mt-4" onClick={handleTakeQuiz}>
//                 Take Quiz
//             </button>
//         </div>
//     );
// };

// export default User;
// src/Component/User.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const User = () => {
    const navigate = useNavigate();
    const [quizzes, setQuizzes] = useState([]); // State to hold available quizzes

    // Fetch available quizzes when the component mounts
    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/admin/quizzes'); // Adjust the API endpoint as needed
                setQuizzes(response.data); // Set the quizzes state with fetched data
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            }
        };

        fetchQuizzes();
    }, []);

    const handleTakeQuiz = (quizId) => {
        // Navigate to the TakeQuiz component with the actual quiz ID
        navigate(`/take-quiz/${quizId}`);
    };

    return (
        <div className="container mt-5 text-center">
            <h2>Welcome to the User Dashboard</h2>
            <h4>Select a Quiz to Take</h4>
            {quizzes.length > 0 ? (
                <div className="mt-4">
                    {quizzes.map((quiz) => (
                        <button
                            key={quiz.id} // Assuming quiz has an 'id' field
                            className="btn btn-success mx-2"
                            onClick={() => handleTakeQuiz(quiz.id)}
                        >
                            {quiz.subject} {/* Display quiz subject or name */}
                        </button>
                    ))}
                </div>
            ) : (
                <p>No quizzes available.</p>
            )}
        </div>
    );
};

export default User;
