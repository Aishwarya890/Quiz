// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'; // Import Routes
import Register from './Component/Registration';
import QuizList from './Component/QuizList';
import AdminPanel from './Component/AdminPanel';
import TakeQuiz from './Component/TakeQuiz';
import User from './Component/User';
import NotFound from './Component/NotFound'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Component/NavigationBar';
import './App.css'
const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Routes> {/* Wrap your routes in <Routes> */}
                <Route path="/register" element={<Register />} />
                <Route path="/quizzes" element={<QuizList />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/user" element={<User />} />
                <Route path="/take-quiz/:quizId" element={<TakeQuiz />} />
                {/* <Route exact path="/" element={<h1>Welcome to the Quiz Application!</h1>} /> */}
               
                <Route
                    exact
                    path="/"
                    element={
                        <div>
                            <h1>Welcome to the Quiz Application!</h1>
                            <Link to="/register" className="btn btn-primary" >Register Here</Link>
                        </div>
                    }
                />
                
                <Route path="*" element={<NotFound />} /> {/* This will catch all unmatched routes */}
            </Routes>
        </Router>
    );
};

export default App;
