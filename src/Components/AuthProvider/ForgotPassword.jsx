import React, { use,  useState } from "react";

import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthContext/AuthContext";

export default function ForgotPassword() {
  const {resetPassword } = use(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to send reset email");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <Toaster position="top-center" />

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Reset Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
        />

        <button
          onClick={handleReset}
          className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
        >
          Reset Password
        </button>

        <p
          onClick={() => navigate("/login")}
          className="text-center text-sm text-green-600 mt-4 cursor-pointer hover:underline"
        >
          Back to Login
        </p>
      </div>
    </div>
  );
}
