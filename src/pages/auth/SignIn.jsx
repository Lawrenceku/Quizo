import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSignIn = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        setLoading(true); // Set loading state to true
        setError(null); // Clear previous errors
        try {
            const response = await fetch('https://quizo-backend-bx0u.onrender.com/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                const user = await response.json(); // Await the response body as JSON
                localStorage.setItem('user', JSON.stringify(user)); // Store user data in local storage
                console.log('Signed in successfully');
                navigate('/'); // Redirect to home page
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.error('Error signing in:', error);
            setError('An unexpected error occurred');
        } finally {
            setLoading(false); // Reset loading state
        }
    };
    
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-green-600 to-green-900">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl mb-4 text-gray-800 font-bold">Sign In</h2>
                {error && <p className="text-red-600 mb-4">{error}</p>}
                <form onSubmit={handleSignIn}>
                    <input
                        type="username"
                        name="username"
                        placeholder="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <button
                        type="submit"
                        disabled={loading} // Disable button when loading
                        className={`w-full px-4 py-2 text-white rounded ${
                            loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-800 hover:bg-green-700'
                        }`}
                    >
                        {loading ? 'Loading...' : 'Sign In'}
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">
                        Don't have an account? <a href="/signup" className="text-green-600 underline">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
