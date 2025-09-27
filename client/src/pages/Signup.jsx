import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name, // backend expects "username"
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      setSuccess("Signup successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-tr from-yellow-100 via-yellow-50 to-yellow-200 overflow-hidden">
      {/* Floating shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-yellow-200 rounded-full opacity-20 top-[-50px] left-[-50px]"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-yellow-300 rounded-full opacity-15 bottom-[-40px] right-[-40px]"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md z-10"
      >
        <h1 className="text-4xl font-bold text-yellow-700 mb-6 text-center">Sign Up</h1>

        <form onSubmit={handleSignup} className="space-y-4">
          <motion.input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full border-yellow-300 focus:border-yellow-500 text-yellow-900"
            whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px rgba(250,204,21,0.5)" }}
            required
          />
          <motion.input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full border-yellow-300 focus:border-yellow-500 text-yellow-900"
            whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px rgba(250,204,21,0.5)" }}
            required
          />
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full border-yellow-300 focus:border-yellow-500 text-yellow-900"
            whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px rgba(250,204,21,0.5)" }}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}
          <motion.button
            type="submit"
            className="btn bg-yellow-500 hover:bg-yellow-600 text-white w-full mt-4 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(250,204,21,0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </form>

        <p className="mt-4 text-center text-yellow-800 font-semibold">
          Already have an account?{" "}
          <span
            className="cursor-pointer underline hover:text-yellow-900"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
}
