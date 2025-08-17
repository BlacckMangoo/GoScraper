import { useState } from 'react';





export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Login successful:', data);
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
    }

    return (
        <div className="bg-gray-900 w-screen h-screen flex items-center justify-center">
            <div className="flex flex-col bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-100 mb-2">Welcome Back</h1>
                    <p className="text-gray-400 text-sm">Sign in to continue chatting</p>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                            Username
                        </label>
                        <input 
                            id="username"
                            type="text" 
                            className="w-full bg-gray-700 border border-gray-600 p-3 rounded-xl text-gray-100 placeholder-gray-400 outline-none transition-all duration-200 hover:border-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20" 
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <input 
                            id="password"
                            type="password" 
                            className="w-full bg-gray-700 border border-gray-600 p-3 rounded-xl text-gray-100 placeholder-gray-400 outline-none transition-all duration-200 hover:border-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20" 
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <button 
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                        disabled={!username.trim() || !password.trim()}
                        onClick={handleLogin}
                    >
                        Sign In
                    </button>
                </div>
                
               
            </div>
        </div>
    );
}
