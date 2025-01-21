import React, { useState, useEffect } from "react";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
        const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with actual authentication logic
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const [user,setUser] = useState(null);
    
        const navigate = useNavigate();
    
        useEffect(() => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setIsAuthenticated(true);
                setUser(JSON.parse(storedUser)); // Parse the string to an object
            } else {
                navigate('/signin');
            }
        }, []);
        
    
        const toggleDropdown = () => {
            setDropdownOpen((prev) => !prev);
        };
    
        const handleAddQuiz = () => {
            // Logic for adding a quiz
            console.log("Add Quiz clicked");
        };
    
        const handleLogout = () => {
            // Logic for logging out
            localStorage.removeItem("user");
            navigate("/signin");
            setIsAuthenticated(false); // Example logout
        };
    
    return(
        <section className="flex justify-between w-full py-10 px-8 bg-white">
                    <span className="font-bold text-3xl text-green-800">
                        Q<span className="text-green-500">uizo</span>
                    </span>
                    <div className="relative">
                        {isAuthenticated && 
                        < div className="flex items-center" >
                        <span className="font-medium mx-4 text-sm">Welcome {user.username}</span>
                            <button onClick={toggleDropdown}>
                                <VscAccount size={40} />
                            </button>
                            </div>
                            }
    
                        {dropdownOpen && isAuthenticated && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                <ul className="flex flex-col p-2">
                                    <li
                                        className="cursor-pointer p-2 hover:bg-gray-200"
                                        onClick={handleAddQuiz}
                                    >
                                        Dashboard
                                    </li>
                                    <li
                                        className="cursor-pointer p-2 hover:bg-gray-200"
                                        onClick={handleAddQuiz}
                                    >
                                        Create quiz
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
    )
}

export default Navbar