import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";

import { motion, AnimatePresence } from "framer-motion";

export function AuthRoutes() {
  const location = useLocation();
  const user = localStorage.getItem("@foodexplorer:user");
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {
          !user && <Route path="*" element={<Navigate to="/" />} />
        }
      </Routes>
    </AnimatePresence>
  );
}