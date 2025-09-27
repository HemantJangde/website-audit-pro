import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard user={user} /> : <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
        /> */}
           <Route
          path="/dashboard"
          element={ <Dashboard  />}
        />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
