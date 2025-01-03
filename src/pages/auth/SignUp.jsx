import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSignUp = async () => {
        setLoading(true); // Set loading state to true
        setError(null); // Clear previous errors
        try {
            const response = await fetch('https://placeholder-endpoint.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate('/signin'); // Redirect to sign in page on success
                console.log('Signed up successfully');
            } else {
                // Handle sign up error
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.error('Error signing up:', error);
            setError('An unexpected error occurred');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-green-600 to-green-900">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl mb-4 text-gray-800 font-bold">Sign Up</h2>
                {error && <p className="text-red-600 mb-4">{error}</p>}
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-4 border rounded"
                />
                <button
                    onClick={handleSignUp}
                    disabled={loading} // Disable button when loading
                    className={`w-full px-4 py-2 text-white rounded ${
                        loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-800 hover:bg-green-700'
                    }`}
                >
                    {loading ? 'Loading...' : 'Sign Up'} {/* Change text based on loading state */}
                </button>
                <div className="text-center mt-4">
                    <p className="text-gray-600">
                        Already have an account? <a href="/signin" className="text-green-600 underline">Sign In</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
