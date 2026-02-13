import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Components/AuthContext/AuthContext";

export default function Login() {
  const { login, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/"; 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Email & Password Login
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    login(email, password)
      .then(result => {
        console.log("Logged in user:", result.user);
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      });
  };

  // 🔹 Google Login
  const handleGoogleLogin = () => {
    setError("");

    googleSignIn()
      .then(result => {
        console.log("Google user:", result.user);
        navigate(from, { replace: true }); // redirect
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Login to GreenNest
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-3 text-gray-500 text-sm"
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <div className="text-right">
            <Link to="/forget-password" className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-all"
          >
            Login
          </button>
        </form>

        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center text-black justify-center gap-2 border py-3 rounded-md hover:bg-green-50 transition-all"
          >
            <FaGoogle className="text-green-600" />
            Continue with Google
          </button>
        </div>

        <p className="text-center text-black mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600 hover:underline font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
