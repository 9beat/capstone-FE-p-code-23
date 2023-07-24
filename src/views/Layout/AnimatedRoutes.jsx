import React from 'react'
import { useSelector } from 'react-redux';

import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
// Views
import Login from "../Auth/Login.jsx";
import Home from "../Home/Home.jsx";
import Profile from "../Profile/Profile.jsx";
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
// Framer
import { AnimatePresence } from "framer-motion";
// import ProtectedRoutes from '../../middleware/ProtectedRoutes.jsx';

const AnimatedRoutes = () => {
    const location = useLocation()

    // auth state
    const isAuth = Boolean(useSelector((state) => state.token));

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={ <Login /> } />
                {/* <Route element={ <ProtectedRoutes /> }> */}
                    <Route path="/home" element={ isAuth ? <Home /> : <Navigate to="/" /> } />
                    <Route path="/profile/:userId" element={ isAuth ? <Profile /> : <Navigate to="/" /> } />
                {/* </Route> */}
                <Route path="*" element={ <ErrorPage  /> } />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
