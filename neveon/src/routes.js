import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Category } from "./pages/Category";
import { ItemPage } from "./pages/ItemPage";

export const useRoutes = () => {
  return (
    <Routes path>
      <Route path="/category" element={<Category />} exact />
      <Route path="/category/:id" element={<ItemPage />} exact />
      <Route path="*" element={<Navigate to="/category" replace />} />
    </Routes>
  );
};
