import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

function Router2() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:userId" element={<Profile />} />  {/* This is the route that will be used to pass the parameter URL parameter */}
        </Routes>
    );
};

export default Router2;     