import React, { useState } from "react";
import Quiz from "./Quiz";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const QuizContainer = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true); // Replace with actual authentication logic
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleAddQuiz = () => {
        // Logic for adding a quiz
        console.log("Add Quiz clicked");
    };

    const handleLogout = () => {
        // Logic for logging out
        navigate("/signin");
        setIsAuthenticated(false); // Example logout
    };

    return (
        <div>
            <section className="flex justify-between w-full py-10 px-8">
                <span className="font-bold text-3xl text-green-800">
                    Q<span className="text-green-500">uizo</span>
                </span>
                <div className="relative">
                    {isAuthenticated && 
                        <button className="flex items-center" onClick={toggleDropdown}>
                            <span className="font-medium mx-8">Welcome Lawrence</span><VscAccount size={40} />
                        </button>}

                    {dropdownOpen && isAuthenticated && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                            <ul className="flex flex-col p-2">
                                <li
                                    className="cursor-pointer p-2 hover:bg-gray-200"
                                    onClick={handleAddQuiz}
                                >
                                    Add Quiz
                                </li>
                                <li
                                    className="cursor-pointer p-2 hover:bg-gray-200"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </section>
            <Quiz />
        </div>
    );
};

export default QuizContainer;
