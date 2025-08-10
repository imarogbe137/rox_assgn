import { Mail, Lock } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    alert("logins");
  };
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-900 p-4">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Email */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-600 mb-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <div className="flex items-center border-b border-gray-400 focus-within:border-blue-600 transition-colors">
            <Mail className="text-gray-500 mr-2" size={20} />
            <input
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none py-2 text-gray-800 placeholder-gray-400"
              autoComplete="off"
              value={data.email}
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-600 mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <div className="flex items-center border-b border-gray-400 focus-within:border-blue-600 transition-colors">
            <Lock className="text-gray-500 mr-2" size={20} />
            <input
              onChange={(e) =>
                setData((prev) => ({ ...prev, password: e.target.value }))
              }
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full bg-transparent outline-none py-2 text-gray-800 placeholder-gray-400"
              autoComplete="off"
              value={data.password}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogin}
            className="hover:cursor-grab active:cursor-grabbing bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-900 text-white font-medium py-2 px-6 rounded-lg shadow-md transition"
          >
            Login
          </button>
          <button
            onClick={handleRegister}
            className="text-blue-700 hover:underline font-medium hover:cursor-grab active:cursor-grabbing"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
