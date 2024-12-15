'use client';
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    console.log("Reset password request for:", email);
    // Add your forgot password logic here, e.g., API call to send reset email
    setMessage("If this email is registered, a reset link has been sent.");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Forgot Password</h2>
        <p className="mt-2 text-sm text-center text-gray-600">
          Enter your email to receive a password reset link.
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Send Reset Link
          </button>
        </form>
        {message && (
          <div className="mt-4 text-sm text-center text-green-600">
            {message}
          </div>
        )}
        <div className="mt-4 text-sm text-center text-gray-600">
          <p>
            Remembered your password?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
