import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";

import { motion, AnimatePresence } from "framer-motion";

export function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="newdish" element={<NewDish />} />
        <Route path="editdish/:id" element={<EditDish />} />
      </Routes>
    </AnimatePresence>
  );
}